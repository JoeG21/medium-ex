import './App.css';
import { useState } from 'react';

import Search from './Search'

const App = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [foundSearch, setFoundSearch] = useState([])

  const handleSearch = () => {
    setSearchTerm(() => {
      console.log('hello')
    })
  }

  return (
    <div className="App">
      <Search handleSearch={handleSearch} />
      <ul>
        1 2 3
      </ul>
    </div>
  );
}

export default App;