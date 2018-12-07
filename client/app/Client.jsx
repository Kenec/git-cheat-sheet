import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import jwt from 'jsonwebtoken';
import configureStore from '../store/configureStore';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import { setCurrentUser } from '../actions/usersAction';

import App from '../components/App';

const store = configureStore();

if (localStorage.token) {
  setAuthorizationToken(localStorage.token);
  store.dispatch(setCurrentUser(jwt.decode(localStorage.token)))
}

render (
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);