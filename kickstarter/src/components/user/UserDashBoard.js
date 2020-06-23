import React, {useState} from 'react';
import styled from "styled-components";

import { useHistory, Link, Redirect } from "react-router-dom";
import { connect } from "react-redux"
import {Logout} from '../../actions/action';
import CampaignList from './CampaignList'

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

const Header = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 2rem;
`

const Title = styled.h3`
    font-size: 2rem;
    font-weight: 300;
    margin: 1rem;
    color: black;
`;

const CampaignContainer = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-around;
`
const CampaignItems = styled.div`
    display: flex;
    flex-direction: column;

`

const StyledButton = styled.button`
    display: block;
    text-align: center;
    background-color: #09BD92;
    color: white;
    font-size: 1rem;
    border: 0;
    border-radius: 5px;
    height: 40px;
    padding: 0 20px;
    cursor: pointer;
    box-sizing: border-box;
`;


const UserDashBoard = (props) => {

    let history = useHistory();

    const handleLogout = () => {
        props.Logout();
        history.push("/")
    }

    return (
        <Wrapper>
            <Header>
                <div className="dashboard-header">
                    <h2>Welcome USERNAME</h2>
                </div>
                <div className="logout-container">
                    <StyledButton onClick={handleLogout}>Logout</StyledButton>
                </div>
            </Header>
            <CampaignContainer>
                <CampaignItems>
                    <Title>Current campaigns</Title>
                    <CampaignList />
                </CampaignItems>
                <div>
                    <h2>Project Status and Predictions</h2>
                </div>
            </CampaignContainer>
        </Wrapper>
    )
}

export default connect(null, {Logout}) (UserDashBoard)
