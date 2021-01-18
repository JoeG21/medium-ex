import { useState } from 'react';
import './App.css';
import Face from './Face'

const App = () => {
  const [counter, setCount] = useState(2)

  const handleAdd = () => {
    setCount(prevCount => prevCount + 1)
  }

  const handleSubtract = () => {
    setCount(prevCount =>prevCount - 1)
  }

  return (
    <div className="App">
      <button onClick={handleSubtract}> ➖ </button>
      <span>{counter}</span>
      <button onClick={handleAdd}> ➕ </button>
      <Face counter={counter}/>
    </div>
  );
}

export default App;
