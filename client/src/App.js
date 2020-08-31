import React, {useEffect}from 'react';
import LandingPage from './components/LandingPage';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from'redux-thunk';
import { Provider } from 'react-redux';
import reducers from './reducers';
import { loadUser } from './actions/authActions';

//So now we work on the RegisterModal and its smaller details.  Its able to register a user, and update the redux store if an error occurs, we need to incorporate some of the smaller details on the front end.

const store = createStore(reducers, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

function App() {
  useEffect(()=>{
    store.dispatch(loadUser());
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
