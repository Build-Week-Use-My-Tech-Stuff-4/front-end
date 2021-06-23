import React from 'react';
import { connect } from "react-redux";
import { register } from '../actions';
import { RegisterContainer, InputField, SubmitBtn } from '../styles/StyledComponents';

class Register extends React.Component {
  state = {
    credentials: {
      user_name: '',
      email:'',
      password:'',
      city:'',
      state:'',
      zip:'',  
    }
  }
      // user_name: '',
      // lname:'',
      // email:'',
      // password:'',
      // terms:'',
      // city:'',
      // state:'',
      // zip:'',

    handleChange = event => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [event.target.name]: event.target.value
            }
        });
    }

    register = event => {
      event.preventDefault();
      this.props.register({
          username: this.state.credentials.user_name, 
          password: this.state.credentials.password,
          email: this.state.credentials.email, 
          city: this.state.credentials.city,
          state: this.state.credentials.state, 
          zip: this.state.credentials.zip,
      });

      this.setState({
          credentials: {
              username: '',
              password: '',
              email: '',
              city: '',
              state: '',
              zip: '',
          }
      });
      this.props.history.push('/')
  };

  render() {
    return(
      <RegisterContainer>
      <form>
        <hi>Please Register!</hi>
          <InputField
           name = 'username'
           placeholder = 'Username'
           type = 'text'
           value = {this.state.credentials.user_name}
           onChange = {this.handleChange}
          />
          <InputField
            name = 'password'
            placeholder = 'Password'
            type = 'password'
            value = {this.state.credentials.password}
            onChange = {this.handleChange}
          />
          <InputField
              name = 'email'
              placeholder = 'Email Address'
              type = 'text'
              value = {this.state.credentials.email}
              onChange = {this.handleChange}
          />
          <InputField
              name = 'city'
              placeholder = 'city'
              type = 'text'
              value = {this.state.credentials.city}
              onChange = {this.handleChange}
          />
          <InputField
              name = 'state'
              placeholder = 'state'
              type = 'text'
              value = {this.state.credentials.state}
              onChange = {this.handleChange}
          />
          <InputField
              name = 'zip'
              placeholder = 'zip'
              type = 'text'
              value = {this.state.credentials.zip}
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