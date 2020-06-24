import axiosWithAuth from '../utils/axiosWithAuth'

export const LOGIN = "LOGIN"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAILURE = "LOGIN_FAILURE"

export const REGISTER = "REGISTER"
export const REGISTER_SUCCESS = "REGISTER_SUCCESS"
export const REGISTER_FAILURE = "REGISTER_FAILURE"

export const LOGOUT = "LOGOUT"

export const Login = (credentials) => dispatch => {

    dispatch({
        type: LOGIN
    })

    axiosWithAuth().post("https://kickstarter-mock-api.herokuapp.com/auth/login?" + `username=${credentials.username}` + `&` + `password=${credentials.password}`)
    .then(res => {
        console.log(credentials)
        console.log(res)
        localStorage.setItem('token', JSON.stringify(res.data.token));
        dispatch({
            type: LOGIN_SUCCESS, payload: res.data
        })
    })
    .catch(err => {
        console.log(credentials)
        console.log(err)
        dispatch({
            type: LOGIN_FAILURE, payload: err
        })
    })
}

export const Register = (credentials) => dispatch => {
    dispatch({
        type: REGISTER
    })
    axiosWithAuth().post("https://kickstarter-mock-api.herokuapp.com/auth/register?" + `username=${credentials.username}` + `&` + `password=${credentials.password}`)
    .then(res => {
        dispatch({
            type: REGISTER_SUCCESS, payload: res
        })
    })
    .catch(err => {
        console.log(err)
        dispatch({
            type: REGISTER_FAILURE, payload: 'got an error'
        })
    })
}

export const Logout = () => dispatch => {
    dispatch({
        type: LOGOUT
    })
    localStorage.clear()
}
