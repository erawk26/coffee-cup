import React, { Component } from 'react';
import logo from './img/logo.svg';
import TastingForm from './TastingForm'
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      notebook: {
        1528725188646: {
          beverage: "Espresso",
          name: "erik",
          origin: "colombia",
          rating: "2",
          roaster: "me",
          roastdate: "8/25/2018",
          tastedate: "2/12/2018",
          cupscores: {
            body: 1,
            acidity: 3,
            stonefruit: 3
          }
        },
      }
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
