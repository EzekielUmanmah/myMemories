import { configureStore } from '@reduxjs/toolkit';
import authSlice from './reducers/authSlice';
import postReducer from './reducers/postReducer';

export default configureStore({
    reducer: {
        posts: postReducer,
        auth: authSlice
    }
})