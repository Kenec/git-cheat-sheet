import { combineReducers } from 'redux';
import user from './usersReducer';
import gitCheats from './gitCheatsReducer';

const rootReducer = combineReducers({
  user,
  gitCheats
});

export default rootReducer;
