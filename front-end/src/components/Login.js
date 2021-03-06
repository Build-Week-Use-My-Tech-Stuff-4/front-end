import React from "react";
import { connect } from "react-redux";
import { login } from '../actions/index';
import { LoginContainer, InputField, Btn } from '../styles/StyledComponents';
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
      user_name: this.state.credentials.username, 
      password: this.state.credentials.password,
      }).then(() => {
        this.props.history.push('/items');
    })
}

render () {
  return (
    <LoginContainer>
    <h1>Please Login</h1>
    <form onSubmit={this.login}>
      <InputField
        type='text'
        name='username'
        placeholder='Username'
        onChange={(e) => {this.handleSubmit(e)}}
        value={this.state.credentials.username}
      />
      <InputField
        type='password'
        name='password'
        placeholder='Password'
        onChange={this.handleSubmit}
        value={this.state.credentials.password}
      />
     <Btn>{ this.props.loggingIn ? (<Loader type="ThreeDots" color="white" height="12" width="26" />) : ('Login')}</Btn>
  </form>
  </LoginContainer>
  );
}
}

const mapStateToProps = state => ({
  error: state.error,
  loggingIn: state.loggingIn
})

export default connect(mapStateToProps,{ login })(Login);