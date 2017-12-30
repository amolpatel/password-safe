import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getUser } from '../actions/userActions';
import { getAccounts } from '../actions/accountActions';

class LoadingComponent extends Component {
  componentWillMount() {
    const { userLoading, accountsLoading } = this.props;
    if(userLoading === undefined ) {
      this.props.getUser();
    }
    if(accountsLoading === undefined ) {
      this.props.getAccounts();
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.accountsLoading === -1 && nextProps.user !== null) {
      this.props.getAccounts();
    }
  }

  render() {
    const { userLoading, accountsLoading } = this.props;
    if((!userLoading && !accountsLoading) || (this.props.user === null)) {
      return (
          <div>
            {this.props.children}
          </div>
      )
    }
    else {
      return (
          <div>Loading...</div>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    userLoading: state.loading.user,
    accountsLoading: state.loading.accounts,
    user: state.user
  };
}

export default withRouter(connect(mapStateToProps, { getUser, getAccounts })(LoadingComponent));