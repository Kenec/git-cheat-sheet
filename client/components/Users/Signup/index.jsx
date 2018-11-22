import React, { Component } from 'react';
import SignupForm from './SignupForm';

class Signup extends Component {

  render() {
    return (
        <div className="pt-5">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <div className="card  p-5 bg">
                <p className="h3 font-weight-bold"> Register </p>
                <hr className=""/>
                <SignupForm />
                <p className="" >Already have an account? 
                  <a href="/signin"><b> Signin</b></a>
                </p>
              </div>
            </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    );
  }
}

export default Signup;