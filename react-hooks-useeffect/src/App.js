import './App.css';
import React, { useState, version } from 'react';

function App() {
  const [resource, setResource] = useState('posts')

  // useEffect(() => {
  //   console.log('yo')
  // }, [])
  // Everything inside this arrow function ⬆️ is going to be
  // executed every single time our application renders

  // The 2nd parameters is an array and anything you pass into the array
  // Is going to be vaules that whenever you change your hooks is going to run
  // It doesn't run when the array's vaules doesn't change
  return (
    <div className='App-header'>
      <div>
        <button onClick={() => setResource('post')}> Posts </button>
        <button onClick={() => setResource('users')}> Users </button>
        <button onClick={() => setResource('comments')}> Comments </button>
      </div>
    </div>
  );
}

export default App;