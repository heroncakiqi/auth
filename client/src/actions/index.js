import axios from 'axios';
import { AUTH_USER, AUTH_ERROR } from './types';



export const signup = (formProps, callback) => async dispatch => {
  try {
    const res = await axios.post('http://localhost:6969/signup', formProps);  
    dispatch({
      type: AUTH_USER,
      payload: res.data.token
      });
    localStorage.setItem('token', res.data.token);
    callback();
   }
   catch(err) {
     dispatch({
       type: AUTH_ERROR,
       payload: err.response.data
     });
   }
}

export const logout = () => {
  localStorage.removeItem('token');
  return {
    type: AUTH_USER,
    payload: ''
  }
}

export const login = (formProps, callback) => async dispatch => {
  try {
    const res = await axios.post('http://localhost:6969/login', formProps);  
    dispatch({
      type: AUTH_USER,
      payload: res.data.token
      });
    localStorage.setItem('token', res.data.token);
    callback();
   }
   catch(err) {
     dispatch({
       type: AUTH_ERROR,
       payload: err.response.data
     });
   }
}