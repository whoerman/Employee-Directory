import React from 'react';
import Navbar from './components/layouts/navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar />
          <h1>(Search for employee by Name, Phone Number or Email)</h1>
      </header>
    </div>
  );
}

export default App;
