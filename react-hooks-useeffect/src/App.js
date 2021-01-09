import './App.css';
import React, { useState, version } from 'react';

function App() {
  const [count, setCount] = useState(2, console.log('more than 1'))
  // Hardcoded Version ⬆️
  // This will always run every single time you run the function. 
  // This could slow down the performance of the application if it's something complex like Fibonacci


  // const [count, setCount] = useState(() => {
  //   console.log('only 1')
  //   return 2
  // })
  // Function Version ⬆️
  // This runs the function only the very first time your component renders
  // Using the functional version of useState will only run the function one time 
  // When your component renders.


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
        <span> {name} </span>
        <button onClick={incrementCount}> ➕  </button>
      </div>
    </div>
  );
}

export default App;