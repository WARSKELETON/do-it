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

    render() {
        return (
            <AppContext.Provider
                value={{
                    state: this.state,
                    toggleForm: this.toggleForm,
                    setItems: this.setItems,
                    addItem: this.addItem
                }}
            >
                {this.props.children}
            </AppContext.Provider>
        );
    }
}

const AppConsumer = AppContext.Consumer;

export { AppProvider, AppConsumer, AppContext };
