import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Users from './Users';
import Profile from './Profile'
import ManageCheat from './Profile/ManageCheat';
import NotFound from './NotFound';
import Authenticate from '../utils/authenticate';

import '../styles/main.css';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="container-fluid">
          <Header />
          <Switch>
            <Route exact path="/" component={Users} />
            <Route path="/signin" component={Users} />
            <Route path="/signup" component={Users} />
            <Route exact path="/profile" component={Authenticate(Profile)} />
            <Route path="/profile/manage-cheat" component={Authenticate(ManageCheat)} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;