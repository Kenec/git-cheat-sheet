import { combineReducers } from 'redux';
import users from './usersReducer';
import gitCheats from './gitCheatsReducer';

const rootReducer = combineReducers({
  users,
  gitCheats
});

export default rootReducer;
