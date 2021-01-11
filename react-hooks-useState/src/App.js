import { useState } from 'react';
// import React, { Component } from 'react';
import './App.css';

function App() {
  // const [state, setState] = useState({ color: '?', phrase: 'Hello World' })
  // const color = state.color
  // const phrase = state.phrase
  // Using Objects in your state ⬆️


  // const [color, setColor] = useState('?')
  // Hardcoded Version ⬆️
  // Will run multiple times when you update the state


  const [color, setColor] = useState(() => {
    return '?'
  })
  // Functional Version ⬆️
  // Will only run one time when the component renders

  const handleRed = () => {
    setColor(prevState => <div className='card-red'> Red </div>)
  }

  const handleGreen = () => {
    setColor(prevState => <div className='card-green'> Green </div>)
  }

  const handleBlue = () => {
    setColor(prevState => <div className='card-blue'> Blue </div>)
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

// Class Component Version ⬇️
// class App extends Component {

//   constructor() {
//     super();
//     this.state = {color: '?'}
//   }

//   handleRed = () => {
//     this.setState({
//       color: <div className='card-red'> Red </div>
//     })
//   }

//   handleGreen = () => {
//     this.setState({
//       color: <div className='card-green'> Green </div>
//     })
//   }

//   handleBlue = () => {
//     this.setState({
//       color: <div className='card-blue'> Blue </div>
//     })
//   }

//   render() {
//     return (
//       <div className="App-header">
//         <div className='button-boxs'>
//           <button className='button-red' onClick={this.handleRed}> Red </button>
//           <button className='button-green' onClick={this.handleGreen}> Greeen </button>
//           <button className='button-blue' onClick={this.handleBlue}> Blue </button>
//         </div>
//         <div className='card'>
//           <span> {this.state.color} </span>
//         </div>
//       </div>
//     )
//   }
// }

export default App;