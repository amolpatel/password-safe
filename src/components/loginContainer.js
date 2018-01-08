import React from 'react';
import InputField from '../components/inputField';


const LoginContainer = props => {

  function setEmail(event) {
    event.preventDefault();
    props.email(event);
  }

  function setPassword(event) {
    event.preventDefault();
    props.password(event);
  }

  return (
      <div>
        <InputField
            id="email"
            type="email"
            label="Email"
            inputAction={(event) => setEmail(event)}/>

        <InputField
            id="password"
            type="password"
            label="Password"
            inputAction={(event) => setPassword(event)}/>
      </div>
  )
};

export default LoginContainer;