import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function gitCheatsReducer(state = initialState.gitCheats, action) {
  switch(action.type) {
    case types.GET_ALL_CHEATS:
      return action.gitCheats;

    default:
      return state;
  }
}