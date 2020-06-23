import React, {useState} from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%
    height: 100%
    background-color: #768FE0;
    border-radius: 4px;
    padding: 1rem;
    margin: 1rem;
    margin-top: 3rem;
    box-sizing: border-box;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
    flex: 0 0 25%;
`

const UserDashBoard = () => {

    return (
        <Wrapper>
            <h2>Welcome USERNAME</h2>
            <div className="campaign-container">
                <h3>Current campaigns</h3>
            </div>
        </Wrapper>
    )
}

export default UserDashBoard;
