import { combineReducers } from 'redux';

import auth from './auth';
import error from './error';
import properties from './properties';
import rent from './rent';
import claims from './claims';
import toast from './toast';

export default combineReducers({
    auth,
    error,
    properties,
    rent,
    claims,
    toast,
});
