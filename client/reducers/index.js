import { combineReducers } from 'redux';
import user from './usersReducer';
import gitCheats from './gitCheatsReducer';
import error from './errorReducer';

const rootReducer = combineReducers({
  user,
  error,
  gitCheats
});

export default rootReducer;
