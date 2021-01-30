import './App.css';
import { useEffect, useState } from 'react';

import Search from './Search'
import MainContainer from './MainContainer'

const App = () => {
  const [users, setUsers] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [foundSearch, setFoundSearch] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(json => setUsers(json));
  }, [])

  const handleSearch = () => {
    setSearchTerm(() => {
      console.log('hello')
    })
  };

  return (
    <div className="App">
      <Search handleSearch={handleSearch} />
      <MainContainer users={users} />
    </div>
  );
}

export default App;