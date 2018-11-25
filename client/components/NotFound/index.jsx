import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => (
  <div>
    <div className="row pt-5">
      <div className="col-md-3"></div>
      <div className="col-md-6">
        <div className="card  p-5 bg text-center">
          <h4 className="">The page you are looking for does not exit!</h4>
          <p>
            <NavLink to="/">
             <b>Go Back Home</b>
            </NavLink>
          </p>
        </div>
      </div>
      <div className="col-md-3"></div>
    </div>
  </div>
);

export default NotFound;