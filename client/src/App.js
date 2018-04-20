import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Welcome, Signin, Signup, Jokes } from './components/';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Route path="/" component={Welcome} />
        <Route path="/signup" component={Signup} />
        <Route path="/signin" component={Signin} />
        <Route path="/jokes" component={Jokes} />
      </div>
    );
  }
}

export default App;
