const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
//const config = require('config');  //need the jwt secret
const jwt = require('jsonwebtoken'); //need jwt
const auth = require('../../middleware/auth');
//bring in item model

const User = require('../../models/User');

//@route Post api/users: 
//@desc Register new user
//@access Public  (note we are using router, so we have router.get and not app.get)
router.post('/register', (req, res)=>{
  const { name, email, password } = req.body;  
  if (!name || !email || !password){
    return res.status(400).json({msg: "Please enter all fields."});  //400 means its a bad request
  }
  User.findOne({email: email})  //find the email that matches
    .then(user =>{
      if (user){  //user is either null or a user exists
        return res.status(400).json({msg: "User already exists."});
      };
      const newUser = new User({
        name: name,
        email: email,
        password: password
      });
      bcrypt.genSalt(10, (err, salt)=>{  
        bcrypt.hash(newUser.password, salt, (err, hash)=>{ 
          if (err) throw err;  
          newUser.password = hash;
          newUser.save()
            .then(user =>{ 
              /* jwt.sign( //we put information in here to code the web token.
                {
                  id: user.id,
                  name:user.name
                },
                "myjwtsecret",
                {expiresIn: 3600}, (err, token)=>{
                  if (err) throw err;
                  res.json({
                    token: token,  //send the token along with the user to the browser. Need to fix here, do not send the token!
                    user:{
                      id: user.id,
                      name: user.name,
                      email: user.email
                    }
                  })
                }
              ) */
              res.json({user: {
                  id: user.id,
                  name: user.name,
                  email: user.email
                }
              });  //send the user back to front end once it has been saved.
            });
        })
      })
    })
})  //Note the end point is api/item here because of how we defined it.


router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Simple validation
  if (!email || !password) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({msg: "User not found."});

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({msg: "Invalid credentials."});

    const token = jwt.sign({ id: user._id }, "myjwtsecret", { expiresIn: 3600 });
    if (!token) return res.status(400).json({msg: "Could not generate token"});
    //sign the token right here.
    res.status(200).json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

//This route gets the user data by using the token.  This is the way for us to constantly validate the user that is logged in on our front end.  This is different than the middleware for which we check to see if a token is valid to protect routes!

//Get api/auth/user
//Getting the current user
//Access is private, auth makes it so that if there is no token or token is not valid, we do not get the user back.
router.get('/user', auth, (req, res) =>{
  User.findById(req.user.id) //req.user.id is from the auth middleware.
    .select('-password')  //gets us the promise with the user.
    .then(user =>{
      res.json(user)
    });
})

module.exports = router;