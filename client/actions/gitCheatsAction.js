import * as types from './actionTypes';

export const getCheatsSuccess = gitCheats => (
  {
    type: types.GET_ALL_CHEATS,
    gitCheats
  }
);

// export const getCheats = () => (
//   dispatch = dispatch(getCheatsSuccess())
// );