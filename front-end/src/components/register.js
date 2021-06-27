import React from 'react';
import { connect } from "react-redux";
import { register } from '../actions';
import { RegisterContainer, InputField, SubmitBtn, H1 } from '../styles/StyledComponents';

class Register extends React.Component {
  state = {
    credentials: {
      username:'',
      password:'',
    }
  }

    handleChange = event => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [event.target.name]: event.target.value
            }
        });
    }
// changed username to user_name in register **************
    register = event => {
      event.preventDefault();
      this.props.register({
          user_name: this.state.credentials.username, 
          password: this.state.credentials.password,
      });

      this.setState({
          credentials: {
              username: '',
              password: '',
          }
      });
      this.props.history.push('/')
  };

  render() {
    return(
      <RegisterContainer>
      <form>
        <h1>Please Register!</h1>
          <InputField
           name = 'username'
           placeholder = 'Username'
           type = 'text'
           value = {this.state.credentials.username}
           onChange = {this.handleChange}
          />
          <InputField
            name = 'password'
            placeholder = 'Password'
            type = 'password'
            value = {this.state.credentials.password}
            onChange = {this.handleChange}
          />
      <SubmitBtn onClick = {this.register}>Register</SubmitBtn>
    </form>
    </RegisterContainer>
    );
} 
}

const mapStateToProps = state => ({
  isRegistered: state.isRegistered,
  error: state.error,
})

export default connect(mapStateToProps, { register })(Register);