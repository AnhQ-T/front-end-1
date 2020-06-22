import React from 'react'
import styled from 'styled-components'

import DivStyle from '../styles/divStyles.js';
import InnerDiv from '../styles/InnerDivStyles.js';

// Default page that loads //
export default function login (props) {

    const {
        values,
        onInputChange,
        onSubmit,
        disabled,
        errors
    } = props

    return (
        <DivStyle onSubmit={onSubmit}>
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
        </DivStyle>
    )
    
}