import './App.css';
import { useState } from 'react';

import Search from './Search'

const App = () => {
  const [searchTerm, setSearchTearch] = useState("")
  const [foundSearch, setFoundSearch] = useState([])

  const handleSearch = () => {
    setSearchTerm(() => {

    })
  }

  return (
    <div className="App">
      <Search search={handleSearch} />
    </div>
  );
}

export default App;