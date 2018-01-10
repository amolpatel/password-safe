import React from 'react';
import { createAccount } from '../actions/userActions';

import InputField from '../components/inputField';

const createAccountForm = props => {

  function setEmail(event) {
    event.preventDefault();
    props.email(event);
  }

  function setPassword(event) {
    event.preventDefault();
    props.password(event);
  }

  function setConfirmPassword(event) {
    event.preventDefault();
    props.confirmPassword(event);
  }

  return (
      <div>
        <InputField
            id="email"
            type="email"
            label="Email"
            inputAction={(event) => setEmail(event)}/>

        <InputField
            id="confirmPassword1"
            type="password"
            label="Password"
            inputAction={(event) => setPassword(event)}/>

        <InputField
            id="confirmPassword2"
            type="password"
            label="Confirm Password"
            inputAction={(event) => setConfirmPassword(event)}/>
      </div>
  )

};

export default createAccountForm;