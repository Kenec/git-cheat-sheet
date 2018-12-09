import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as signinAction from '../../../actions/usersAction';


export class Signin extends Component {
  state = {
    email: '',
    password: '',
    errors: {},
    isLoading: false
  };

  componentDidMount() {
    const { isAuthenticated } = this.props.user;
    if (isAuthenticated) this.props.history.push('/profile');
  }

  handleOnChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleLogin = event => {
    event.preventDefault();
    this.setState({ errors: {}, isLoading: true });
    this.props.signinAction.signin(this.state)
      .then(
        () => this.props.history.push('/profile'),
        ({ response }) => this.setState({ errors: response.data, isLoading: false })
      );
  };

  render() {
    return (
      <form onSubmit={this.handleLogin}>
        <span className="text-danger">{this.state.errors && this.state.errors.error}</span>
        <div className="form-group">
          <input value={this.state.email} onChange={this.handleOnChange} name="email" type="email" className="form-control" id="email" aria-describedby="email" placeholder="Enter Email"/>
        </div>
        <div className="form-group">
          <input value={this.state.password} onChange={this.handleOnChange} name="password" type="password" className="form-control" id="password" aria-describedby="password" placeholder="Enter Password"/>
        </div>
        <button type="submit" disabled={this.state.isLoading} className="btn button-blend">Signin</button>
        <hr className="hr-light"/>
      </form>
    );
  }
}

Signin.propTypes = {

};

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  signinAction: bindActionCreators(signinAction, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Signin);