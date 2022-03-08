import logo from './logo.svg';
import './App.scss';
import React, { useState, useEffect } from 'react';
import { fetchTopStories } from './services/api';

const App = () => {
  const [data, setData] = useState({})

  useEffect(() => {
    fetchTopStories(setData)
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
