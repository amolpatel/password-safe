import React, { Component } from 'react';
import { connect } from 'react-redux';


class CreateAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      error:''
    }
  }


  render() {
    return (
      <div>hello</div>
    );
  }
}

export default connect(null, {})(CreateAccount);