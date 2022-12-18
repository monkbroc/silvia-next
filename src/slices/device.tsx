import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AppCalibrations, calibrationsToApp } from '../FirmwareDataMapper';
import particle from '../particle';

const deviceName = "silvia";
const deviceEvent = "coffee";
const deviceCals = "cals";
const deviceWakeupTime = "Twakeup";

interface DeviceState {
    calibration: {
        status: 'idle' | 'loading' | 'succeeded' | 'failed';
        values: AppCalibrations;
    }
}

const initialState: DeviceState = {
    calibration: {
        status: 'idle',
        values: {}
    }
};

type CalParams = {
    accessToken: string;
}

export const fetchCalibrations = createAsyncThunk<AppCalibrations, CalParams>('device/fetchCalibrations', async ({ accessToken }) => {
    const { body } = await particle.getVariable({ deviceId: deviceName, name: deviceCals, auth: accessToken });
    const rawData = JSON.parse(body.result);
    return calibrationsToApp(rawData);
});


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
                state.calibration.status = 'idle';
                state.calibration.values = {
                    ...state.calibration.values,
                    ...action.payload
                };
            })
            .addCase(fetchCalibrations.rejected, (state, action) => {
                state.calibration.status = 'failed';
            });
    }
});