import * as types from './actionTypes';
// TODO: remove this when you integrate API
import InitalState from '../reducers/initialState';

export const getCheatsSuccess = gitCheats => ({
  type: types.GET_ALL_CHEATS,
  gitCheats
});

export const searchCheatsSuccess = gitCheats => ({
  type: types.SEARCH_CHEATS,
  gitCheats
})

export const getCheats = () => (
  dispatch => {
    // TODO: make an axios call to get all cheats and pass the result to gitCheatSuccess
    dispatch(getCheatsSuccess(''))
  }
);

export const searchCheats = searchWord => (
  dispatch => {
    // TODO: use the searchWord parameter to make an API call.
    const returnedResult = InitalState.gitCheats[0];
    dispatch(searchCheatsSuccess([ returnedResult ]))
  }
);