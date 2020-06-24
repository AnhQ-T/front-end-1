import React, {useState, useEffect} from 'react';
import styled from "styled-components";

import { useHistory, Link, Redirect } from "react-router-dom";
import { connect } from "react-redux"
import {Logout, GetData} from '../../actions/action';
import CampaignList from './CampaignList'

import axios from 'axios';

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

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 20%;
    margin-left: 80%;
`

const Header = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;git
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

    console.log(props)

    let history = useHistory();

    const [dataTest, setDataTest] = useState();

    const [data, setData] = useState({
        user_data: props.user_data,
        data_list: props.data_list
    })

    const handleLogout = () => {
        props.Logout();
        history.push("/")
    }

    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    };

    useEffect(() => {
        props.GetData();
        setData({
            ...data,
            data_list: props.data_list
        })
    }, [])

    console.log(data);

    return (
        <Wrapper>
            <ButtonContainer>
                <Link className="add-link" to="/addcampaign">
                    <StyledButton>Add new campaign</StyledButton>
                </Link>
                <StyledButton onClick={handleLogout}>Logout</StyledButton>
            </ButtonContainer>
            <Header>
                <div className="dashboard-header">
                    <div className="username-header">
                        <h2>Welcome</h2>
                        <h2 style={{textTransform: 'capitalize', marginLeft: "0.5rem"}}>{localStorage.getItem("username")}</h2>
                    </div>
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

const mapStateToProps = state => {
    return {
        username: state.username,
        password: state.password,
        error: state.error,
        user_data: state.user_data,
        data_list: state.data_list,
        loggedIn: state.loggedIn
    }
}

export default connect(mapStateToProps, {Logout, GetData}) (UserDashBoard)
