import './App.css';
import React, { useState } from 'react';

function App() {
  // const [count, setCount] = useState(2)
  // This will always run every single time you run the function. 
  // This could slow down the performance of the application if it's something complex like Fibonacci


  const [count, setCount] = useState(() => {
    return 2
  })
  // Using the functional version of useState will only run once whenever your component
  // Renders the very 1st time


  const [name, setName] = useState(() => {
    return <div className='p-red'> Red </div>
  })

  const decrementCount = () => {
    setCount(prevCount => prevCount - 1)
    setName(prevName => <div className='p-red'> Red </div>)
  }

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1)
    setName(prevName => <div className='p-blue'> Blue </div>)
  }

  return (
    <div className='App-header'>
      <div className='card'>
        <button onClick={decrementCount}> ➖  </button>
        <span> {count} </span>
        <p> {name} </p>
        <button onClick={incrementCount}> ➕  </button>
      </div>
    </div>
  );
}

export default App;