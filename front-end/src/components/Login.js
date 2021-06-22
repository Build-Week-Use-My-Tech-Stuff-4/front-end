import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from '../actions/index';
import Loader from 'react-loader-spinner';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      credentials: {
        username: '',
        password: '',
      }
    }
  }

  handleSubmit = event => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [event.target.name]: event.target.value
      }
    })
  };

  login = event => {
    event.preventDefault();
    this.props.login({
      username: this.state.credentials.username, 
      password: this.state.credentials.password,
      email: this.state.credentials.email}).then(() => {
        this.props.history.push('/');
    })
}

render () {
  return (
    <form
    onSubmit={this.login}>
      <div
        className="inputs">
        <input
          name="username"
          onChange={this.handleSubmit}
          value={this.state.username}
          placeholder="Username"
          type="text"
        />
        <input
          name="password"
          type="password"
          onChange={this.handleSubmit}
          value={this.state.password}
          placeholder="Password"
        />
      </div>
    <button
      type="submit">
    </button>
  </form>
  );
}
}

const mapStateToProps = state => ({
  error: state.error,
  loggingIn: state.loggingIn
})

export default connect(mapStateToProps,{ login })(Login);