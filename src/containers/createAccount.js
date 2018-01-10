import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createAccount } from '../actions/userActions';
import CreateAccountForm from '../components/createAccountForm';
import ErrorAlert from '../components/errorAlert';


class CreateAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      error:''
    };

    this.submitAccount = this.submitAccount.bind(this);
  }

  setEmail(event) {
    event.preventDefault();
    this.setState({
      email: event.target.value
    });
  }

  setPassword(event) {
    event.preventDefault();
    this.setState({
      password: event.target.value
    });
  }

  setConfirmPassword(event) {
    event.preventDefault();
    this.setState({
      confirmPassword: event.target.value
    });
  }

  isPasswordValid() {
    const { email, password, confirmPassword } = this.state;
    if(email === '' || password === '' || confirmPassword === '') {
      this.setState({
        error: 'Please enter in all fields'
      });
      return false;
    }
    if(password !== confirmPassword) {
      this.setState({
        error: 'Please enter matching passwords'
      });
      return false;
    }
    return true;
  }

  submitAccount(event) {
    event.preventDefault();
    if(this.isPasswordValid()) {
      this.props.createAccount(this.state.email, this.state.password)
          .then(() => {
            this.props.history.replace('/')
          })
          .catch(err => {
            this.setState({error: err.message})
          });
    }
  }

  render() {
    return (

        <div className="container">
          <div className="form-signin">
            <h2 className="form-signin-heading">Create Account</h2>

            <CreateAccountForm
                email={this.setEmail.bind(this)}
                password={this.setPassword.bind(this)}
                confirmPassword={this.setConfirmPassword.bind(this)}
                />

            <br/>

            {this.state.error ? <ErrorAlert>{this.state.error}</ErrorAlert>: null}

            <button
                type="submit"
                className="btn btn-primary login-button"
                onClick={event => {this.submitAccount(event);}}>
              Create Account
            </button>
          </div>
        </div>
    );
  }
}



export default connect(null, { createAccount })(CreateAccount);