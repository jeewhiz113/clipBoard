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
import { login } from '../../../actions/authActions';
/*
import { clearErrors } from '../../actions/errorActions';*/
//import PropTypes from 'prop-types';

const LoginModal = (props) => {

  const [modal, setModal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState(null);
  const toggle = ()=>{
    setModal(!modal);
  }
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
  //Whats the difference between componentDidMount and componentDidUpdate?
  /*
  componentDidUpdate(preProps){
    const {error, isAuthenticated} = this.props;
    if (error !== preProps.error){
      if (error.id === 'LOGIN_FAIL'){  //set the state of the RegisterModal
        this.setState({msg: error.msg.msg});
      }else {
        this.setState({msg:null})
      }
    }
    if (this.state.modal){ //if open
      if (isAuthenticated){ //if authenticated, close modal
        this.toggle();
      }
    }
  }*/
  const onSubmit = e =>{
    e.preventDefault();
    const authUser = {
      email,
      password
    };
    props.login(authUser);
  }


    //console.log(this.props);  //We see that when we log this here, with the mapDispatchToProps passed in to the connect function, the addItem function is now mapped to the props of this component.
    return(
      <div>
        <NavLink onClick={toggle} href="#">Login</NavLink>
        <Modal isOpen = {modal} toggle = {toggle}>
          <ModalHeader toggle = {toggle}>Login</ModalHeader>
            <ModalBody>
              {msg? <Alert color='danger'>{msg}</Alert> : null}
              <Form onSubmit = {onSubmit}>
                <FormGroup>
                  <Label for='email'>Email</Label>
                  <Input type = 'email' name="email" id = "email" placeholder = "Email" className="mb-3" onChange = {e => setEmail(e.target.value)}/>
                  <Label for='password'>Password</Label>
                  <Input type = 'password' name="password" id = "password" placeholder = "Password" className="mb-3" onChange = {e => setPassword(e.target.value)}/>
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
//Then we need to think about how to lift these up with combineReducer
/* const mapDispatchToProps = (dispatch) =>{
  return {  
    login : (user)=>{dispatch(login(user))},
    //clearErrors: () =>{dispatch(clearErrors())}
  }
  //mapDispatchToProps
} */

export default connect(mapStateToProps, {login})(LoginModal);

