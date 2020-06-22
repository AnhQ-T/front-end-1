import React from 'react'


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
        <form onSubmit={onSubmit}>
            <div>
                <h2>Welcome to the Registration Page!</h2>
                <h3>Register</h3>
            </div>
            <div>
                <div>{errors.name}</div>
                <div>{errors.password}</div>
            </div>
            <div>
                <label>Name: &nbsp;
                    <input 
                    type='text'
                    name='name'
                    value={values.name}
                    onChange={onInputChange}
                    />
                </label>&nbsp;
                
                <br></br>

                <label>Password: &nbsp;
                    <input 
                    type='text'
                    name='password'
                    value={values.password}
                    onChange={onInputChange}
                    />
                </label>&nbsp;
            </div>
            <div>
                <button id="registerBtn" disabled={disabled}>Register!</button>
            </div>
        </form>
    )
    
}