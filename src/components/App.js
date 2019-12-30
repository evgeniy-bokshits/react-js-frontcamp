import React, { Component } from "react";

import { ErrorBoundary } from './error-boundary';
import { Header } from "./header";

import './App.scss';
import { Footer } from "./footer";
import Main from "./main/main";

class App extends Component {
    render() {
        return (
            <div className="App">
                <ErrorBoundary>
                    <Header/>
                    <Main/>
                    <div className="temp-devider" />
                    <Footer/>
                </ErrorBoundary>
            </div>
        );
    }
}

export default App;