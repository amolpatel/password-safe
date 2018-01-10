import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login, getUser } from '../actions/userActions';

import InputField from '../components/inputField';
import LoginForm from '../components/loginForm';
import ErrorAlert from '../components/errorAlert';



class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: ''
    };

    this.submitLogin = this.submitLogin.bind(this);

  }

  componentWillMount() {
    if(this.props.user !== null) {
      this.props.history.push('/');
    }
  }

  submitLogin() {
    this.props.login(this.state.email, this.state.password).catch(err => {
      this.setState({
        error: err
      });
    });
  }

  setEmail(event) {
    this.setState({
      email: event.target.value
    });
  }

  setPassword(event) {
    this.setState({
      password: event.target.value
    });
  }

  render() {
    const errStyle = {
      borderColor: 'red'
    };
    return (
        <div className="container">
          <div className="form-signin">
            <h2 className="form-signin-heading">PasswordSafe</h2>

            <LoginForm email={this.setEmail.bind(this)} password={this.setPassword.bind(this)}/>

            {this.state.error ? <ErrorAlert>Please check the fields above</ErrorAlert>: null}

            <a className="create-account" href="/createAccount">Create Account</a>
            <br/>
            <button
                type="submit"
                className="btn btn-primary login-button"
                onClick={event => {this.submitLogin(event);}}>
              Login
            </button>
          </div>
        </div>
    );
  }
}

function mapStateToProps(state) {
  return { user: state.user};
}

export default connect(mapStateToProps, { login, getUser })(Login);