import React from 'react';
import { connect } from "react-redux";
import { register } from '../actions';
import { Link } from "react-router-dom";

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
      <form>
        <hi>Please Register!</hi>
        <div
          className="inputs">
          <input
           name = 'username'
           placeholder = 'Username'
           type = 'text'
           value = {this.state.credentials.user_name}
           onChange = {this.handleChange}
          />
          <input
            name = 'password'
            placeholder = 'Password'
            type = 'password'
            value = {this.state.credentials.password}
            onChange = {this.handleChange}
          />
          <input
              name = 'email'
              placeholder = 'Email Address'
              type = 'text'
              value = {this.state.credentials.email}
              onChange = {this.handleChange}
          />
          <input
              name = 'city'
              placeholder = 'city'
              type = 'text'
              value = {this.state.credentials.city}
              onChange = {this.handleChange}
          />
          <input
              name = 'state'
              placeholder = 'state'
              type = 'text'
              value = {this.state.credentials.state}
              onChange = {this.handleChange}
          />
          <input
              name = 'zip'
              placeholder = 'zip'
              type = 'text'
              value = {this.state.credentials.zip}
              onChange = {this.handleChange}
          />
        </div>
      <button onClick = {this.register}>Register</button>
    </form>
    );
} 
}

const mapStateToProps = state => ({
  isRegistered: state.isRegistered,
  error: state.error,
})

export default connect(mapStateToProps, { register })(Register);