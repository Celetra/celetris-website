import React from 'react';
import './App.css';
import { StarField } from './StarField';
import Nav from './Nav';
import About from './About'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/" exact component={StarField}/>
        <Route path="/about" component={About}/>
      </div>
    </Router>
  );
}

export default App;
