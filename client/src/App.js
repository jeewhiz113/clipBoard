import React from 'react';
import LandingPage from './components/LandingPage'


//So here is the idea:
/*
  
  Next: set up basic backend, login/register then a loadUser function that always runs in app.js, all of the above steps should be done concurrently with redux.

  Steps to accomplish the above: 
  1.  Make sure the register user and login user buttons are properly hooked to the backend.  Specifically, login should send the token to localStorage.

  2.  If localStorage is not present, then launch the landing page,
  if it is, then launch the profile.js page. (Just make this.)
  
  3. Set up redux for the login system.  (Refer to Brad Traversy videos)

*/
function App() {
  return (
    <div className="App">
      <LandingPage />
    </div>
  );
}

export default App;
