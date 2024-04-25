import { Avatar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { FiPhone } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { FiMoreVertical } from "react-icons/fi";

const UserChatTopUi = ({selectedUser}) => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "5px 10px",
          background: '#ffffffa6',
          color: 'black'
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            columnGap: "15px",
          }}
        >
          <Avatar />
          <Box>
            <Typography variant="h6">{selectedUser.firstName} {selectedUser.lastName}</Typography>
            <Typography variant={'span'} color={'gray'}>last seen recently</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            columnGap: "15px",
          }}
        >
          <FiPhone size={22} />
          <FiSearch size={22} />
          <FiMoreVertical size={22} />
        </Box>
      </Box>
    </div>
  );
};

export default UserChatTopUi;
