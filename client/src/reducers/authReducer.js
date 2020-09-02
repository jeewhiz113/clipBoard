const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  isLoading: false,
  user: null
}

const authReducer = (state = initialState, action) =>{
  switch(action.type){
    case 'USER_LOADING':  //get the user from the backend.
      return {
        ...state,
        isLoading: true
      }
    case 'USER_LOADED':   //runs all the time at every request to see if logged in or not.
      return{
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload  //send the user as the payload.
      }
    case 'LOGIN_SUCCESS':
      //console.log('action payload', action.payload.token);
      localStorage.setItem('token', action.payload.token);
      return{
        ...state,
        token: action.payload.token,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload.user
      }
    case 'REGISTER_SUCCESS':
      return {
        ...state,
        user: action.payload.user
      }
      case 'AUTH_ERROR':
      case 'LOGIN_FAIL':
      case 'LOGOUT_SUCCESS':
      case 'REGISTER_FAIL':
        localStorage.removeItem('token');
        return {
          ...state,
          token:null,
          isAuthenticated: false,
          isLoading: false,
          user:null
        }
    default:
      return{
        ...state
      }
  }
}

export default authReducer;