import React from 'react';
import LandingPage from './components/LandingPage';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import authReducer from './reducers/';

//So here is the idea:
/*
  1. Setup the redux store, the net ninja redux video #39.  Set up the redux store to check if the user is logged in or not.  
  
  (go to the backend and change the login function to sign the jwt and send it out to the front end.  Also change the valid time)
  (then we need to work on dispatching an action, such as the Login action.  And once done, we set the token variable in our redux store to be the payload of such action!)

  2.  If localStorage is not present, then launch the landing page.  (For this part here, let's refer to Brad's video and check to see how loadUser is done).

  if it is, then launch the profile.js page. (Just make this.)
  
  3. Set up redux for the login system.  (Refer to Brad Traversy videos)

*/

const store = createStore(authReducer);
function App() {
  return (
    <div className="App">
      <Provider store = {store}>
        <LandingPage />
      </Provider>
    </div>
  );
}

export default App;
