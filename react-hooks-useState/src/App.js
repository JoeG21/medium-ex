import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('?')
 
  const handleRed = () => {
    setColor(prevColor => <div className='card-red'> Red </div>)
  }

  const handleGreen = () => {
    setColor(prevColor => <div className='card-green'> Green </div>)
  }

  const handleBlue = () => {
    setColor(prevColor => <div className='card-blue'> Blue </div>)
  }

  return (
    <div className="App-header">
        <div className='button-boxs'>
          <button className='button-red' onClick={handleRed}> Red </button>
          <button className='button-green' onClick={handleGreen}> Greeen </button>
          <button className='button-blue' onClick={handleBlue}> Blue </button>
        </div>
        <div className='card'>
          <span> {color} </span>
        </div>
    </div>
  );
}

export default App;
