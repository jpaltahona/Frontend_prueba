import { combineReducers } from 'redux';
import AuthReducers from './authReducers';
import profileDatesReducers from './profileDatesReducers'
export default combineReducers({
    AuthReducers,
    profileDatesReducers
});