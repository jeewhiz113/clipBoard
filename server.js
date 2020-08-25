const express = require('express');
const mongoose = require('mongoose');
//const userRegister = require('./routes/register/registerUser');
//const userLogin = require('./routes/login/loginUser');


const db = "mongodb+srv://jee:1Y4KlDB1aWteEyZl@cluster0.rw6lk.mongodb.net/mernpractice?retryWrites=true&w=majority";

const jwtsecret = "myjwtsecret";


mongoose
  .connect(db, {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true})
  .then(()=>{
    console.log('Connected to Mongo Atlas');
  })
  .catch(err=>{
    console.log(err);
  });

const app = express();
app.use(express.json());
//app.use('/auth', userRegister);
//app.use('/auth', userLogin);

app.listen(5000, ()=>{
  console.log("app listening for requests on port 5000");
})