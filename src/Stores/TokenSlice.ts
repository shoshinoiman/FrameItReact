import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { jwtDecode } from 'jwt-decode';  // שימוש ב-`jwtDecode`
import { User } from '../Moldes/User'; // ייבוא טיפוס `User`
import { Collage } from '../Moldes/Collage';
import { GetAllCollagesByUserId } from '../Components/Services/CollageService';

interface TokenState {
  token: string | null;
  user: User | null; 
}




// פונקציה לפענוח הטוקן
const decodeToken = (token: string): User => {
  try {
    const decoded: any = jwtDecode(token); // פענוח הטוקן


    return {
      id: decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"] || null,
      name: decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"] || null,
      email: decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"] || null,
      role: decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"] || null
    };
  } catch (error) {
    console.error("Error decoding token:", error);
    return { id: null, name: null, email: null, role: null }; // במקרה של טעות
  }
};
const initialState: TokenState = {
  token: localStorage.getItem('token') || null,
  user: localStorage.getItem('token') ? decodeToken(localStorage.getItem('token')!) : null, // טוען את המשתמש מה-token אם הוא קיים ב-localStorage
};
const TokenSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      localStorage.setItem('token', action.payload);

      // פענוח הטוקן ושמירת המידע ב-user
      const decodedUser = decodeToken(action.payload);
      state.user = decodedUser;
    },
    clearToken: (state) => {
      state.token = null;
      state.user = null;  // ננקה את פרטי המשתמש
      localStorage.removeItem('token');
    },
  },
});




export const { setToken, clearToken } = TokenSlice.actions;
export default TokenSlice.reducer;
