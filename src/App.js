import React, { Component } from 'react';
import logo from './logo.svg';
import TastingForm from './TastingForm'
import './App.css';

class App extends Component {
  state = {
    notebook:{

    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to yet another Coffee Cupping App</h1>
        </header>
        <p className="App-intro">
          This is the begginings of a react app for cupping various coffees and saving notes/data for them.
        </p>
        <TastingForm/>
      </div>
    );
  }
}

export default App;
