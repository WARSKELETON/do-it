import React from "react";
import styled from "styled-components";

const Item = props => {
    return (
        <ItemWrapper>
            <Status>
                <button>
                    {props.status ? (
                        <i className="fas fa-circle" />
                    ) : (
                        <i className="far fa-circle" />
                    )}
                </button>
            </Status>
            <Activity>
                <p>{props.activity}</p>
            </Activity>
        </ItemWrapper>
    );
};

export default Item;

const ItemWrapper = styled.div`
    display: grid;
    grid-template-columns: 60px 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: "status activity";
`;

const Status = styled.div`
    grid-area: status;

    button {
        background-color: transparent;
        border: none;
        margin-top: 40%;
        margin-left: 20%;
        text-align: center;
        font-size: 22px;
        color: var(--mainYellow);

        i {
            height: 100%;
        }
    }
`;

const Activity = styled.div`
    grid-area: activity;
    color: var(--mainBlack);

    p {
        background-color: var(--mainYellow);
        padding: 5px;
        font-size: 20px;
        border-radius: 10px;
        font-weight: 700;
    }
`;
