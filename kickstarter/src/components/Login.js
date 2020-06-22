import React, {useState} from 'react'
import { connect } from "react-redux"
import {Login} from '../actions/action'
import { useHistory } from "react-router-dom";
import {useForm} from 'react-hook-form';

const LoginForm = (props) => {

    let history = useHistory();

    const {register, handleSubmit, errors, reset} = useForm();

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

    const submitHandler = (e) => {
        e.preventDefault();
        props.Login(credentials)
        if (localStorage.getItem("token") != null) {
            history.push("/profile")
        }
        else {
            history.push("/")
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submitHandler)}>
                <h3>Username</h3>
                <input
                    type="text"
                    placeholder="Username"
                    name="username"
                    value={credentials.username}
                    onChange={changeHandler}
                    ref={register({ required: true })}
                />
                    {errors.username && <p>Username is required</p>}
                <h3>Password</h3>
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={credentials.password}
                    onChange={changeHandler}
                    ref={register({ required: true })}
                />
                    {errors.password && <p>Password is required</p>}
                <div>
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        username: state.username,
        password: state.password
    }
}

export default connect(mapStateToProps, {Login}) (LoginForm)
