import logo from './logo.svg';
import React from 'react'
import './App.css';

import Sparkle from './Sparkle'

function App() {
  const name = 'ahao'
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <React.Fragment>
            Edit <code>src/App.js</code> and save to reload.
          </React.Fragment>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn {name}
        </a>
      </header>
      <Sparkle />
    </div>
  );
}

export default App;
