import React from 'react';
import Maxwell from "./assets/MaxWang.jpg";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Maxwell} alt="Maxwell Wang" width="600" height="500" />
        <h6>Maxwell Wang</h6>
        <p>Aspiring Full-Stack Developer</p>
      </header>
      
    </div>
  );
}

export default App;
