import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './components/pages/About';
import Login from './components/Login';
import Register from './components/pages/Register';
import Navbar from './components/Navbar'
import Home from './components/pages/Home'


// import { logout } from "./actions";

class App extends Component {

  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
        </Switch>

      {/* added exact to login route to make it easier for testing
          <Route 
          exact
            path = '/'
            component = {Login}
          />
          <Route 
            path = '/register'
            component = {Register}
          /> */}
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
