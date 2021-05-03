import { useState } from 'react'

import Header from './Header'

import './App.css';

const App = () => {
  const [number, setNumber] = useState(1)

  return (
    <>
      <Header number={number} />
      <div className="App">
        <button onClick={() => setNumber(number - 1)}>
          ➖
        </button>
        <span> {number} </span>
        <button onClick={() => setNumber(number + 1)}>
          ➕
        </button>
      </div>
    </>
  );
}

export default App;
