import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import styled, {css} from 'styled-components';

const CampaignAddForm = () => {

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

    const {register, handleSubmit, errors} = useForm();

    const onSubmit = data => {
        console.log(data);
    }

    return (
        <div>
            <h2>Add a campaign</h2>
            <div>
                <StyledFormWrapper>
                <StyledForm onSubmit={handleSubmit(onSubmit)}>
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
                        type="text"
                        placeholder="Funding Goal"
                        name="goal"
                        ref={register({ required: true })}
                    />
                        {errors.goal && <p>A funding goal is required</p>}
                    <div className="button-container">
                        <StyledButton type="submit">Submit</StyledButton>
                    </div>
                </StyledForm>
                </StyledFormWrapper>
            </div>
        </div>
    )
}

export default CampaignAddForm;
