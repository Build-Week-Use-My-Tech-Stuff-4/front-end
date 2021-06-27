import React from "react";
import { connect } from "react-redux";
import { login } from '../actions/index';
import {Link} from 'react-router-dom';
import { LoginContainer, InputField, Form } from '../styles/StyledComponents';


class Login extends React.Component {
  state = {
    credentials: {
      user_name: "",
      password: ""
    }
  };

  
  handleChange = e => {
    
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    this.props.login(this.state.credentials)
    .then(() => this.props.history.push('/items'))
  };

 

  render() {
    return (
      <LoginContainer>
        <Form onSubmit={this.login}>
            <label>
                Username
            
                <InputField
                    type="text"
                    name="username"
                    value={this.state.credentials.username}
                    onChange={this.handleChange}
                />
            </label>
            <label>
                Password
                <InputField
                    type="password"
                    name="password"
                    value={this.state.credentials.password}
                    onChange={this.handleChange}
                />
            </label>
            <button>{this.props.loggingIn ? "Loading" : "Login"}</button>
            

            <Link to="/register">
                <button>Register</button>
            </Link>
            
        </Form>
      </LoginContainer>
    );
  }
}

const mapStateToProps = ({ error, loggingIn }) => ({
    error,
    loggingIn
  });
  
  export default connect(
    mapStateToProps,
    { login }
  )(Login);