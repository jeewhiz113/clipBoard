import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../../actions/authActions';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  NavLink,
  Alert
} from 'reactstrap';

const Logout = (props)=>{
  return(
    <NavLink onClick={props.logout} href="#">Logout</NavLink>
  );
}

export default connect(null, {logout})(Logout);