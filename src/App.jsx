import logo from './logo.svg';
import './App.css';
// CSS setup
import React from 'react';
//React setup

export const App=()=> {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>ここまでご覧いただき、ありがとうございます</h1>
      </header>
    </div>
  );
}

export default App;