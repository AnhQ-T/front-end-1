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
    border: 1px solid lightgray;
    box-shadow: -7px -5px 9px lightgray;
`;
const BottomContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 2%;
`;
const Campaigns = styled.div `
    text-align: center;
    margin-left: 15%;
`;
const StatusAndPredictions = styled.div `
    text-align: center;
    margin-right: 15%;
`;
const TopButtons = styled.div`
    width: 35%;
    margin-left: 65%;
    padding: 0%;
    display: flex;
`;
const Button = styled.button`
    width: 50%;
    height: 2rem;
    padding: 2%;
    text-align: center;
    background-color: teal;
    color: white;
    border: none;
    border-left: 1px solid black;
`;
const HOne = styled.h1`
    font-size: 1.5rem;
    text-align: center;
`;
const HTwo = styled.h2`
    font-size: 1rem;
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
    <BottomContainer className="bottomContainer">
        <Campaigns className="campaigns">
            <HTwo>Current Campaigns</HTwo>
            <div>lorem</div>
            <div>lorem</div>
            <div>lorem</div>
            <div>lorem</div>
        </Campaigns>

        <StatusAndPredictions className="statusAndPredictions">
            <HTwo>Project Status and Predictions</HTwo>
            <div>lorem</div>
            <div>lorem</div>
            <div>lorem</div>
            <div>lorem</div>
        </StatusAndPredictions>
    </BottomContainer>
    </Container>
)
}