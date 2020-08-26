import React, { Component } from 'react';
import LoginModal from './loginmodal/LoginModal'
import RegisterModal from './registermodal/RegisterModal'
const LandingPage = ()=> { 
    return (
      <div>
        <h1>
          <LoginModal />
          <RegisterModal />
        </h1>
        
      </div>
    ); 
}


export default LandingPage;
