import axios from 'axios';

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
      dispatch({type: 'LOGIN_FAIL'});  //id is REGISTER_FAIL
    })
}