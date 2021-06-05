import * as api from '../api';

import { update, fetchPosts, newPost, removePost } from '../reducers/postReducer';

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