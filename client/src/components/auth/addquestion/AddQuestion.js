import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
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

/* import { connect } from 'react-redux'; */


const AddQuestion = (props) => {
  const {register, handleSubmit} = useForm();
  const [modal, setModal] = useState(false);
  const [files, setFile] = useState([]);
  //const [password, setPassword] = useState('');
  //const [msg, setMsg] = useState(null);
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
    /* const authUser = {
      email,
      password
    }; */
    //props.login(authUser);
  }
    return(
      <div>
        <NavLink onClick={toggle} href="#">Add Question</NavLink>
        <Modal isOpen = {modal} toggle = {toggle}>
        < form >
        <div>
          <h2>Upload images</h2>
        </div>
        <h3>Images</h3>
        <input type="file" multiple  />
      </form>
          
        </Modal>
      </div>
    )
  
}

const mapStateToProps = (state) =>({
  isAuthenticated: state.auth.isAuthenticated,  //if the user is authenticated or not.
  error: state.error
}) 

/*
onChange={this.fileSelectedHandler}
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
*/
export default AddQuestion;

