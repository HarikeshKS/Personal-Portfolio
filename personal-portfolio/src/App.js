import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BackgroundImages from './components/Back';

function App() {
  return (
    <div id="main">
      <BackgroundImages />
      <div id="top">
        <div id="workingarea">
          <Navbar />
          <Hero />
        </div>
      </div>
    </div>
  );
}

export default App;
