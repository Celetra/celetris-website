import React, { Component } from "react";
import { Link } from 'react-router-dom';

function Nav(props) {
    return (
        <header className="App-header">
            <ul id="navbar" className="navbar">
                <Link to="/">
                    <li className="navitem">Home</li>
                </Link>
                <Link to="/about">
                    <li className="navitem">About</li>
                </Link>
                <Link to="/contact">
                    <li className="navitem">Contact</li>
                </Link>
                <Link to="/">
                    <li style={{float:"right", marginRight:"1.5vw"}} className="navitem">Celetris</li>
                </Link>
            </ul>
        </header>
    );
}

export default Nav;