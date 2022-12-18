import { configureStore, Store } from "@reduxjs/toolkit";
import loginReducer from './slices/login';
import deviceReducer from './slices/device';
import { createWrapper } from 'next-redux-wrapper';

const makeStore = () => configureStore({
    reducer: {
        login: loginReducer,
        device: deviceReducer
    }
});

export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore['dispatch'];
export type AppGetState = AppStore['getState'];
export type RootState = ReturnType<AppGetState>;
// export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;

export const wrapper = createWrapper<AppStore>(makeStore);