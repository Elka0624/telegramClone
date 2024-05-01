import React, {useEffect, useState} from 'react'
import Index from './Index.jsx'
import Login from './Login.jsx'

const usersData = [
  {
    userId: 1,
    firstName: 'User',
    lastName: 'One',
    email: 'test@gmail.com',
    password: '1234',   
    messages: []
  },
  {
    userId: 2,
    firstName: 'User',
    lastName: 'Two',
    email: 'test2@gmail.com',
    password: '12345',
    messages: []
  },
]

function App() {
  useEffect(() => {
    const usersLocal = localStorage.getItem('users');
    if (!usersLocal) {
      localStorage.setItem('users', JSON.stringify(usersData))
    }
  }, [])

  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    setInterval(() => {
      const usersLocal = localStorage.getItem('users');
      if (usersLocal) {
        setUsers(JSON.parse(usersLocal))
      }
    }, 500)
  }, [])

  const [loggedUser, setLoggedUser] = useState(null);

  return (
    <>
    {loggedUser ? <Index loggedUser={loggedUser} users={users} setUsers={setUsers} /> : <Login setLoggedUser={setLoggedUser} users={users} />}
    </>
  )
}

export default App
