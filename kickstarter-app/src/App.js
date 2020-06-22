import React, { useState, useEffect } from 'react';
import { Route, Switch, Link } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

import LoginPage from './components/login';
import RegisterPage from './components/register';
import { register } from './serviceWorker';

import * as Yup from 'yup';
import formSchema from './validation/formschema';

import HeaderStyle from './styles/headerStyles.js';
import DivStyle from './styles/divStyles.js';



const initialUser = [
  {
    name: 'Brian Griffiths',
    password: '12345',
  }
]

const initialFormValues = [
  {
    name: '',
    password: '',
  }
]

const initialFormErrors = [
  {
    name: '',
    password: '',
  }
]

const initialDisabled = true

function App() {
  
  const [ userData, setUserData ] = useState(initialUser)
  const [ formValues, setFormValues ] = useState(initialFormValues)
  const [ formErrors, setFormErrors ] = useState(initialFormErrors)
  const [ disabled, setDisabled ] = useState(initialDisabled)


console.log(formValues)


  const onInputChange = evt => {
    const {name, value} = evt.target

    Yup
      .reach(formSchema, name)
      .validate(value)

      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: ""
        })
      })
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0]
        })
      })

    setFormValues({
      ...formValues,
      [name]: value,
    })
  }

  const onSubmit = evt => {

    evt.preventDefault()

    const newUser = { ...formValues }
    setUserData(userData => [newUser, ...userData])
    setFormValues(initialFormValues)
  }

  useEffect(() => {
    formSchema.isValid(formValues).then(valid => {
      setDisabled(!valid);
    })
  }, [formValues])



  return (
    <>

      <HeaderStyle className="titleAndNav">
        
          <h1>Kickstarter App</h1>
          
          <Link to='/'>Login</Link>&nbsp;&nbsp;
          
          <Link to='/signup'>Register</Link>

      </HeaderStyle>

    
      <Route exact path='/'>
        <LoginPage 
        values={formValues}
        onInputChange={onInputChange}
        onSubmit={onSubmit}
        disabled={disabled}
        errors={formErrors}
        />
      </Route>
      

      <Route path='/signup'>
        <RegisterPage 
        values={formValues}
        onInputChange={onInputChange}
        onSubmit={onSubmit}
        disabled={disabled}
        errors={formErrors}
        />
      </Route>

    </>
  );
}

export default App;
