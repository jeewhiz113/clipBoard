import React from 'react';
import LandingPage from './components/LandingPage'


//So here is the idea:
/*
  This page here loads:

  The landing page which contains a register and a login button if not logged in

  Or

  The profile page of the user if logged in.  
  
  To set up whether a user is logged in or not requires redux.

  Also, in the backend, one needs to protect all the private routes such as posting a question and so on.

  Near Future Roadmap:
  Work on the backend, at least finish the auth middleware and use it to protect routes.

*/
function App() {
  return (
    <div className="App">
      <LandingPage />
    </div>
  );
}

export default App;
