import { createSlice } from '@reduxjs/toolkit';
import * as api from '../api';

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
        },
    }
})

export const { update, fetchPosts, newPost, removePost } = userData.actions;

export const getPosts = () => async (dispatch) => {
    try {

        const { data } = await api.fetchPosts();
        dispatch(fetchPosts(data));
        
    } catch (error) {
        console.log(error);
    }
}

export const createPost = (post) => async (dispatch) => {
    try {

        const { data } = await api.createPost(post);
        dispatch(newPost(data));
        
    } catch (error) {
        console.log(error);
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {

        await api.deletePost(id);
        dispatch(removePost(id));

    } catch (error) {
        console.log(error);
    }
}

export const likePost = (id) => async (dispatch) => {
    try {

        const { data } = await api.likePost(id);
        dispatch(update(data));

    } catch (error) {
        console.log(error);
    }
}

export const updatePost = (id, post) => async (dispatch, getState) => {
    try {

        const { data } = await api.updatePost(id, post);
        dispatch(update(data));

    } catch (error) {
        console.log(error);
    }
}

export default userData.reducer;