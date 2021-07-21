import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: { authData: null },
    reducers: {
        auth: (state, action) => {
            localStorage.setItem('profile', JSON.stringify({ ...action.payload.data }));
            
            state.authData = { ...action.payload.data };
        },
        logout: (state, action) => {
            localStorage.clear();
            
            state.authData = null;
        }
    }
})

export default authSlice.reducer;

export const { auth, logout } = authSlice.actions;