import React from "react";
import "./App.css";
import Bar from "./components/Bar";
import Item from "./components/Item";
import ItemForm from "./components/ItemForm";
import ItemList from "./components/ItemList";
import { AppProvider } from "./context";

function App() {
    return (
        <AppProvider>
            <Bar />
            <ItemList />
        </AppProvider>
    );
}

export default App;
