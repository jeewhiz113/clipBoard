import React, { useState } from 'react';
import Logout from '../auth/logout/logout';
import { connect } from 'react-redux';

//NOw when we display this page, we are assuming the user is already logged out.  This is derived not from the token, but from the redux store (Should be from the user object).  
/*
Step 1: get this page to dispay with a greeting message.

Step 2: Import the logout button here and once logged out, reload the landing page.

Step 3: Add a add a question button on this page, and that should bring up the questions modal to add the question.  It should propmt the user for the type of questions (STEM) and then add any pictures or 30 seconds video of your choice to the database.

*/
const ProfilePage = (props) => {
    console.log(props.user);
    return(
      <div>
        Hello {props.user.name}
        Hello {props.user.name}
        <Logout />
      </div>
    )
  }

const mapStateToProps = (state) =>{
  return {
    user : state.auth.user,
    token: state.auth.token,
  }
}

export default connect(mapStateToProps, null)(ProfilePage);
