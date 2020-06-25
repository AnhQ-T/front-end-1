import React, {useState, useEffect} from 'react';
import { connect } from "react-redux"

import {GetCurrentCampaign} from '../../actions/action';

import styled from "styled-components";

const Campaign = (props) => {

    const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 50%
    height: 100%
    background-color: #768FE0;
    border-radius: 4px;
    padding: 1rem;
    margin: 1rem;
    margin-top: 3rem;
    box-sizing: border-box;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
    flex: 0 0 25%;

    &:hover {
        opacity: 0.8;
        cursor: pointer;
    }
`

    const [campaign, setCampaign] = useState({
        current_campaign: props.current_campaign
    })

    const changeCampaign = async (e) => {
        e.preventDefault();
        setCampaign({
            ...campaign,
            current_campaign: props.data.id
        })
        props.GetCurrentCampaign(props.data.id)
    }

    return (
        <Wrapper onClick={changeCampaign}>
            <h4>{props.data.name}</h4>
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
        current_campaign_link: state.current_campaign_link,
        current_campaign: state.current_campaign,
        loggedIn: state.loggedIn
    }
}

export default connect(mapStateToProps, {GetCurrentCampaign}) (Campaign)
