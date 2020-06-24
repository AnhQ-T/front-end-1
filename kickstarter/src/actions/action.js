import axiosWithAuth from '../utils/axiosWithAuth'
import axios from 'axios';

export const LOGIN = "LOGIN"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAILURE = "LOGIN_FAILURE"

export const REGISTER = "REGISTER"
export const REGISTER_SUCCESS = "REGISTER_SUCCESS"
export const REGISTER_FAILURE = "REGISTER_FAILURE"

export const GET_DATA = "GET_DATA"
export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS"

export const LOGOUT = "LOGOUT"

export const Login = (credentials) => dispatch => {

    dispatch({
        type: LOGIN
    })

    axiosWithAuth().post("https://kickstarterdb.herokuapp.com/auth/login", credentials)
    .then(res => {
        console.log(credentials)
        console.log(res)
        localStorage.setItem('token', res.data.access_token)
        localStorage.setItem('username', (credentials.username));
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
    console.log(credentials)
    axiosWithAuth().post("https://kickstarterdb.herokuapp.com/auth/register", credentials)
    .then(res => {
        console.log(res)
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

export const GetData = () => dispatch => {
    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    };
    dispatch({
        type: GET_DATA,
        payload: localStorage.getItem("username")
    })
    axios.get(`https://kickstarter-mock-api.herokuapp.com/${localStorage.getItem("username")}`, config)
    .then(res => {
        dispatch({
            type: GET_DATA_SUCCESS, payload: res.data
        })
    })
}

export const Logout = () => dispatch => {
    dispatch({
        type: LOGOUT
    })
    localStorage.clear()
}
