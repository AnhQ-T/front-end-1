import React from 'react'
import DivStyle from '../styles/divStyles.js';
import InnerDiv from '../styles/InnerDivStyles.js';


// Webpage that loads AFTER the Registration button is clicked on the main page //
export default function register (props) {

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
                <h2>Welcome to the Registration Page!</h2>
                <h3>Register</h3>
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
                <button id="registerBtn" disabled={disabled}>Register!</button>
            </InnerDiv>
        </DivStyle>
    )
    
}