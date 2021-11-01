import {combineReducers} from 'redux';

import auth from './auth';
import error from './error';
import properties from './properties';

export default combineReducers({
  auth,
  error,
  properties,
});
