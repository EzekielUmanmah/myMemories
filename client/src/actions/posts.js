import * as api from '../api';
import { update, addPost, removePost } from '../reducers/postReducer';

export const createPost = (post) => async (dispatch) => {
    try {

        const { data } = await api.createPost(post);
        dispatch(addPost(data));
        
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
        dispatch(update({id, changes: {...data}}));

    } catch (error) {
        console.log(error);
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
            
        const { data } = await api.updatePost(id, post);
        dispatch(update({id, changes: {...data}}));

    } catch (error) {
        console.log(error);
    }
}

