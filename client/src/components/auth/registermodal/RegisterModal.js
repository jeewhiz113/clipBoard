import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import {v4 as uuid} from 'uuid';
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
import { connect } from 'react-redux';

import { register } from '../../../actions/authActions';

import { clearErrors } from '../../../actions/errorActions'; 
//import PropTypes from 'prop-types';

const RegisterModal = (props)=> {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState(null);
  const toggle = ()=>{
    //clearErrors:
    props.clearErrors();
    setModal(!modal);
  }
  const onSubmit = e =>{
    e.preventDefault();
    console.log(name, email, password);
    
    const newUser = {
      name,
      email,
      password
    };
    props.register(newUser);
  }
  useEffect(()=>{
    const {error} = props;
    //check to see if it is register error
    if (error.id === 'REGISTER_FAIL'){
      setMsg(error.msg.msg);
    }else {
      setMsg(null);
    }
    //if user is populated, which means register is sucessful, then close the modal
    if(modal){
      if (props.user){
        toggle();
      }
    }
    
  }, [props.error, props.user]);  //refreshes if user is updated too.

    return(
      <div>
        <NavLink onClick={toggle} href="#">Register</NavLink>
<Modal isOpen = {modal} toggle = {toggle}>
  <ModalHeader toggle = {toggle}>Register</ModalHeader>
    <ModalBody>
      {msg? <Alert color='danger'>{msg}</Alert> : null}
      <Form onSubmit = {onSubmit}>
        <FormGroup>
          <Label for='name'>Name</Label>
          <Input type = 'text' name="name" id = "name" placeholder = "Name" className="mb-3" onChange = {e => setName(e.target.value)}/>
          <Label for='email'>Email</Label>
          <Input type = 'email' name="email" id = "email" placeholder = "Email" className="mb-3" onChange = {e => setEmail(e.target.value)}/>
          <Label for='password'>Password</Label>
          <Input type = 'password' name="password" id = "password" placeholder = "Password" className="mb-3" onChange = {e => setPassword(e.target.value)}/>
          <Button color='dark' style={{marginTop: '2rem'}} block> Register</Button>
        </FormGroup>
      </Form>
    </ModalBody>
  
</Modal>
      </div>
    )
  
}
const mapStateToProps = (state) =>({
  isAuthenticated: state.auth.isAuthenticated,  //if the user is authenticated or not.
  error: state.error,
  user: state.auth.user
}) 
/*
//Then we need to think about how to lift these up with combineReducer
const mapDispatchToProps = (dispatch) =>{
  return {  
    register : (newUser)=>{dispatch(register(newUser))},
    clearErrors: () =>{dispatch(clearErrors())}
  }
  //mapDispatchToProps
} */

{/* <NavLink onClick={this.toggle} href="#">Register</NavLink>
<Modal isOpen = {this.state.modal} toggle = {this.toggle}>
  <ModalHeader toggle = {this.toggle}>Register</ModalHeader>
    <ModalBody>
      {this.state.msg ? <Alert color='danger'>{this.state.msg}</Alert> : null}
      <Form onSubmit = {this.onSubmit}>
        <FormGroup>
          <Label for='name'>Name</Label>
          <Input type = 'text' name="name" id = "name" placeholder = "Name" className="mb-3" onChange = {this.onChange}/>
          <Label for='email'>Email</Label>
          <Input type = 'email' name="email" id = "email" placeholder = "Email" className="mb-3" onChange = {this.onChange}/>
          <Label for='password'>Password</Label>
          <Input type = 'password' name="password" id = "password" placeholder = "Password" className="mb-3" onChange = {this.onChange}/>
          <Button color='dark' style={{marginTop: '2rem'}} block> Register</Button>
        </FormGroup>
      </Form>
    </ModalBody>
  
</Modal> */}

export default connect(mapStateToProps, { register, clearErrors })(RegisterModal);