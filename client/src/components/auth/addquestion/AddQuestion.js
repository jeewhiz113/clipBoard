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
<<<<<<< HEAD
  const [rawFile, setRawfile]=useState([]); //this is what we wish to send to the server
  const [modal, setModal] = useState(false);
  const [Files, setFiles] = useState([]);
  const toggle = ()=>{
    setModal(!modal);
  }
  const fileSelectedHandler = e =>{
    const files = Array.from(e.target.files);
    setRawfile(files);
    Promise.all(files.map(file=>{
      return (new Promise((resolve, reject)=>{
        const reader = new FileReader();
        reader.addEventListener('load', (ev)=>{
          resolve(ev.target.result)
        });
        reader.addEventListener('error', reject);
        reader.readAsDataURL(file);
      }));
    }))
    .then(images =>{
      let newArray = [...images];
      //console.log(newArray)
      //I am at a freaking lost here.
      setFiles(newArray);
      //setimgFiles([...images]);
      //console.log(Files);
    }, err=>{
      console.error(err);
    })
  } 
  //Ok, so if Files has been changed, log it!
=======
  const {register, handleSubmit} = useForm();
  const [modal, setModal] = useState(false);
  const [files, setFile] = useState([]);
  //const [password, setPassword] = useState('');
  //const [msg, setMsg] = useState(null);
  const toggle = ()=>{
    setModal(!modal);
  }
  
  /*
>>>>>>> c4422117ddfe13177e7da7289ccacfa9f774dd84
  useEffect(()=>{
    console.log(Files);
    console.log(rawFile);
  }, [Files])
  const buildImgTag = () => {
    return (
      <div className = 'photo-container'>
        {
          Files.map(img =>  //think about how to dynamically allocate spaces to these uploaded images.
            (<img className="photo-uploaded" src={img} width="100" height="100" alt="Photo uploaded"/>)
          )
        }
      </div>
    )
  }
  const onSubmit = async e =>{
    e.preventDefault();
    //send it over to the backend...
    console.log('clicked onsubmit')
    const formData = new FormData();
    rawFile.forEach(file =>{
      formData.append('image', file);
    })
    /* formData.append('file', rawFile);
    console.log(formData); */
    try {
      const res = await axios.post('/upload/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      //Could do something with the res.data?
    }catch (err){
      if (err.response.status === 500){
        console.log('An error with the server');
      }else {
        console.log(err.response.data);
      }
    }
<<<<<<< HEAD
=======
    
  }, [props.error, props.isAuthenticated]);  //refreshes if user is updated too.
  //Whats the difference between componentDidMount and componentDidUpdate?*/
  
  const onSubmit = e =>{
    e.preventDefault();
    /* const authUser = {
      email,
      password
    }; */
    //props.login(authUser);
>>>>>>> c4422117ddfe13177e7da7289ccacfa9f774dd84
  }
    return(
      <div>
        <NavLink onClick={toggle} href="#">Add Question</NavLink>
        <Modal isOpen = {modal} toggle = {toggle}>
<<<<<<< HEAD
            <form onSubmit = {onSubmit}>
              <div><h2>Upload images</h2></div>
              <h3>Images</h3>
              <input type="file" multiple onChange={fileSelectedHandler} />
              <div>
              {
                (Files ? buildImgTag() : null)
              }
             </div>
             <input type='submit' value ='Upload' className='btn btn-primary btn-block mt-4'/>
            </form>
            
=======
        < form >
        <div>
          <h2>Upload images</h2>
        </div>
        <h3>Images</h3>
        <input type="file" multiple  />
      </form>
          
>>>>>>> c4422117ddfe13177e7da7289ccacfa9f774dd84
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

