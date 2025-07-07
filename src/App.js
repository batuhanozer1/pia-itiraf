import React, { useState } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import ConfessionForm from './components/ConfessionForm';
import ConfessionList from './components/ConfessionList';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('form');

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <span className="navbar-brand">Confession App</span>
          <div className="navbar-nav">
            <button 
              className={`btn ${currentPage === 'form' ? 'btn-primary' : 'btn-outline-light'} me-2`}
              onClick={() => setCurrentPage('form')}
            >
              Make Confession
            </button>
            <button 
              className={`btn ${currentPage === 'list' ? 'btn-primary' : 'btn-outline-light'}`}
              onClick={() => setCurrentPage('list')}
            >
              View Confessions
            </button>
          </div>
        </div>
      </nav>

      {currentPage === 'form' ? <ConfessionForm /> : <ConfessionList />}
    </div>
  );
}

export default App;
