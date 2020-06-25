// import React, { useState, useEffect } from 'react';
// import { Route, Switch, Link, useHistory } from 'react-router-dom'
// import logo from './logo.svg';
// import './App.css';
// import axios from 'axios'

// import axiosWithAuth from './utils/axiosWithAuth.js';

// import LoginPage from './components/login';
// import RegisterPage from './components/register';
// import { register } from './serviceWorker';
// import Profile from './components/profile.js';

// import * as Yup from 'yup';
// import formSchema from './validation/formschema';

// import HeaderStyle from './styles/headerStyles.js';



// const initialUser = [
//   {
//     name: 'Brian Griffiths',
//     password: '123456',
//   }
// ]

// const initialFormValues = 
//   {
//     name: '',
//     password: '',
//   }


// const initialFormErrors = [
//   {
//     name: '',
//     password: '',
//   }
// ]

// const initialDisabled = true

// function App() {
  
//   const [ userData, setUserData ] = useState(initialUser)
//   const [ formValues, setFormValues ] = useState(initialFormValues)
//   const [ formErrors, setFormErrors ] = useState(initialFormErrors)
//   const [ disabled, setDisabled ] = useState(initialDisabled)

//   const [ credentials, setCredentials ] = useState(initialFormValues)

//   let history = useHistory()

// //   const getUsers = () => {
// //     axios.get('https://kickstarterdb.herokuapp.com/')
// //       .then(response => {
// //         setUserData(response)
// //         console.log(response)
        
// //       })
// //       .catch(err => {
// //         debugger
// //       })
// // }

  
// //     axios.post('https://kickstart-prediction.herokuapp.com/profile', newUser)
// //       .then(res => {
// //         setUserData([...users, res.data])
// //       })
// //       .catch(err => {
// //         debugger
// //       })
// //       .finally(() => {
// //         setFormValues(initialFormValues)
// //       })
  




//   const onInputChange = evt => {
//     const {name, value} = evt.target

//     Yup
//       .reach(formSchema, name)
//       .validate(value)

//       .then(() => {
//         setFormErrors({
//           ...formErrors,
//           [name]: ""
//         })
//       })
//       .catch(err => {
//         setFormErrors({
//           ...formErrors,
//           [name]: err.errors[0]
//         })
//       })

//     setFormValues({
//       ...formValues,
//       [name]: value,
//     })
//   }

//   const Login = (e) => {
//     axios.post("https://kickstarter-mock-api.herokuapp.com/auth/login?" + `username=${formValues.name}` + `&` + `password=${formValues.password}`)
//     .then(res => {
//       localStorage.setItem('token', res.data.access_token)
//       localStorage.setItem('username', (formValues.name));
//       console.log(res)
//     })
//   }


//   const onSubmit = evt => {

//     evt.preventDefault()

//     Login();

//     const newUser = { ...formValues }
//     setUserData(userData => [newUser, ...userData])
//     setFormValues(initialFormValues)

//     history.push("/profile")
//   }

//   useEffect(() => {
//     formSchema.isValid(formValues).then(valid => {
//       setDisabled(!valid);
//     })
//   }, [formValues])





//   return (
//     <>

//       <HeaderStyle className="titleAndNav">

//           <a href='https://priceless-brattain-62fd1d.netlify.app/index.html' className="marketing-link">Kickstarter App</a>
          
//           <Link to='/' className="links">Home</Link>&nbsp;&nbsp;
          
//           <Link to='/signup' className="links">Register</Link>

//       </HeaderStyle>

    
//       <Route exact path='/'>
//         <LoginPage 
//         values={formValues}
//         onInputChange={onInputChange}
//         onSubmit={onSubmit}
//         disabled={disabled}
//         errors={formErrors}
//         />
//       </Route>
      

//       <Route path='/signup'>
//         <RegisterPage 
//         values={formValues}
//         onInputChange={onInputChange}
//         onSubmit={onSubmit}
//         disabled={disabled}
//         errors={formErrors}
//         />
//       </Route>


//       <Route path='/profile'>
//         <Profile data={localStorage}/>
//       </Route>
//     </>
//   );
// }

// export default App;





import React, { useState, useEffect } from 'react';
import { Route, Switch, Link, useHistory } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import axiosWithAuth from './utils/axiosWithAuth';
import LoginPage from './components/login';
import RegisterPage from './components/register';
import { register } from './serviceWorker';
import Profile from './components/profile.js';
import * as Yup from 'yup';
import formSchema from './validation/formschema';
import HeaderStyle from './styles/headerStyles.js';
const initialUser = [
  {
    name: 'Brian Griffiths',
    password: '123456',
  }
]
const initialFormValues =
  {
    name: '',
    password: '',
  }
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
  let history = useHistory()
//   const getUsers = () => {
//     axios.get('https://kickstarterdb.herokuapp.com/')
//       .then(response => {
//         setUserData(response)
//         console.log(response)
//       })
//       .catch(err => {
//         debugger
//       })
// }
//     axios.post('https://kickstart-prediction.herokuapp.com/profile', newUser)
//       .then(res => {
//         setUserData([...users, res.data])
//       })
//       .catch(err => {
//         debugger
//       })
//       .finally(() => {
//         setFormValues(initialFormValues)
//       })
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
  const Login = (e) => {
    axios.post("https://kickstarter-mock-api.herokuapp.com/auth/login?" + `username=${formValues.name}` + `&` + `password=${formValues.password}`)
    .then(res => {
      localStorage.setItem('token', res.data.access_token)
      localStorage.setItem('name', (formValues.name));
      console.log(res)
    })
  }
  const onSubmit = evt => {
    evt.preventDefault()
    Login();
    const newUser = { ...formValues }
    setUserData(userData => [newUser, ...userData])
    setFormValues(initialFormValues)
    history.push("/profile")
  }
  useEffect(() => {
    formSchema.isValid(formValues).then(valid => {
      setDisabled(!valid);
    })
  }, [formValues])
  console.log(formValues.name, formValues.password)
  return (
    <>
      <HeaderStyle className="titleAndNav">
          <a href='https://priceless-brattain-62fd1d.netlify.app/index.html' className="marketing-link">Kickstarter App</a>
          <Link to='/' className="links">Home</Link>&nbsp;&nbsp;
          <Link to='/signup' className="links">Register</Link>
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
      <Route path='/profile'>
        <Profile/>
      </Route>
    </>
  );
}
export default App;