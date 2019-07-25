import React, { useEffect, useContext } from "react";
import { AppContext } from "../context";
import Item from "./Item";
import ItemForm from "./ItemForm";
import axios from "axios";

const ItemList = () => {
    const value = useContext(AppContext);

    useEffect(() => {
        axios.get("http://localhost:4000/items").then(res => {
            value.setItems(res.data);
        });
    }, []);

    return value.state.items ? (
        <>
            {value.state.items.map(item => (
                <Item
                    key={item.id}
                    status={item.status}
                    activity={item.activity}
                />
            ))}
            {value.state.formActive && <ItemForm />}
        </>
    ) : (
        <p>Loading...</p>
    );
};

export default ItemList;
