import React from 'react';
import Emoji from './components/Emoji';
import logo from './resources/statefarmLogo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Job's done, boss. 
        <Emoji
          symbol="🐑"
          label="thumbsUp"
          />
        </p>
      </header>
    </div>
  );
}

export default App;
