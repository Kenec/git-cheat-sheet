import React, { Component } from 'react';

class Signin extends Component {

  render() {
    return (
      <form>
        <div className="form-group">
          <input type="text" className="form-control" id="username" aria-describedby="username" placeholder="Enter Username"/>
        </div>
        <div className="form-group">
          <input type="password" className="form-control" id="password" aria-describedby="password" placeholder="Enter Password"/>
        </div>
        <button type="submit" className="btn button-blend">Signin</button>
        <hr className="hr-light"/>
      </form>
    );
  }
}

export default Signin;