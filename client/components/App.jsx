import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Users from './Users';

import '../styles/main.css';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="container-fluid">
          <Header />
          <Switch>
            <Route exact path="/" component={Users} />
            <Route exact path="/signin" component={Users} />
            <Route exact path="/signup" component={Users} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;