import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [resource, setResource] = useState('posts')

  useEffect(() => {
    console.log('onMount')
  }, [])
  // This acts like an onMount

  // useEffect(() => {
  //   console.log('hello')
  // }, [resource])
  // Everything inside this arrow function ⬆️ is going to be
  // executed every single time our application renders

  // The 2nd parameters is an array and anything you pass into the array
 
  return (
      <div className='App'>
        <button onClick={() => setResource('posts')}> Posts </button>
        <button onClick={() => setResource('users')}> Users </button>
        <button onClick={() => setResource('comments')}> Comments </button>
        <h1> {resource} </h1>
      </div>
  );
}

export default App;