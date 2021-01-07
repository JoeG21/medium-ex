import './App.css';
import React, { useState } from 'react';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';

function App() {
  // const [count, setCount ] = useState(2)
  // This will always run every single time you run the function. 
  // This could slow down the performance of the application if it is something complex

  const [count, setCount ] = useState(() => {
    return 2
  })
  // Using the functional version of useState will only run once whenever your component
  // Renders the very 1st time

  const decrementCount = () => {
    setCount(prevCount => prevCount - 1)
  }

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1)
  }

  return (
    <div className='App-header'>
      <div className='card'>
        <button onClick={decrementCount}> ➖ </button>
        <span> {count} </span>
        <button onClick={incrementCount}> ➕ </button>
      </div>
    </div>
  );
}

export default App;