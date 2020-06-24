import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 1%;
    margin-right: 1%;
    margin-top: 2%;
    margin-bottom: 2%;
    padding: 2%;
    border: 1px solid gray;
    box-shadow: -7px -5px 6px gray;
`;
const TopButtons = styled.div`
    width: 15%;
    margin-left: 85%;
    padding: 0%;
    display: flex;
`;
const Button = styled.button`
    width: 50%;
    height: 1rem;
`;
const HOne = styled.h1`
    font-size: 3rem;
    text-align: center;
`;
// const Container = styled.h1`
//     font-size: 100px;
// `;
export default function Profile (props) {
    
return (
    <Container className="container"> 
        {/* Going to flex direct row this */}

        <TopButtons className="topButtons">
            <Button>Add New Campaign</Button>
            <Button>Logout</Button>
        </TopButtons>

        <div className="title">
            <HOne>Welcome</HOne>
        </div>

        <div className="campaigns">
            <h2>Current Campaigns</h2>
            <div></div>
        </div>

        <div className="statusAndPredictions">
        
        </div>

    </Container>
)
}