import { GET_ACCOUNTS } from '../actions/accountActions';

export default function(state = {}, action) {
  switch(action.type) {
    case GET_ACCOUNTS:
      return action.payload;
    default:
      return state;
  }
}