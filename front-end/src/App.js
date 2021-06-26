import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Login from "./components/Login";
import Register from "./components/register";
// import { logout } from "./actions";

class App extends Component {

  render() {
    return (
      <Router>
         <Route 
            exact
            path = '/'
            component = {Login}
          />
          <Route 
            path = '/register'
            component = {Register}
          />
          {/* <Route 
            exact path = '/'
            component = {Dashboard}
          />
          <Route 
            path = '/profile'
            component = {UserProfile}
          />
          <Route 
            path = '/listing'
            component = {TechForm}
          /> */}
      </Router>
    );
  }
}

export default App;
