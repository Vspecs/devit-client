import { configureStore } from '@reduxjs/toolkit';
import activate from './activateSlice';
import user from './userSlice';
import rooms from './roomsSlice';
export const store = configureStore({
    reducer: {
        activate,
        user,
        rooms,
    },
});
