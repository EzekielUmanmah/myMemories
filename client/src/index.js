import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import './index.css';
import store from './store';

//import { getPosts } from './reducers/postReducer';
//store.dispatch(getPosts())

ReactDOM.render(
    <Provider store={store}>
      <App />  
    </Provider>, 
    document.getElementById('root'));