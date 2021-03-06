import axios from 'axios';

const API = axios.create({ baseURL: 'https://my-memories234.herokuapp.com/' });

API.interceptors.request.use(req => {
    if(localStorage.getItem('profile')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
})

//const url = 'http://localhost:4000/posts';
//const url = 'https://memories234.herokuapp.com/posts';

export const fetchPosts = () => API.get('/posts');
export const createPost = (newPost) => API.post('/posts', newPost);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);


//const auth = 'http://localhost:4000/users';

export const signin = (formData) => API.post(`/users/signin`, formData);
export const signup = (formData) => API.post(`/users/signup`, formData);