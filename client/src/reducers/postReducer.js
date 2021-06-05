import { createSlice } from '@reduxjs/toolkit';
//import * as api from '../api';

export const userData = createSlice({
    name: 'user',
    initialState: [],
    reducers: {
        update: (posts, action) => { 
            return posts.map(post => post._id === action.payload._id ? action.payload : post);
        },
        fetchPosts: (posts, action) => {
            return action.payload;
        },
        newPost: (posts, action) => {
            return [...posts, action.payload];
        },
        removePost: (posts, action) => {
            return posts.filter(post => post._id !== action.payload);
        }
    }
})

export const { update, fetchPosts, newPost, removePost } = userData.actions;

export default userData.reducer;