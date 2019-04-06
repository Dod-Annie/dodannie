import React, { Component } from 'react';
import Login from './containers/login'
import HomePage from './containers/homepage'
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom"

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={Login} />
          <Route path="/login/" component={Login} />
          <Route path="/index/" component={HomePage} />
        </div>
      </Router>
    );
  }
}

export default App;