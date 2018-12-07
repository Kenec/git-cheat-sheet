import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes, { any } from 'prop-types';
import jwt from 'jsonwebtoken';
import { setCurrentUser } from '../actions/usersAction';

export default function (ComposedComponent) {

  class Authenticate extends Component {
    state = {
      expiredToken: null
    }
 
    componentDidMount() {
      const token = localStorage.getItem('token');
      if (!this.props.isAuthenticated) {
        this.props.history.push('/signin');
      }
      if (token) {
        if (this.isTokenExpired() === true) {
          this.setState({ expiredToken: true });
          localStorage.removeItem('token');
          this.props.history.push('/signin');
        }
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.isAuthenticated) {
        this.props.history.push('/signin');
      }
    }

    isTokenExpired() {
      const token = jwt.decode(localStorage.getItem('token'));
      const date = token.exp;
      this.setState({
        expiredToken: date < Date.now() / 1000,
      });
      return date < Date.now() / 1000;
    }

    render() {
      if (!this.props.isAuthenticated || this.state.expiredToken === true) {
        return null;
      }
      return (
        <ComposedComponent {...this.props} />
      );
    }
  }

  Authenticate.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired
  };

  const mapStateToProps = state => ({
      isAuthenticated: state.user.isAuthenticated,
  });

  const mapDispatchToProps = {
    setCurrentUser
  }

  return connect(mapStateToProps, mapDispatchToProps)(Authenticate);
}
