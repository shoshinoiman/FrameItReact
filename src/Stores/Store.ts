// stores/Store.ts
import { configureStore } from '@reduxjs/toolkit';
import TokenSlice from './TokenSlice';
import UserSlice from './UserSlice';

export const Store = configureStore({
  reducer: {
    token: TokenSlice,
    user: UserSlice,
    // collagw: CollageSlice,
  },
});
export type RootState = ReturnType<typeof Store.getState>; // הגדרת טיפוס RootState
export type AppDispatch = typeof Store.dispatch;