import React, { useContext } from "react";
import { AppContext } from "../context";
import styled from "styled-components";

const Bar = () => {
    const value = useContext(AppContext);

    return (
        <BarWrapper>
            <Logo>
                <h1>DO IT.</h1>
            </Logo>
            <Utilities>
                <button onClick={() => value.toggleForm()}>
                    <i className="fas fa-plus-circle" />
                </button>
            </Utilities>
        </BarWrapper>
    );
};

export default Bar;

const BarWrapper = styled.div`
    display: grid;
    grid-template-columns: 50px repeat(2, auto) 50px;
    grid-template-rows: 1fr;
    grid-template-areas: ". logo utilities .";
`;

const Logo = styled.div`
    grid-area: logo;

    h1 {
        font-size: 32px;
        text-align: left;
    }
`;

const Utilities = styled.div`
    grid-area: utilities;

    button {
        display: block;
        margin-right: auto;
        margin-left: auto;
        margin-top: 20px;
        font-size: 32px;
        text-align: right;
        color: var(--mainYellow);
        background-color: transparent;
        border: none;
    }
`;
