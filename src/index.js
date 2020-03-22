import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Containers/App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios'

axios.defaults.baseURL = 'https://phones-api-jaimedordio.herokuapp.com';

axios.interceptors.request.use(request => {
    console.log('request', request);
    return request;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

axios.interceptors.response.use(response => {
    console.log('response', response);
    return response;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
