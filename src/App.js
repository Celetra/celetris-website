import React from 'react';
import logo from './logo.svg';
import './App.css';
import {StarField} from './StarField.js';
import {NavBar} from './NavBar.js';

function App() {
  const showNavBar = false;
  return showNavBar ? (
    <div className="App">
      <NavBar />
      <StarField showNavBar={showNavBar}/>
    </div>
  ) : (
    <div className="App">
      <StarField showNavBar={showNavBar}/>
    </div>
  );
}

export default App;
