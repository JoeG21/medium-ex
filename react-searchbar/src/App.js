import './App.css';
import { useEffect, useState } from 'react';

import Search from './Search'
import UserContainer from './UserContainer'

const App = () => {
  const [users, setUsers] = useState(() => {
    return []
  })
  const [searchTerm, setSearchTerm] = useState(() => {
    return ""
  })
  const [foundUsers, setFoundUsers] = useState(() => {
    return []
  })

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(json => setUsers(json));
  }, [])

  const searchUser = (e) => {
    setSearchTerm(prevState => e.target.value)

    // setSearchTerm(prevState => console.log(e.target.value))
  };

  useEffect(() => {
    setFoundUsers(
      users.filter( user => {
        return user.name.toLowerCase().includes(searchTerm.toLowerCase())}
    ))
  }, [searchTerm, users])

  return (
    <div className='App'>
      <Search searchUser={searchUser} />
      <br />
      {foundUsers.length !== 0 ?
      <UserContainer users={foundUsers} />
      : foundUsers.length === 0 ?
      <h1> No Result </h1>
      :
      <UserContainer users={users} />}
    </div>
  );
};

export default App;