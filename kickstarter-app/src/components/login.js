import React from 'react'


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
        <form onSubmit={onSubmit}>
            <div>
                <h2>Welcome to the Login Page!</h2>
                <h3>Login</h3>
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
                <button id="loginBtn" disabled={disabled}>Login!</button>
            </div>
        </form>
    )
    
}