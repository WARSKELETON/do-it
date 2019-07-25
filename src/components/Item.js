import React from "react";
import styled from "styled-components";

const Item = () => {
    return (
        <ItemWrapper>
            <Status>
                <p>
                    <i className="fas fa-circle" />
                </p>
            </Status>
            <Activity>
                <p>Get the high ticket done.</p>
            </Activity>
        </ItemWrapper>
    );
};

export default Item;

const ItemWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-template-rows: 1fr;
    grid-template-areas: "status activity";
`;

const Status = styled.div`
    grid-area: status;

    p {
        text-align: center;
        font-size: 22px;
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
