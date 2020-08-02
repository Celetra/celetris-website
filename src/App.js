import React from 'react';
import logo from './logo.svg';
import './App.css';
import {StarField} from './StarField.js';

function App() {
  return (
    <div className="App">
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
      <StarField />
    </div>
  );
}

function App_OLD() {
  return (
    <div className="App">
      <StarField/>
    </div>
  );
}

export default App;
