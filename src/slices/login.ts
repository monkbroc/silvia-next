import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import particle from '../particle';
import { RootState } from '../store';

interface LoginState {
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    accessToken: string;
    errorMessage: string | null;
}

const initialState: LoginState = {
    status: 'idle',
    accessToken: '',
    errorMessage: null
};

type LoginParams = {
    username: string;
    password: string;
}
export const performLogin = createAsyncThunk<string, LoginParams>('particle/login', async ({ username, password }) => {
    const { body } = await particle.login({ username, password });
    return body.access_token;
});

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(performLogin.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(performLogin.fulfilled, (state, action) => {
                state.status = 'idle';
                state.accessToken = action.payload;
            })
            .addCase(performLogin.rejected, (state, action) => {
                state.status = 'failed';
                state.errorMessage = 'Invalid username or password';
            });
    }
});

export const selectAccessToken = (state: RootState) => {
    return state.login.accessToken;
}

export const selectLoggedIn = (state: RootState) => {
    return !!state.login.accessToken;
}

export default loginSlice.reducer;