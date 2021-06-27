import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Switch} from 'react-router';
import PrivateRoute from './utils/PrivateRoute';
import './App.css';
import Login from "./components/Login";
import Register from "./components/register";
import TechDetails from './components/TechDetails';
import EditTech from './components/EditTech';
import TechForm from './components/TechForm';
import Items from './components/Items';
// import { logout } from "./actions";

class App extends Component {

  render() {
    return (
      <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component ={Login} />
          <Route exact path="/register" component={Register} />
          <PrivateRoute exact path='/items/new' component={TechForm} />
          <PrivateRoute exact path = '/items/:id' component={TechDetails} />
          <PrivateRoute exact path = '/items/:id/edit' component={EditTech} />
          <PrivateRoute exact path="/items" component={Items} />
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
