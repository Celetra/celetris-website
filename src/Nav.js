import React, { Component } from "react";
import { Link} from 'react-router-dom';

function Nav(props) {
    return (
        <header className="App-header">
            <div id="navbar" className="navbar">
                <Link to="/">
                    <div className="navitem">Home</div>
                </Link>
                <Link to="/about">
                    <div className="navitem">About</div>
                </Link>
            </div>
            <div className="slogan">
                Celetris
            </div>
        </header>
    );
}

export default Nav;