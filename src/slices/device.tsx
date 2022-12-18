import { createAction, createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppCalibrations, AppVariables, calibrationsToApp, variablesToApp } from '../FirmwareDataMapper';
import particle from '../particle';
import { AppDispatch, AppGetState, RootState } from '../store';
import { selectAccessToken } from './login';

const deviceName = "silvia";
const deviceEvent = "coffee";
const deviceCals = "cals";
const deviceWakeupTime = "Twakeup";

interface DeviceState {
    calibration: {
        status: 'idle' | 'loading' | 'succeeded' | 'failed';
        values: AppCalibrations;
    },
    variables: {
        values: AppVariables
    }
}

const initialState: DeviceState = {
    calibration: {
        status: 'idle',
        values: {}
    },
    variables: {
        values: {}
    }
};

export const fetchCalibrations = createAsyncThunk<AppCalibrations, void, { state: RootState }>('device/fetchCalibrations', async (_, { getState }) => {
    const accessToken = selectAccessToken(getState());
    const { body } = await particle.getVariable({ deviceId: deviceName, name: deviceCals, auth: accessToken });
    const rawData = JSON.parse(body.result);
    return calibrationsToApp(rawData);
});

const receiveDeviceData = createAction<AppVariables>('device/receiveData');

export const subscribeToDeviceData = () => {
    return async (dispatch: AppDispatch, getState: AppGetState) => {
        const accessToken = selectAccessToken(getState());

        return particle.getEventStream({ name: deviceEvent, deviceId: deviceName, auth: accessToken })
            .then((stream) => {
                stream.on('event', (event) => {
                    let rawData = JSON.parse(event.data);
                    let data = variablesToApp(rawData);

                    dispatch(receiveDeviceData(data));
                });

                return stream;
            });
        };
};


const deviceSlice = createSlice({
    name: 'device',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCalibrations.pending, (state) => {
                state.calibration.status = 'loading';
            })
            .addCase(fetchCalibrations.fulfilled, (state, action) => {
                state.calibration.status = 'succeeded';
                state.calibration.values = {
                    ...state.calibration.values,
                    ...action.payload
                };
            })
            .addCase(fetchCalibrations.rejected, (state) => {
                state.calibration.status = 'failed';
            });
        builder
            .addCase(receiveDeviceData, (state, action) => {
                state.variables.values = action.payload;
            });
    }
});

export default deviceSlice.reducer;