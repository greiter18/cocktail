import React, { useState } from "react";
import {withRouter} from 'react-router-dom';

const LoginForm = ({login, errors}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    let user = {
      email,
      password
    }
    login(user);
  }

  // const renderErrors = () => {
  //   return (
  //     <ul>
  //       {Object.keys(errors)?.map((error, i) => (
  //         <li key={`error-${i}`}>
  //           {errors[error]}
  //         </li>
  //       ))}
  //     </ul>
  //   )
  // }

  return (
    <div>
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" value={email} onChange={event => setEmail(event.target.value)} placeholder='Email'/>
          <br />
          <input type="text" value={password} placeholder="'Password" onChange={e => setPassword(e.target.value)} />
          <br />
          <input type="submit"  value="Log In"/>
          {/* {renderErrors()} */}
        </div>
      </form>
    </div>
  )
}

export default withRouter(LoginForm)
