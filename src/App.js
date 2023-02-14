import React, { useState } from 'react';
import ColorBlock from './ColorBlock';
import ColorForm from './ColorForm';

function App() {
  const addColor = (newColor) => {
    setColors([...colors, newColor])
  }
  let [colors, setColors] = useState(["violet", "blue", "lightblue", "green", "greenyellow", "yellow", "orange", "red"]
  )
  return (
    <div className="App">
      {colors.map((color, i) => 
        <ColorBlock key={color} color={color} />
      )}
      <ColorForm addColor={addColor} />
    </div>
  );
}

export default App;
