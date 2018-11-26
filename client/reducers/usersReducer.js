import isEmpty from 'lodash/isEmpty';
import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function userReducer(state = initialState.users, action) {
  switch(action.type) {
    case types.SET_CURRENT_USER:
      return {
        isAuthenticated: !isEmpty(action.user),
        user: action.user
      };
    
    default:
      return state;
  }
}