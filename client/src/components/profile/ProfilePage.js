const ProfilePage = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const toggle = ()=>{
    setModal(!modal);
  }
  const onSubmit = e =>{
    e.preventDefault();
    console.log(email, password);
    
    const authUser = {
      email,
      password
    };
    /* axios.post('./api/auth/login', authUser)
      .then(res =>{
        //Ok so when this comes back to the front end, let's set the token to localStorage.
        console.log(res);
        localStorage.setItem('token', res.data.token);
        //next step is to set up the redux.  Look into the brad traversy videos.
      }) */
    console.log('initial token', localStorage.getItem('token'));
    props.login(authUser);
    console.log('logged in token', localStorage.getItem('token'));  //This should work after, but login is async
  }
    return(
      <div>
        <NavLink onClick={toggle} href="#">Login</NavLink>
        <Modal isOpen = {modal} toggle = {toggle}>
          <ModalHeader toggle = {toggle}>Login</ModalHeader>
            <ModalBody>
              
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
//Now lift the action up to the state.
/*
const mapStateToProps = (state) =>({
  isAuthenticated: state.auth.isAuthenticated,  //if the user is authenticated or not.
  error: state.error
}) */
//Then we need to think about how to lift these up with combineReducer
const mapDispatchToProps = (dispatch) =>{
  return {  
    login : (user)=>{dispatch(login(user))},
  }
}

export default connect(null, mapDispatchToProps)(LoginModal);

/*
What needs to happen here:  If a token exists, check to see if it's valid, if not, send the invalid response and dispatch the appropriate error to the redux store.  Otherwise, we 'loaduser' which means populating the state in redux store (Such as name of the user, the videos that the user has posted and etc).  

*/