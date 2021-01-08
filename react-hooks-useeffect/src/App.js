import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState(() => {
    return <div className='card'> ? </div>
  })

  console.log('render')

  useEffect(() => {
    console.log('yo')
  }, [])
  // Everything inside this arrow function ⬆️ is going to be
  // executed every single time our application renders

  // The 2nd parameters is an array and anything you pass into the array
  // Is going to be vaules that whenever you change your hooks is going to run

  // It doesn't run when the array's vaules doesn't change


  const handleRed = () => {
    setColor(prevColor => <div className='card-red'> Red </div>)
    // setColor(prevColor => 'Red' )
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
        <p> {color} </p>
    </div>
  );
}

export default App;
