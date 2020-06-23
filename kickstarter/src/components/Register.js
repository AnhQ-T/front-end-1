import React, {useState} from 'react'
import { connect } from "react-redux"
import { useHistory } from "react-router-dom";
import {Register} from '../actions/action'
import {useForm} from 'react-hook-form';

import styled from 'styled-components'

import DivStyle from '../styles/divStyles.js';
import InnerDiv from '../styles/InnerDivStyles.js';

const RegisterForm = (props) => {

    let history = useHistory();

    const {register, handleSubmit, errors, reset} = useForm();
    const [errorLog, setErrorLog] = useState('')

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

    const submitHandler = (data , e) => {
        props.Register(credentials)
        if (localStorage.getItem("token") != null) {
            history.push("/profile")
        }
        else {
            setErrorLog('Please check your username and passsword')
            setCredentials({
                username: '',
                password: '',
            })
        }
    }

    return (
        <DivStyle>
            <form onSubmit={handleSubmit(submitHandler)}>
            <InnerDiv>
                <h2>Welcome to the Registration Page!</h2>
                <h3>Register</h3>
            </InnerDiv>
            <InnerDiv>
                <h3>{errorLog}</h3>
            </InnerDiv>
            <InnerDiv>
                <label>Name &nbsp;
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
                <button type="submit">Register</button>
            </InnerDiv>
            </form>
        </DivStyle>
    )
}

const mapStateToProps = state => {
    return {
        username: state.username,
        password: state.password,
        error: state.error,
    }
}

export default connect(mapStateToProps, {Register}) (RegisterForm);
