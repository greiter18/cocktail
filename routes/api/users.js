import express from "express";
const router = express.Router(); // router object
import {User} from '../../models/User.js';
import bcrypt from 'bcryptjs';

router.get("/test", (req, res) => {
  res.json({msg: "This is test route"});
});

router.post('/register', (req, res) => {
  User.findOne( {email: req.body.email})
  .then(user => { 
    if(user){
      return res.status(400).json({email: 'A user is already registered with that email'})
    } else {
      const newUser = new User({
        email: req.body.email,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        password: req.body.password
      })
      bcrypt.genSalt(10, (err, salt) => { // number of round to generate salt 
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log('!!!ERRORR!!!',err));
        })
      })
    }
  })
})

export const users = router;