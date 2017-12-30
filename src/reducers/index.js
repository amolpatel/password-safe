import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import loadingReducer from './loadingReducer';
import accountReducer from './accountReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  form: formReducer,
  loading: loadingReducer,
  user: userReducer,
  accounts: accountReducer
});

export default rootReducer;