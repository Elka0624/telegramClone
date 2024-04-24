import { Avatar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const MessageCard = (props) => {
  const { users } = props;
  return (
    <div>
      {users.map((user) => (
        <Box key={user.userId} sx={{
        width: "100%",
        backgroundColor: '#e9e9e9',
        display: "flex",
        padding: "12px",
        marginBottom: "5px",
        marginTop: "10px",
        color: 'black'
      }}>
        <Box width={70}>
          <Avatar src={user.userImage} />
        </Box>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column'
        }} >
          <Box width={300} sx={{
          display: 'flex',
          justifyContent: "space-between"
        }}>
            <Typography>{user.userName}</Typography>
            <Typography>10:15</Typography>
          </Box>
          <Box sx={{  
          display: 'flex',
          justifyContent: "left"
        }}>
            <img src={user.userImage} alt="" width={30} />
            <Typography>
              Tvar ....
            </Typography>
          </Box>
        </Box>
      </Box>
      ))}
    </div>
  )
}

export default MessageCard
