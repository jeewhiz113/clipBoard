const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  isLoading: false,
  user: null
}

const authReducer = (state = initialState, action) =>{
  return state;
}

export default authReducer;