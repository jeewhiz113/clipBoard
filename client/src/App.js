import React, {useEffect}from 'react';
import LandingPage from './components/LandingPage';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from'redux-thunk';
import { Provider } from 'react-redux';
import reducers from './reducers';
import { loadUser } from './actions/authActions';

//We skip the logout part for now, we come back to it once we have the login part.

//Next we work on the log in part.
const store = createStore(reducers, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

function App() {
  useEffect(()=>{
    store.dispatch(loadUser());  //what does this actually check?
  })
  return (
    <div className="App">
      <Provider store = {store}>
        <LandingPage />
      </Provider>
    </div>
  );
}
const mapStateToProps = (state) =>{
  return {
    ...state
  }
}

export default App;
