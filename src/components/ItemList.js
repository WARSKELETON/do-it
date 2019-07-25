import React, { useContext } from "react";
import { AppContext } from "../context";
import Item from "./Item";
import ItemForm from "./ItemForm";

const ItemList = () => {
    const value = useContext(AppContext);

    return (
        <>
            <Item />
            <Item />
            <Item />
            {value.state.formActive && <ItemForm />}
        </>
    );
};

export default ItemList;
