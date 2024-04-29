import React, {useEffect, useState} from 'react'
import Index from './Index.jsx'
import Login from './Login.jsx'

const usersData = [
  {
    userId: 1,
    firstName: 'Elkajonov',
    lastName: 'Elka',
    email: 'test@gmail.com',
    password: '1234',
    messages: []
  },
  {
    userId: 2,
    firstName: 'Elkajonov2',
    lastName: 'Elka2',
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
    const usersLocal = localStorage.getItem('users');
    if (usersLocal) {
      setUsers(JSON.parse(usersLocal))
    }
  }, [])

  const [loggedUser, setLoggedUser] = useState(null);
  
  useEffect(() => {
    const loggedUserData = localStorage.getItem('loggedUser');
    if (loggedUserData) {
      setLoggedUser(JSON.parse(loggedUserData));
    }
  }, []);

  console.log(loggedUser);

  return (
    <>
    {loggedUser ? <Index loggedUser={loggedUser} users={users} setUsers={setUsers} /> : <Login setLoggedUser={setLoggedUser} users={users} />}
    </>
  )
}

export default App
