import React, { Component } from 'react';
import { Route, NavLink, Redirect } from 'react-router-dom';
import Signup from './Signup';
import Signin from './Signin'

class Users extends Component {

  render() {
    return (
        <div className="pt-5">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <div className="card  p-5 bg">
                <p className="h3 font-weight-bold"> 
                  { this.props.location.pathname === '/signup' ? 'Register' : 'Login' }
                </p>
                <hr className=""/>
                <Route exact path="/" render={ () => <Redirect to="/signin" /> } />
                <Route path="/signin" component={Signin} />
                <Route path="/signup" component={Signup} />
                { 
                  this.props.location.pathname === '/signup' ? 
                    <p>Already have an account? <NavLink to="/signin"><b>Signin</b></NavLink></p> : 
                    <p>Don't have an account? <NavLink to="/signup"><b>Signup</b></NavLink></p>
                }
              </div>
            </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    );
  }
}

export default Users;