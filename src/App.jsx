// src/App.jsx
import React from 'react';
import AccountList from './components/AccountList';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1>Banking App</h1>
      <AccountList />
    </div>
  );
};

export default App;
