import React, {useState, useEffect} from 'react'
import { connect } from "react-redux"
import {Login} from '../actions/action'
import { useHistory, Link, Redirect } from "react-router-dom";
import {useForm} from 'react-hook-form';

import styled from 'styled-components'

import DivStyle from '../styles/divStyles.js';
import InnerDiv from '../styles/InnerDivStyles.js';

const LoginForm = (props) => {

    let history = useHistory();

    const {register, handleSubmit, errors, reset} = useForm();
    const [errorLog, setErrorLog] = useState('')
    const [loggedIn, setLoggedIn] = useState({
        loggedIn: props.loggedIn
    });
    const [errorTest, setErrorTest] = useState({
        errorTest: props.error
    })

    const [credentials, setCredentials] = useState({
        username: props.username,
        password: props.password
    })

    const changeHandler = (e) => {
        e.preventDefault();
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    /*
        TEST AUTHENTICATION LOGIN
            "email": "eve.holt@reqres.in",
            "password": "cityslicka"
    */

    useEffect(() => {
        if (loggedIn === true) {
            history.push("/profile")
        }
    }, [])

    const submitHandler = (e) => {
        props.Login(credentials)
        if (localStorage.getItem("token") != null) {
            setLoggedIn(true)
        }
        else {
            setErrorLog("Please check your username and password")
        }
        setCredentials({
            username: '',
            password: ''
        })
    }

    if (localStorage.getItem("token") != null) {
        return (<Redirect to="profile"/>);
    }

    else {
        return (
            <DivStyle>
                <form onSubmit={handleSubmit(submitHandler)}>
                <InnerDiv>
                    <h2>Welcome to the Login Page!</h2>
                    <h3>Login</h3>
                </InnerDiv>
                <InnerDiv>
                    <h3>{errorLog}</h3>
                </InnerDiv>
                <InnerDiv>
                    <label>Username &nbsp;
                        <br></br>
                        <input
                        type="text"
                        placeholder="Username"
                        name="username"
                        value={credentials.username}
                        onChange={changeHandler}
                        ref={register({ required: true })}
                    />
                        {errors.username && <p>Username is required</p>}
                    </label>&nbsp;
                </InnerDiv>
                    <br></br>
                <InnerDiv>
                    <label>Password &nbsp;
                        <br></br>
                        <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={credentials.password}
                        onChange={changeHandler}
                        ref={register({ required: true })}
                    />
                        {errors.password && <p>Password is required</p>}
                    </label>&nbsp;
                </InnerDiv>
                    <br></br>
                <InnerDiv>
                    <button type="submit">Login</button>
                </InnerDiv>
                </form>
            </DivStyle>
        )
    }
}

const mapStateToProps = state => {
    return {
        username: state.username,
        password: state.password,
        error: state.error,
        loggedIn: state.loggedIn
    }
}

export default connect(mapStateToProps, {Login}) (LoginForm)
