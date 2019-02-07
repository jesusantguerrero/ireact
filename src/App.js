import React, { Component } from 'react';
import logo from './logo.svg';
import Example from './components/hook';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Example></Example>
        </header>
      </div>
    );
  }
}

export default App;
