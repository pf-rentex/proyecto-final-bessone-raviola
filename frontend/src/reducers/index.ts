import {combineReducers} from 'redux';

import auth from './auth';
import error from './auth/error';

export default combineReducers({
  auth,
  error,
});
