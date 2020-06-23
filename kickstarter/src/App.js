import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import PrivateRoute from './utils/PrivateRoute'
import './App.css';

import LoginForm from './components/Login'
import RegisterForm from './components/Register'

import UserDashBoard from './components/user/UserDashBoard'

import HeaderStyle from './styles/headerStyles.js';
import DivStyle from './styles/divStyles.js';
import HStyle from './styles/h1Styles.js';


function App() {
  return (
    <Router>
    <div className="App">
    <HeaderStyle className="titleAndNav">
      <HStyle>Kickstarter App</HStyle>
      <Link to='/'>Login</Link>&nbsp;&nbsp;
      <Link to='/signup'>Register</Link>
    </HeaderStyle>
        <Switch>
          <Route exact path="/" component={LoginForm}/>
          <Route path="/signup" component={RegisterForm}/>
          <PrivateRoute exact path="/profile" component={UserDashBoard} />
        </Switch>
    </div>
    </Router>
  );
}

export default App;
