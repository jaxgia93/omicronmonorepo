import React from 'react';
import logo from './logo.svg';
import './App.css';
import {SharedValue} from 'common/src/main';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {SharedValue}
      </header>
    </div>
  );
}

export default App;
