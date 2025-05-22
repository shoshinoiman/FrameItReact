// UserSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {jwtDecode} from 'jwt-decode';

interface TokenState {
  token: string | null;
  user: any;  // כאן נוכל לשמור את המידע המפוענח מהטוקן
}

const initialState: TokenState = {
  token: localStorage.getItem('token') || null,
  user: null,  // נאתחל את המשתמש כ-null בהתחלה
};

const TokenSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      localStorage.setItem('token', action.payload);
      
      // פענוח הטוקן ושמירת המידע ב-user
      const decodedToken = jwtDecode(action.payload);
      state.user = decodedToken;  // שימור המידע המפוענח ב-user
    },
    clearToken: (state) => {
      state.token = null;
      state.user = null;  // גם ננקה את המשתמש
      localStorage.removeItem('token');
    },
  },
});

export const { setToken, clearToken } = TokenSlice.actions;
export default TokenSlice.reducer;
