import React, { Component } from "react";

export class NavBar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <header className="App-header">
                <div id="navbar" className="navbar">
                <div className="navitem">Item1</div>
                <div className="navitem">Item2</div>
                <div className="navitem">Item3</div>
                </div>
                <div className="slogan">
                simply stellar software
                </div>
            </header>
        )
    }
}