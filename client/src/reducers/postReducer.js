import { createSlice } from '@reduxjs/toolkit';
import { DELETE, CREATE, UPDATE, FETCH_ALL } from '../constants/actionTypes';

export const userData = createSlice({
    name: 'user',
    initialState: {
        title: '',
        message: '',
        creator: '',
        tags: [],
        selectedFile: '',
        likeCount: 0,
        createdAt: new Date()
    },
    reducers: {
        UPDATE: (posts, action) => {
            posts.map(post => post._id === action.payload._id ? action.payload : post);
        }
    }
})

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post);

        dispatch(UPDATE(data));
    } catch (error) {
        console.log(error);
    }
}