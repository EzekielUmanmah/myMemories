import { auth } from '../reducers/authSlice';
import * as api from '../api/index';

export const signUp = (formData, history) => async (dispatch) => {
    try {
        
        const { data } = await api.signup(formData);
        dispatch(auth({ data }));
        history.push('/');
        
    } catch (error) {
        console.log(error);
    }
}

export const signIn = (formData, history) => async (dispatch) => {
    try {

        const { data } = await api.signin(formData);
        dispatch(auth({ data }));
        history.push('/');

    } catch (error) {
        console.log(error);
    }
}