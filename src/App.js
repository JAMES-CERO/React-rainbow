import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ColorBlock from './ColorBlock';

function App() {
  let colors = ["violtes", "blue", "lightblue", "green", "greenyellow", "yellow", "orange", "red"]

  return (
    <div className="App">
      {colors.map((color, i) => 
        <ColorBlock key={color} color={color} />
      )}
    </div>
  );
}

export default App;
