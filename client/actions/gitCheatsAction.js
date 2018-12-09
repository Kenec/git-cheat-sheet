import axios from 'axios';
import toastr from 'toastr';
import * as types from './actionTypes';
// TODO: remove this when you integrate API
import InitalState from '../reducers/initialState';

export const cheatError = error => ({
  type: types.CHEAT_ERROR,
  error
});

export const getCheatsSuccess = gitCheats => ({
  type: types.GET_ALL_CHEATS,
  gitCheats
});

export const searchCheatsSuccess = gitCheats => ({
  type: types.SEARCH_CHEATS,
  gitCheats
});

export const addCheatSuccess = gitCheat => ({
  type: types.ADD_CHEAT,
  gitCheat
});

export const addCheats = gitCheat => (
  dispatch => axios.post('/api/v1/gitcheats', gitCheat)
    .then (res => {
        dispatch(addCheatSuccess(res.data));
        toastr.success('Cheat Added!')
    })
);

export const getCheats = () => (
  dispatch => axios.get('/api/v1/gitcheats')
    .then(res => {
      dispatch(getCheatsSuccess(res.data.cheats))
    }).catch(error => {
      dispatch(cheatError(error));
    })
);

export const searchCheats = searchWord => (
  dispatch => {
    // TODO: use the searchWord parameter to make an API call.
    const returnedResult = InitalState.gitCheats[0];
    dispatch(searchCheatsSuccess([ returnedResult ]))
  }
);