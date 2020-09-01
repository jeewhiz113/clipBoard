import React, {useEffect}from 'react';
import LandingPage from './components/LandingPage';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from'redux-thunk';
import { Provider } from 'react-redux';
import reducers from './reducers';
import { loadUser } from './actions/authActions';


//work on the logout button.
//populate authReducer for cases like loginfail, registerfail and etc...
//Code up the logout button (brad traversy)
//Work on access control, just as a demo, work on making a questions collection, which is linked to the user model.  Next create an add and a delete button to add/delete a question.  

//Lastly, work on authenticating the user before allowing users to modify the questions collection.
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
