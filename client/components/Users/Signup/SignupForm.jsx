import React from 'react';

const SignupForm = () => {
    return (
      <form>
        <div className="form-group">
          <input type="text" className="form-control" id="username" aria-describedby="username" placeholder="Enter Username"/>
        </div>
        <div className="form-group">
          <input type="email" className="form-control" id="email" aria-describedby="email" placeholder="Enter Email"/>
        </div>
        <div className="form-group">
          <input type="password" className="form-control" id="password" aria-describedby="password" placeholder="Enter Password"/>
        </div>
        <div className="form-group">
          <input type="password" className="form-control" id="confirmpassword" aria-describedby="confirmpassword" placeholder="Confirm Password"/>
        </div>
        <button type="submit" className="btn button-blend">Submit</button>
        <hr className="hr-light"/>
    </form>
  );
}

export default SignupForm;