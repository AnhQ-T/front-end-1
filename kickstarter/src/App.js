import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import PrivateRoute from './utils/PrivateRoute'
import './App.css';

import LoginForm from './components/Login'

import UserDashboard from './components/user/UserDashBoard'


function App() {
  return (
    <Router>
    <div className="App">
      <div className="titleAndNav">
          <h1>Kickstarter App</h1>
          <Link to='/'>Login </Link>
          <Link to='/signup'>Register</Link>
      </div>
        <Switch>
          <Route exact path="/" component={LoginForm}/>
          <Route path="/signup"/>
          <PrivateRoute exact path="/profile" component={UserDashboard} />
        </Switch>
    </div>
    </Router>
  );
}

export default App;
