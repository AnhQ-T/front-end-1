import React, { useState, useEffect } from 'react';
import { Route, Switch, Link, useHistory, Redirect } from 'react-router-dom'

import DivStyle from '../styles/divStyles.js';
import InnerDiv from '../styles/InnerDivStyles.js';


// Default page that loads //
export default function login (props) {

    console.log(props)

    const {
        values,
        onInputChange,
        onSubmit,
        disabled,
        errors
    } = props


    // const submitHandler = (e) => {
    //     <Redirect to="profile"/>
    // }


    return (
        <DivStyle>
            <form onSubmit={onSubmit}>
                <InnerDiv>
                    <h2>Welcome to the Login Page!</h2>
                    <h3>Login</h3>
                </InnerDiv>
                <InnerDiv>
                    <div>{errors.name}</div>
                    <div>{errors.password}</div>
                </InnerDiv>
                    <br></br>
                <InnerDiv>
                    <label>Name &nbsp;
                        <br></br>
                        <input 
                        type='text'
                        name='name'
                        value={values.name}
                        onChange={onInputChange}
                        />
                    </label>&nbsp;
                </InnerDiv>
                    <br></br>
                <InnerDiv>
                    <label>Password &nbsp;
                        <br></br>
                        <input 
                        type='text'
                        name='password'
                        value={values.password}
                        onChange={onInputChange}
                        />
                    </label>&nbsp;
                </InnerDiv>
                    <br></br>
                <InnerDiv>
                    <button id="loginBtn" disabled={disabled}>Login!</button>
                </InnerDiv>
            </form>
        </DivStyle>
    )
    
}