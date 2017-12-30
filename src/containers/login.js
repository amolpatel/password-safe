import React, { Component } from 'react';
import { connect } from 'react-redux';

import InputField from '../components/inputField';


class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: ''
    }
  }

  componentWillMount() {
    if(this.props.user !== null) {
      this.props.history.push('/');
    }
  }

  render() {
    const errStyle = {
      borderColor: 'red'
    };
    return (
        <div className="container form-signin">
          <h2 className="form-signin-heading">PasswordSafe</h2>
          <InputField
              id="email"
              type="email"
              label="Email"
              style={this.state.error ? errStyle : null}
              inputAction={(event) => this.setState({email: event.target.value})}/>

          <InputField
              id="password"
              type="password"
              label="Password"
              style={this.state.error ? errStyle : null}
              inputAction={(event) => this.setState({password: event.target.value})}/>
        </div>
    );
  }
}

function mapStateToProps(state) {
  return { user: state.user};
}

export default connect(mapStateToProps, {})(Login);