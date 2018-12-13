import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import * as logoutAction from '../../actions/usersAction';

export class Header extends Component {

  handleLogout = event => {
    event.preventDefault();
    this.props.logoutAction.logout();
  };

  render() {
    const { isAuthenticated, user } = this.props.user;
    return (
      <nav className="navbar navbar-expand-lg navbar-dark header-bg-color">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <a className="navbar-brand bold" href="#">Git Cheat Sheet</a>
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        </ul>
        {
          isAuthenticated &&
          <div className="row mr-1 display-auth">
            <NavLink className="mr-4 links bold" to="/profile">Home</NavLink>
            <NavLink className="mr-5 links bold" to="/profile/manage-cheat">Add Cheat</NavLink>
            <div className="white mr-2 name-display">Welcome { user.name }!</div>
            <div>
              <button onClick={this.handleLogout} className="btn btn-outline-warning">Logout</button>
            </div>
          </div>
        }
      </div>
    </nav>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  logoutAction: bindActionCreators(logoutAction, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);