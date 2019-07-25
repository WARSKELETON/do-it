import React from "react";
import "./App.css";
import Bar from "./components/Bar";
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
