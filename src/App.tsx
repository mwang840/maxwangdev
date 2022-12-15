import React from 'react';
import Maxwell from "./assets/MaxWang.jpg";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Maxwell} alt="Maxwell Wang" width="600" height="500" />
        <p>
          Maxwell Wang
        </p>
      </header>
    </div>
  );
}

export default App;
