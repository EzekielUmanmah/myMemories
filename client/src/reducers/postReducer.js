import { createSlice, createEntityAdapter, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPosts } from '../api';

export const getPosts = createAsyncThunk('posts/fetchPosts', async () => {
    try {

        const { data } = await fetchPosts();
        return data;

    } catch (error) {
        console.log(error);
    }
});

const postsAdapter = createEntityAdapter({ 
    selectId: post => post._id,
    //sortComparer: (a, b) => b.createdAt.localeCompare(a.createdAt)
});

export const postsSlice = createSlice({
    name: 'posts',
    initialState: postsAdapter.getInitialState({ status: 'idle', error: null }),
    reducers: {
        update: (id, data) => postsAdapter.updateOne(id, data),
        //removePost: (id, post) => postsAdapter.removeOne(id, post),
        removePost: postsAdapter.removeOne,
        addPost: postsAdapter.addOne
    },
    extraReducers: {
        [getPosts.pending]: (state, action) => {
            state.status = 'fetching';
        },
        [getPosts.fulfilled]: (state, action) => {
            state.status = 'succeeded';
            postsAdapter.upsertMany(state, action.payload);
        },
        [getPosts.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        }
    }
})

export const { update, removePost, addPost } = postsSlice.actions;

export default postsSlice.reducer;

export const {
    selectAll: selectAllPosts,
    selectById: selectPostById,
    selectIds
} = postsAdapter.getSelectors(state => state.posts);
