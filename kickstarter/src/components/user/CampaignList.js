import React, {useState} from 'react';
import { connect } from "react-redux"

import styled from "styled-components";

import Campaign from './Campaign';

const CampaignList = (props) => {

    const [data, setData] = useState({
        user_data: props.user_data,
        data_list: props.data_list
    })

    return (
        <div>
            {props.data_list.map((el, i) => (
                <Campaign data={el} key={i}/>
            ))}
        </div>
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

export default connect(mapStateToProps) (CampaignList)
