import React, { Component } from 'react';
import LoginModal from './auth/loginmodal/LoginModal';
import RegisterModal from './auth/registermodal/RegisterModal';
import { connect } from 'react-redux';
import ProfilePage from './profile/ProfilePage';


//Ok so here is an interesting idea here, token is there, and everytime we hit this landing page, we should check if isAuthenticated is true or not.  So in this check, not only do you check to see if token is there, you also check for the validity of the token?  Refer to loadUser from Brad Traversy.
const LandingPage = (props)=> { 
  console.log(props.isAuthenticated);
  console.log(props.token);
    return (
      <div>
        <h1>
          {props.token ? <ProfilePage/> : <><LoginModal />
          <RegisterModal /></>}
        </h1>
        
      </div>
    ); 
}

const mapStateToProps = (state) =>{
  return {
    isAuthenticated : state.auth.isAuthenticated,
    token: state.auth.token,
    //msg: state.error.msg
  }
}

export default connect(mapStateToProps)(LandingPage);
