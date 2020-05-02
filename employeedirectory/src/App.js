import React from 'react';
import Navbar from './components/layouts/Navbar';
import Search from './components/employees/Search';
import './App.css';
import Spinner from './components/layouts/Spinner';

function App() {
  const loading = false;

  return (
    <div className="App">
      {loading ? <Spinner /> : 
      <header className="App-header">
      <Navbar />
          <h3>(Search for employee by Name, Phone Number or Email)</h3>
      <Search />
      </header>
    };
    </div>
  );
}

export default App;
