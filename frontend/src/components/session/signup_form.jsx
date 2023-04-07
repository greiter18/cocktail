import React, { useState } from 'react';
import {withRouter}  from 'react-router-dom';

const SignupForm = ({signup, errors}) => {
  const [email, setEmail] = useState('');
  const [first_name, setFirst_name] = useState('');
  const [last_name, setLast_name] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const handeleSubmit = (e) => {
    e.preventDefault();
    let user = {
      email,
      password,
      first_name,
      last_name,
      password2
    }
    signup(user);
  }

  // const renderErrors = () => {
  //   <ul>
  //     {Object.keys(errors)?.map((error,i) => {
  //       <li keys={`error-${i}`}>
  //         {errors[error]}
  //       </li>
  //     })}
  //   </ul>
  // }

  return (
    <div className='signup-form-container'>
      <h1>Sign Up</h1>
      <form onSubmit={handeleSubmit}>
        <div className='signup-form'>
          <br />
          <input type="text" value={email} placeholder='Email' onChange={e => setEmail(e.target.value)}/>
          <br />
          <input type="text" value={first_name} placeholder='First Name' onChange={e => setFirst_name(e.target.value)} />
          <br />
          <input type="text" value={last_name} placeholder='Last Name' onChange={e => setLast_name(e.target.value)} />
          <br />
          <input type="password" placeholder='Password' onChange={e => setPassword(e.target.value)} />
          <br />
          <input type="password" placeholder='Confirm Password' onChange={e => setPassword2(e.target.value)} />
          <br />
          <input type="submit" value="Sign UP"/>
          {/* {renderErrors()} */}
        </div>
      </form>
    </div>
  )
}


export default withRouter(SignupForm);