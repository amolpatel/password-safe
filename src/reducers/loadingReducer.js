import { ACCOUNT_STATUS } from '../actions/accountActions';
import { USER_STATUS } from '../actions/userActions';


export default function(state = {}, action) {
  switch(action.type) {
    case ACCOUNT_STATUS:
      return {...state, accounts: action.payload};
    case USER_STATUS:
      return {...state, user: action.payload};
    default:
      return state;
  }
}