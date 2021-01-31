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

  const searchUser = (e) => {
    setSearchTerm(prevState => e.target.value)

    // setSearchTerm(prevState => console.log(e.target.value))
  };

  // // WORKING CODE ⬇️
  useEffect(() => {
    setFoundUsers(
      users.filter( user => {
        return user.name.toLowerCase().includes(searchTerm.toLowerCase())}
    ))
  }, [searchTerm, users])

  // useEffect(() => {
  //   setFoundUsers(
  //     let current = users.filter(user => {
  //       user.name.toLowerCase().includes(searchTerm.toLowerCase())
  //       if( current !== users) {
  //         console.log("hello")
  //       } else {
  //         return foundUsers(current)
  //       }
  //     }
  //     ))
  // }, [searchTerm, users])

  return (
    <div className="App">
      <Search searchUser={searchUser} />
      <br />
      {foundUsers.length !== 0 ?
      <UserContainer users={foundUsers} />
      : foundUsers.length === 0 ?
      <h1>No</h1>
      // <UserContainer users={} />
      :
      <UserContainer users={users} />}

      {/* {foundUsers.length === 0 ?
        <UserContainer users={users} />
        :
        <UserContainer users={foundUsers} />} */}
    </div>
  );
}

export default App;