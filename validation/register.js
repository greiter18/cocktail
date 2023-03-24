import Validator from "validator";
import {validText} from './valid-text.js';

export const validateRegistrerInput = (data) => {
  let errors = {};
  data.email = validText(data.email) ? data.email : '';
  data.password = validText(data.password) ? data.password : '';
  data.password2 = validText(data.password) ? data.password2 : '';
  data.first_name = validText(data.first_name) ? data.first_name : '';
  data.last_name = validText(data.last_name) ? data.last_name : '';

  if( (!Validator.isLength(data.first_name, {min:2, max: 30}))){
    errors.first_name = "First name must be bet between 2 and 30 chracters"
  }

  if(Validator.isEmpty(data.first_name)){
    errors.first_name = "First name cannot be blank"
  }

  if(Validator.isEmpty(data.last_name)){
    errors.last_name = "Last name cannot be blank"
  }

  if(!Validator.isEmail(data.email)){
    errors.email = "Email is invalid"
  }


  if(Validator.isEmpty(data.password)){
    errors.password = "Password mus be entered"
  }

  if(!Validator.isLength(data.password, {min:6, max:15})){
    errors.password = "Password must be between 6 and 15 characters"
  }
  if(!Validator.equals(data.password, data.password2)){
    errors.password = "Password do not match"
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  }

}