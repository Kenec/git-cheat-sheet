import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { signup }from '../../../actions/usersAction';

export class Signup extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    repassword: '',
    errors: {},
    isLoading: false
  }

  handleOnChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ errors: {}, isLoading: true });
    this.props.signup(this.state)
      .then(
        () => this.props.history.push('/profile'),
        ({ response }) => this.setState({ errors: response.data, isLoading: false }) 
      );
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <span className="text-danger">{this.state.errors && this.state.errors.error}</span>
        <div className="form-group">
          <input type="text" name="username" onChange={this.handleOnChange} value={this.state.username} className="form-control" id="username" aria-describedby="username" placeholder="Enter Username"/>
        </div>
        <div className="form-group">
          <input type="email" name="email" onChange={this.handleOnChange} value={this.state.email} className="form-control" id="email" aria-describedby="email" placeholder="Enter Email"/>
        </div>
        <div className="form-group">
          <input type="password" name="password" onChange={this.handleOnChange} value={this.state.password} className="form-control" id="password" aria-describedby="password" placeholder="Enter Password"/>
        </div>
        <div className="form-group">
          <input type="password" name="repassword" onChange={this.handleOnChange} value={this.state.repassword} className="form-control" id="confirmpassword" aria-describedby="confirmpassword" placeholder="Confirm Password"/>
        </div>
        <button disabled={this.state.isLoading} type="submit" className="btn button-blend">Submit</button>
        <hr className="hr-light"/>
      </form>
    );
  }
}

const mapDispatchToProps = {
  signup
};

export default connect(null, mapDispatchToProps)(Signup);