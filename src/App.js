import React, { Component } from 'react';
import logo from './logo.svg';
import red from './red.jpg';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h3>Maxwell Lawrence Jann</h3>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Elam
          </p>
          <p>
            Maja
          </p>
          <p>Codejoy</p>
          
          <a
            className="App-link"
            href="https://maxjann.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jann Software
          </a>
        </header>
        <div>
        <p>Part 2</p>
          <div id="red">
            <div>
              <p id="seethrough">Maja</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
