import axios from 'axios';
import {returnErrors} from './errorActions'

import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from "./types";

//Check token and load user
export const loadUser = () => (dispatch, getState) =>{ //Whatis getState?!?!?
  //User loading
  dispatch ({type: USER_LOADING}); //dispatch action to reducer, which sets user_loading to be true.

  axios.get('/api/auth/user', tokenConfig(getState)) //send to backend to get the user.
    .then(res =>dispatch({
      type: USER_LOADED,
      payload: res.data  //object with the user object and the token
    }))
    .catch(err =>{
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({type:AUTH_ERROR});  //set the state to be authReducer's initial state.
    })
};


//getState() returns the current state tree of the application.  It is the last value returned by the store's reducer.
export const tokenConfig = getState =>{
  //Get token from localStorage
  const token = getState().auth.token;

  //Headers
  const config = {
    headers: {
      "Content-type": "application/json"
    }
  }
  //If token, add to headers
  if (token){
    config.headers['x-auth-token'] = token;
  }
  return config;
}

//Register User:
export const register = (user) => dispatch =>{
  axios.post('/api/auth/register', user) //make the post request with name and headers
    .then((res) =>{
      //console.log(res.data);
      dispatch({
      type: 'REGISTER_SUCCESS',
      payload: res.data
    })}) //recall server comes back with the user information, send it over to reducer.))
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL'));
      dispatch({type: 'REGISTER_FAIL'});  //id is REGISTER_FAIL
    })
}



 //Login user:
export const login = (user) => dispatch => {
  axios.post('/api/auth/login', user) //make the post request with name and headers
    .then((res) =>{
      console.log(res.data);
      dispatch({
      type: 'LOGIN_SUCCESS',
      payload: res.data
    })}) //recall server comes back with the user information, send it over to reducer.))
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL'));
      dispatch({type: 'LOGIN_FAIL'});  //id is REGISTER_FAIL
    })
} 