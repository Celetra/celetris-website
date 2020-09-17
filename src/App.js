import React from 'react';
import './App.css';
import { StarField } from './components/StarField';
import Nav from './components/Nav';
import About from './components/About'
import Contact from './components/Contact'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/" exact component={StarField}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
      </div>
    </Router>
  );
}

export default App;
