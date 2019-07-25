import React, { useState, useContext } from "react";
import { AppContext } from "../context";
import styled from "styled-components";
import axios from "axios";

const ItemForm = () => {
    const context = useContext(AppContext);
    const [value, setValue] = useState("");

    const handleChange = event => {
        setValue(event.target.value);
    };

    const handleSubmit = event => {
        console.log(value);
        const newItem = { id: Date.now(), status: false, activity: value };
        axios.post("http://localhost:4000/items", newItem).then(res => {
            console.log(res);
            context.addItem(newItem);
        });
        setValue("");
        context.toggleForm();
        event.preventDefault();
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <FormWrapper>
                    <Name>
                        <p>New Item</p>
                        <Input
                            type="text"
                            onChange={handleChange}
                            value={value}
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
