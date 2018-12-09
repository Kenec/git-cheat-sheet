import axios from 'axios';
import jwt from 'jsonwebtoken';
import * as types from './actionTypes';
import setAuthorizationToken from '../utils/setAuthorizationToken';

export const setCurrentUser = user => ({
  type: types.SET_CURRENT_USER,
  user
});

export const signup = userData => (
  dispatch => axios.post('/api/v1/users/signup', userData)
    .then(res => {
      const token = res.data.token;
      localStorage.setItem('token', token);
      setAuthorizationToken(token);
      const { id, name, email } = jwt.decode(token);
      dispatch(setCurrentUser({ id, name, email }));
    })
);

export const signin = userDate => (
  dispatch => axios.post('/api/v1/users/signin', userDate)
    .then(res => {
      const token = res.data.token;
      localStorage.setItem('token', token);
      setAuthorizationToken(token);
      const { id, name, email } = jwt.decode(token);
      dispatch(setCurrentUser({ id, name, email }));
    })
);

export const logout = () => (
  dispatch =>  {
    localStorage.removeItem('token');
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
  }
);

