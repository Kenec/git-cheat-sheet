import * as types from './actionTypes';

export const setCurrentUser = user => (
  {
    type: types.SET_CURRENT_USER,
    user
  }
);