import React, { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';

const Login = ({ users, setLoggedUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log(users, 'ttttt');
    const foundUser = users.find(user => user.email === email && user.password === password);
    setLoggedUser(foundUser.userId);
    localStorage.setItem('loggedUser', JSON.stringify(foundUser))
  };

  return (
    <Box sx={{
      width: '100%',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Box sx={{
        width: '500px',
        background: 'white',
        display: 'flex',
        flexDirection: "column",
        rowGap: '30px',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '50px 0px',
        borderRadius: '30px'
      }}>
        <Box>
          <Typography variant='h3' color='black'>Login</Typography>
        </Box>
        <Box sx={{display: 'flex', flexDirection: 'column', rowGap:'20px'}}>
          <TextField 
            fullWidth 
            size='small' 
            placeholder='Email' 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField 
            fullWidth 
            size='small' 
            placeholder='Password' 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button 
            sx={{border: '2px solid #30a4f5', color: '#30a4f5', borderRadius: '10px'}} 
            onClick={handleLogin}
          >
            Login
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default Login;
