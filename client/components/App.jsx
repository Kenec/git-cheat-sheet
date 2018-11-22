import React, { Component } from 'react';
import Header from './Header';
import Signup from './Users/Signup';

import '../styles/main.css';

class App extends Component {

  render() {
    return (
      <div className="container-fluid">
        <Header />
        <Signup />
      </div>
    );
  }
}

export default App;