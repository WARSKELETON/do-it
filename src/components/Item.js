import React, { useContext } from "react";
import { AppContext } from "../context";
import styled from "styled-components";
import axios from "axios";

const Item = props => {
    const value = useContext(AppContext);

    const changeStatus = id => {
        let item = value.getItem(id);
        item.status = !item.status;

        axios.put(`http://localhost:4000/items/${item.id}`, item).then(res => {
            value.updateItems(item);
        });
    };

    return (
        <ItemWrapper>
            <Status>
                <button onClick={() => changeStatus(props.id)}>
                    {props.status ? (
                        <i className="fas fa-circle" />
                    ) : (
                        <i className="far fa-circle" />
                    )}
                </button>
            </Status>
            <Activity status={props.status}>
                <p>{props.activity}</p>
            </Activity>
        </ItemWrapper>
    );
};

export default Item;

const ItemWrapper = styled.div`
    display: grid;
    grid-template-columns: 60px 320px;
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
    color: ${props =>
        props.status ? "var(--lightBlack)" : "var(--mainBlack)"};
    text-decoration: ${props =>
        props.status ? "var(--mainYellow) line-through" : "none"};

    p {
        background-color: var(--mainYellow);
        padding: 5px;
        font-size: 20px;
        border-radius: 10px;
        font-weight: 700;
    }
`;
