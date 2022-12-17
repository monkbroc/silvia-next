import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LoginState {
    accessToken: string;
}

const initialState: LoginState = {
    accessToken: ''
};

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        performLogin(state) {
            return state;
        }
    }
});

export const { performLogin } = loginSlice.actions;
export default loginSlice.reducer;