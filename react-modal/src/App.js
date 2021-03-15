import { useState } from 'react'
import Modal from './Modal.js'

import './App.css';

const App = () => {
  const [open, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div className="App">
      <h1 className='header'> 👋 The Modal Will Cover Me Too! </h1>
      <button onClick={() => setOpen(true)}> Open Me! </button>

      <Modal open={open} handleClose={handleClose} />
    </div>
  );
}

export default App;