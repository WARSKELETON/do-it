import React, { Component } from "react";

const AppContext = React.createContext();

class AppProvider extends Component {
    state = {
        formActive: false
    };

    toggleForm = () => {
        this.setState({
            formActive: !this.state.formActive
        });
    };

    render() {
        return (
            <AppContext.Provider
                value={{
                    state: this.state,
                    toggleForm: this.toggleForm
                }}
            >
                {this.props.children}
            </AppContext.Provider>
        );
    }
}

const AppConsumer = AppContext.Consumer;

export { AppProvider, AppConsumer, AppContext };
