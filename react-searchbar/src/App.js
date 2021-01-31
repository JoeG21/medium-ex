import './App.css';
import { useEffect, useState } from 'react';

import Search from './Search'
import UserContainer from './UserContainer'

const App = () => {
  const [users, setUsers] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [foundUsers, setFoundUsers] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(json => setUsers(json));
  }, [])

  useEffect(() => {
    setFoundUsers(
      users.filter( user => {
        return user.name.toLowerCase().includes(searchTerm.toLowerCase())}
    ))
  }, [searchTerm, users])

  const searchUser = (e) => {
    setSearchTerm(prevState => e.target.value)
  };

  return (
    <div className="App">
      <Search searchUser={searchUser} />
      <br />
      {foundUsers.length === 0 ? 
        <UserContainer users={users} /> 
        : 
        <UserContainer users={foundUsers} />}
    </div>
  );
}

export default App;