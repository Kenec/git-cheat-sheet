import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function gitCheatsReducer(state = initialState.gitCheats, action) {
  switch(action.type) {
    case types.GET_ALL_CHEATS:
      return action.gitCheats;

    case types.ADD_CHEAT:
      return [...state, Object.assign({}, action.gitCheat)];

    default:
      return state;
  }
}