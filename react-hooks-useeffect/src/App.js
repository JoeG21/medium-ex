import './App.css';
import React, { useState, useEffect } from 'react';

const App = () => {
  const [resource, setResource] = useState('posts')
  const [list, setList] = useState([])

  // console.log('render')

  // useEffect(() => {
  //   console.log('hello')
  // })

  //   useEffect(() => {
  //   console.log('onMount')
  // }, [])
  // This acts like an onMount

  // useEffect(() => {
  //   console.log('hello')
  // }, [resource])

  useEffect(() => {
  fetch(`https://jsonplaceholder.typicode.com/${resource}`)
  .then(response => response.json())
  .then(json => setList(json));
  }, [resource])
 
  return (
      <div className='App'>
        <button onClick={() => setResource('posts')}> Posts </button>
        <button onClick={() => setResource('users')}> Users </button>
        <button onClick={() => setResource('comments')}> Comments </button>
        <h1> {resource} </h1>
        {list.map(data => {
          return <ul>{JSON.stringify(data)}</ul>
        })}
      </div>
  ); 
}

export default App;