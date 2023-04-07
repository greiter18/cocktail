import express from "express";
const router = express.Router(); // router object
import {User} from '../../models/User.js';
import bcrypt from 'bcryptjs';
import {MONGO_URI} from '../../config/keys.js';
import jwt from "jsonwebtoken";
import {validateRegistrerInput} from "../../validation/register.js";
import {validateLoginInput} from "../../validation/login.js";

router.get("/test", (req, res) => {
  res.json({msg: "This is test route"});
});

router.post('/register', (req, res) => {
  debugger
  const { errors, isValid} = validateRegistrerInput(req.body);
  if(!isValid){
    return res.status(400).json(errors)
  }
  debugger

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
            .then(user => {
              const payload = {id: user.id, email: user.email};

              jwt.sign(payload, MONGO_URI.secretOrKey, {expiresIn: 3600},(err, token) => {
                res.json({
                  success: true,
                  token: "Bearer " + token
                })
              })
            })
            .catch(err => console.log('!!!ERRORR!!!',err));
        })
      })
    }
  })
})

router.post('/login', (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);
  if(!isValid){
    return res.status(400).json(errors)
  }

  const email = req.body.email;
  const password = req.body.password;

  User.findOne({email})
    .then(user => {
      if(!user){
        return res.status(404).json({email: "This User does not exist"});
      }
      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if(isMatch){
            const payload = {
              id: user.id,
              email: user.email,
            }
            jwt.sign(
              payload,
              MONGO_URI.secretOrKey, 
              {expiresIn: 3600},
              (err, token) =>{ 
                res.json({success: true, token: "Bearer " + token})})
          } else {
            return res.status(400).json({password: "Password is incorrect"});
          }
        })
    })
})

export const users = router;