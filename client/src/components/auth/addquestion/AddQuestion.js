import React, { useState, useEffect } from 'react';
import axios from 'axios';
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


const AddQuestion = (props) => {
  
  const [modal, setModal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState(null);
  const toggle = ()=>{
    setModal(!modal);
  }
  /*
  useEffect(()=>{
    const {error} = props;
    //check to see if it is register error
    if (error.id === 'LOGIN_FAIL'){
      setMsg(error.msg.msg);
    }else {
      setMsg(null);
    }
    //if user is populated, which means register is sucessful, then close the modal
    if(modal){
      if (props.isAuthenticated){
        toggle();
      }
    }
    
  }, [props.error, props.isAuthenticated]);  //refreshes if user is updated too.
  //Whats the difference between componentDidMount and componentDidUpdate?*/
  
  const onSubmit = e =>{
    e.preventDefault();
    const authUser = {
      email,
      password
    };
    //props.login(authUser);
  }
    return(
      <div>
        <NavLink onClick={toggle} href="#">Add Question</NavLink>
        <Modal isOpen = {modal} toggle = {toggle}>
          <ModalHeader toggle = {toggle}>Add a Quetion</ModalHeader>
            <ModalBody>
              {msg? <Alert color='danger'>{msg}</Alert> : null}
              <Form onSubmit = {onSubmit}>
                <FormGroup>
                  <Label for='email'>Email</Label>
                  <Input type = 'email' name="email" id = "email" placeholder = "Email" className="mb-3" />
                  <Label for='password'>Password</Label>
                  <Input type = 'password' name="password" id = "password" placeholder = "Password" className="mb-3" />
                  <Button color='dark' style={{marginTop: '2rem'}} block> Login</Button>
                </FormGroup>
              </Form>
            </ModalBody>
          
        </Modal>
      </div>
    )
  
}

const mapStateToProps = (state) =>({
  isAuthenticated: state.auth.isAuthenticated,  //if the user is authenticated or not.
  error: state.error
}) 


export default AddQuestion;

