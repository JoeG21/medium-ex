import { useState, useEffect } from 'react'

import './App.css';

const App = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const handleResize = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const portrait = (
    <div className='portrait'>
      <p>hello portrait </p>
    </div>
  )

  const landscape = (
    <div className='landscape'>
      <p> hello landscape </p>
    </div>
  )

  return (
    <div className="App">
      {windowWidth < 500 ? portrait : landscape}
    </div>
  );
}

export default App;