import React from "react";
import styled from "styled-components";

const ItemForm = () => {
    return (
        <>
            <form>
                <FormWrapper>
                    <Name>
                        <p>New Item</p>
                        <Input
                            name="name"
                            autoComplete="off"
                            placeholder="Your item"
                        />
                    </Name>
                    <Submit>
                        <button type="submit">Done</button>
                    </Submit>
                </FormWrapper>
            </form>
        </>
    );
};

export default ItemForm;

const FormWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, auto);
    grid-template-areas:
        "name"
        "submit";
`;

const ErrorText = styled.p`
    color: red;
    font-weight: 700;
`;

const Input = styled.input`
    color: var(--mainBlack);
    font-family: "Montserrat";
    background-color: var(--mainYellow);
    padding: 5px;
    font-size: 20px;
    border-radius: 10px;
    font-weight: 700;
    border: none;
`;

const Email = styled.div`
    margin-right: auto;
    margin-left: auto;
    grid-area: email;
    width: 255px;
`;

const Name = styled(Email)`
    grid-area: name;
`;

const Submit = styled.div`
    grid-area: submit;
    margin-right: auto;
    margin-left: auto;
    button {
        cursor: pointer;
        margin-top: 20px;
        border: 1px solid var(--mainYellow);
        border-radius: 20px;
        background-color: transparent;
        color: var(--mainYellow);
        font-size: 20px;
        font-family: "Montserrat";
        font-weight: bold;
        padding-top: 4px;
        padding-bottom: 4px;
        padding-right: 40px;
        padding-left: 40px;
    }
`;
