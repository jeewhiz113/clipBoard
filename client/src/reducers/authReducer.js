const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  isLoading: false,
  user: null
}

const authReducer = (state = initialState, action) =>{
  switch(action.type){
    case 'LOGIN_SUCCESS':
      //console.log('action payload', action.payload.token);
      localStorage.setItem('token', action.payload.token);
      return{
        ...state,
        token: action.payload.token,
        isAuthenticated: true,
        isLoading: false,
      }
    case 'REGISTER_SUCCESS':
      return {
        ...state,
        user: action.payload.user
      }
    default:
      return{
        ...state
      }
  }
}

export default authReducer;