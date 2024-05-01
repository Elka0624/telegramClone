import { Avatar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";

const MessageCard = (props) => {
  const { users, setSelectedUser, selectedUser, loggedUser } = props;

  const selectedUsers = users.filter((user) => user?.userId === loggedUser?.userId)
  
  return (
    <div>
      {users.filter((user) => user?.userId !== loggedUser?.userId).map((user) => (
        <Box
          onClick={() => setSelectedUser(user)}
          key={user.userId}
          sx={{
            width: "100%",
            backgroundColor: "#e9e9e9",
            display: "flex",
            padding: "12px",
            marginBottom: "5px",
            marginTop: "10px",
            color: "black",
            "&:hover": { backgroundColor: "#3390ecb3", cursor: "pointer" },
          }}
        >
          <Box width={70}>
            {user.userImage ? (
              <Avatar src={user.userImage} />
            ) : (
              <Box
                sx={{
                  width: "50px",
                  height: "50px",
                  textAlign: "center",
                  fontSize: "25px",
                  borderRadius: "50px",
                  paddingTop: "3px",
                  border: "2px solid #3390ecb3",
                }}
              >
                {user.firstName && user.firstName.substr(0, 1).toUpperCase()}
                {user.lastName && user.lastName.substr(0, 1).toUpperCase()}
              </Box>
            )}
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              width={300}
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography>
                {user.firstName} {user.lastName}
              </Typography>
              <Typography>{user.date}</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "left",
              }}
            >
              {/* <img src={user.userImage} alt="" width={30} /> */}
              <Typography>{user.messages[user.messages.length - 1]?.text}</Typography>
            </Box>
          </Box>
        </Box>
      ))}
    </div>
  );
};

export default MessageCard;
