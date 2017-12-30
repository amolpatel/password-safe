import { database } from '../firebase';
export const GET_ACCOUNTS = 'get_accounts';
export const ACCOUNT_STATUS = 'account_status';

export function getAccounts(){
  return dispatch => {
    dispatch({
      type: ACCOUNT_STATUS,
      payload: true
    });
    database.on('value', data => {
      dispatch({
        type: GET_ACCOUNTS,
        payload: data.val()
      });
      dispatch({
        type: ACCOUNT_STATUS,
        payload: false
      });
    }, () => {
      dispatch({
        type: ACCOUNT_STATUS,
        payload: -1
      })
    });
  };
}

// firebase handles adding this to store with "database.on"
export function addAccount(values) {
  return dispatch => database.push(values);
}

export function deleteAccount(key) {
  return dispatch => database.child(key).remove();
}
