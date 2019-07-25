import React, { Component } from "react";

const AppContext = React.createContext();

class AppProvider extends Component {
    state = {
        formActive: false,
        items: null
    };

    toggleForm = () => {
        this.setState({
            formActive: !this.state.formActive
        });
    };

    setItems = items => {
        this.setState({
            items: items
        });
    };

    addItem = newItem => {
        this.setState({
            items: [...this.state.items, newItem]
        });
    };

    getItem = id => {
        return this.state.items.find(item => item.id === id);
    };

    updateItems = updatedItem => {
        const updatedItems = this.state.items.map(item => {
            return item.id === updatedItem.id ? updatedItem : item;
        });

        this.setState({
            items: updatedItems
        });
    };

    render() {
        return (
            <AppContext.Provider
                value={{
                    state: this.state,
                    toggleForm: this.toggleForm,
                    setItems: this.setItems,
                    addItem: this.addItem,
                    getItem: this.getItem,
                    updateItems: this.updateItems
                }}
            >
                {this.props.children}
            </AppContext.Provider>
        );
    }
}

const AppConsumer = AppContext.Consumer;

export { AppProvider, AppConsumer, AppContext };
