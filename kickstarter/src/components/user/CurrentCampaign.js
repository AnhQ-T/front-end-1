import React, {useState} from 'react';
import { connect } from "react-redux"
import { useHistory} from "react-router-dom";
import {useForm} from 'react-hook-form';
import { DeleteCampaign, UpdateCampaign } from '../../actions/action'

import styled, {css} from 'styled-components';

const CurrentCampaign = (props) => {

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 60%;
    height: 100%;
    background-color: #3dd164;
    color: white;
    border-radius: 4px;
    padding: 1rem;
    margin: 1rem;
    margin-top: 3rem;
    box-sizing: border-box;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
    flex: 0 0 25%;
`

const ContainerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 40vw;
    height: 100%;
    background-color: #e6edf0;
    color: white;
    border-radius: 4px;
    padding: 1rem;
    padding-right: 2rem;
    margin: 1rem;
    margin-top: 3rem;
    box-sizing: border-box;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
    flex: 0 0 25%;
`

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`

const EditButton = styled.button`
    display: block;
    text-align: center;
    background-color: #2d9ccc;
    color: white;
    font-size: 1rem;
    border: 0;
    border-radius: 5px;
    height: 40px;
    padding: 0 20px;
    cursor: pointer;
    box-sizing: border-box;
`;

const DeleteButton = styled.button`
    display: block;
    text-align: center;
    background-color: red;
    color: white;
    font-size: 1rem;
    border: 0;
    border-radius: 5px;
    height: 40px;
    padding: 0 20px;
    cursor: pointer;
    box-sizing: border-box;
    margin-left: 5rem;
`;

const inputStyle = css`
    background-color: #eee;
    height: 1rem;
    border-radius: 5px;
    border: 1px solid #ddd;
    margin: 10px 0 20px 0;
    padding: 1.3rem;
    box-sizing: border-box;
`;

const StyledFormWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 4vh;
`;

const StyledForm = styled.form`
    width: 100%;
    max-width: 700px;
    padding: 40px;
    background-color: #fff;
    border-radius: 10px;
    box-sizing: border-box;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`;


const StyledEditForm = styled.form`
    width: 100%;
    max-width: 700px;
    padding: 40px;
    background-color: #fff;
    border-radius: 10px;
    box-sizing: border-box;
    color: black;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`;

const StyledInput = styled.input`
    display: block;
    width: 100%;
    ${inputStyle}
`;

const StyledTextArea = styled.textarea`
    background-color: #eee;
    width: 100%;
    min-height: 100px;
    resize: none;
    ${inputStyle}
`;

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

    let history = useHistory();

    const {register, handleSubmit, errors} = useForm();

    const [campaign, setCampaign] = useState({
        current_campaign: props.current_campaign,
        current_campaign_link: props.current_campaign_link
    })

    const initialEdit = false

    const [isEditing, setIsEditing] = useState(initialEdit);

    const editHandler = (e) => {
        e.preventDefault();
        setIsEditing(!isEditing);
    }

    const deleteHandler = (e) => {
        e.preventDefault();
        props.DeleteCampaign(props.current_campaign_link);
    }

    const editCampaign = (event) => {
        const input = {
            name: event.name,
            description: event.description,
            goal: event.goal,
            category: event.category,
        }
        props.UpdateCampaign(props.current_campaign_link, input)
    }

    return (
        <div>
        {(Object.keys(props.current_campaign).length) > 0 ?
        <ContainerWrapper>
            <Wrapper>
                <h2>{props.current_campaign.name}</h2>
                <h3>{props.current_campaign.description}</h3>
                <h4>Fund Raising Goal: {props.current_campaign.goal}</h4>
                <h4>Category: {props.current_campaign.category}</h4>
            </Wrapper>
            <ButtonContainer>
                <EditButton onClick={editHandler}>Edit</EditButton>
                <DeleteButton onClick={deleteHandler}>Delete</DeleteButton>
            </ButtonContainer>
            {isEditing == true ?
            <div>
                <StyledFormWrapper>
                <StyledEditForm onSubmit={handleSubmit(editCampaign)}>
                    <h3>Campaign Name</h3>
                        <StyledInput
                            type="text"
                            placeholder="Campaign Name"
                            name="name"
                            ref={register({ required: true })}
                        />
                            {errors.name && <p>A campaign name is required</p>}
                    <h3>Description</h3>
                        <StyledTextArea
                            placeholder="Project Description"
                            name="description"
                            ref={register({ required: true })}
                        />
                            {errors.description && <p>Please provide a description of the project</p>}
                    <h3>Funding Goal</h3>
                    <StyledInput
                        type="number"
                        placeholder="Funding Goal"
                        name="goal"
                        ref={register({ required: true })}
                    />
                        {errors.goal && <p>A funding goal is required</p>}
                    <h3>Category</h3>
                    <StyledInput
                        type="text"
                        placeholder="Category"
                        name="category"
                        ref={register({ required: true })}
                    />
                        {errors.category && <p>A category is required</p>}
                    <div className="button-container">
                        <StyledButton type="submit">Submit</StyledButton>
                    </div>
                </StyledEditForm>
                </StyledFormWrapper>
                </div>
                : null}
        </ContainerWrapper>
        : null}
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

export default connect(mapStateToProps, {DeleteCampaign, UpdateCampaign}) (CurrentCampaign)
