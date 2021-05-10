import { useState, useEffect } from 'react'

import './App.css';

function App() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(setLoading(true))
    .then(res => res.json())
    .then(users => setTimeout(() => handleUsers(users), 3000))
  }, [])

  const handleUsers = (users) => {
    setUsers(users)
    setLoading(false)
  }

  let startLoading = (
    <h1> LOADING </h1>
  )

  let userContainer = (
    <>
      {users.map(user => <ul><p> {user.name} </p></ul>)}
    </>
  )

  return (
    <div className="App">
      {loading ? startLoading : userContainer }

      {/* {loading ? console.log('this is true') : console.log('this is false')} */}
    </div>
  );
}

export default App;