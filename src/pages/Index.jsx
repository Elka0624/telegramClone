import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import AppBar from "../components/AppBar";
import MessageCard from "../components/MessageCard";
import NewContactModal from "../components/NewContactModal";
import SliderFolder from "../components/SliderFolder";
import back from "../assets/telegram.jpg";
import UserChatTopUi from "../components/UserChatTopUi";
import UserChatInput from "../components/UserChatInput";

function Index({ users, setUsers, loggedUser }) {

  const [selectedUser, setSelectedUser] = useState(null);
  const sendMessage = (text, isMine) => {
    const newMessage = { text, isMine, date: new Date().toLocaleTimeString() };
    const updatedUsers = users.map((user) =>
      user.userId === selectedUser.userId
        ? { ...user, messages: [...user.messages, newMessage] }
        : user
    );
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers))
    // setSelectedUser(updatedUsers)
    console.log(updatedUsers);
  };

  

  return (
    <Box sx={{ flexGrow: 1, height: "100vh" }}>
      <Grid container>
        <Grid
          item
          xs={3.5}
          sx={{
            backgroundColor: "#5c9ab2",
            padding: "8px 10px",
            paddingBottom: "0px",
            height: "100vh",
          }}
        >
          <AppBar users={users} />
          <SliderFolder />
            <MessageCard
              loggedUser={loggedUser}
              setSelectedUser={setSelectedUser}
              selectedUser={selectedUser}
              users={users ?? []}
              setUsers={setUsers}
            />
          <NewContactModal users={users} setUsers={setUsers} />
        </Grid>
        <Grid
          item
          xs={8.5}
          sx={{
            height: "100vh",
            backgroundImage: `url(${back})`,
            backgroundSize: "cover",
            backgroundPosition: "right",
          }}
        >
          {selectedUser && (
            <>
              <Box>
                <UserChatTopUi selectedUser={selectedUser} />
              </Box>
              <Box
                sx={{
                  height: "490px",
                  overflowY: "auto",
                  "&::-webkit-scrollbar": { width: "0.4em", },
                  "&::-webkit-scrollbar-track": {
                    boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
                    webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
                  },
                  '&::-webkit-scrollbar-thumb': {
                    backgroundColor: '#3b3b3b',
                    outline: '1px solid slategrey',
                    borderRadius: '50px'
                  }
                }}
              >
                {selectedUser.messages.map((message, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      marginTop: "10px",
                      padding: "10px",
                      justifyContent: "space-between",
                      marginBottom: "5px",
                    }}
                  >
                    <Box
                      sx={{
                        textAlign: message.isMine ? "right" : "left",
                        maxWidth: "500px",
                        padding: "10px",
                        borderRadius: message.isMine
                          ? "20px 20px 0px 20px"
                          : "20px 20px 20px 0px",
                        background: message.isMine ? "#06d814a1" : "#c6d8c6ad",
                        marginLeft: message.isMine ? "auto" : "0",
                      }}
                    >
                      <Typography sx={{ fontWeight: "bold" }}>
                        {message.text}
                      </Typography>
                      <Typography sx={{ fontSize: "0.8rem" }}>
                        {message.date}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
              <Box>
                <UserChatInput
                  setSelectedUser={setSelectedUser}
                  selectedUser={selectedUser}
                  sendMessage={sendMessage}
                />
              </Box>
            </>
          )}
        </Grid>
      </Grid>
    </Box>
  );
}

export default Index;
