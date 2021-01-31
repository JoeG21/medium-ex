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
    // setSearchTerm(prevState => e.target.value), filterUser
    setSearchTerm(prevState => e.target.value)

    if (searchTerm !== "") {
      const x = users.filter(user => {
        return user.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
      })
      return setFoundUsers(x)
    } else {
      setFoundUsers([])
    }

    //  if (searchTerm !== "") {
    //   let currentUser = users.filter(user => {
    //     return user.name.toLowerCase().includes(searchTerm.toLowerCase())
    //   })
    //   setFoundUsers(currentUser)
    //   // setFoundUsers(prevState => currentUser)
    // } else {
    //   setFoundUsers([])
    // }
    

    // setSearchTerm(prevState => console.log(e.target.value))

  };

  // const filterUser = () => {
  //   users.filter( user => {
  //     return user.name.includes(searchTerm)
  //   })
  // }


  // const filterUser = () => {
  //   if (searchTerm !== "") {
  //     let currentUser = users.filter(user => {
  //       return user.name.includes(searchTerm)
  //     })
  //     setFoundUsers(prevState => currentUser)
  //   } else {
  //     setFoundUsers([])
  //   }
  // }

  return (
    <div className="App">
      <Search searchUser={searchUser} />
      <br />

      {/* {searchTerm === "" ? <UserContainer users={users} /> : <UserContainer foundUsers={foundUsers} />} */}



      {foundUsers.length === 0 ? 
        <UserContainer users={users} /> 
        : 
        <UserContainer users={foundUsers} />}
    </div>
  );
}

export default App;