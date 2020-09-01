import React, { Component } from 'react';
import LoginModal from './auth/loginmodal/LoginModal';
import RegisterModal from './auth/registermodal/RegisterModal';
import { connect } from 'react-redux';

const LandingPage = (props)=> { 
  console.log(props.isAuthenticated);  //if authenticated, load profile page.
  console.log(props.token);
    return (
      <div>
        <h1>
          <LoginModal />
          <RegisterModal />
        </h1>
        
      </div>
    ); 
}

const mapStateToProps = (state) =>{
  return {
    isAuthenticated : state.auth.isAuthenticated,
    token: state.auth.token,
  }
}

export default connect(mapStateToProps)(LandingPage);
