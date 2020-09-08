const express = require('express');
const router = express.Router();
//bring in item model

const User = require('../../models/User');


router.post('/upload', (req, res)=>{
  //Need Fixing here!
  //console.log(req.body.file)
  console.log(req.files)
  if (req.files === null){
    return res.status(400).json({msg: 'no file was uploaded'});
  }
  const file = req.files.image;
  file.forEach(image =>{
    image.mv(`${__dirname}/${image.name}`, err =>{
      if (err){
        console.error(err);
        return res.status(500).send(err);
      }
    })
  })
 /*  file.mv(`${__dirname}/client/public/uploads/${file.name}`, err =>{
    if (err){
      console.error(err);
      return res.status(500).send(err);
    }

    res.json({msg: 'Images are in the uploads folder'})
  }); */



})

module.exports = router;