import { useState } from "react";
import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { FiSmile } from "react-icons/fi";
import { FiPaperclip } from "react-icons/fi";
import { FiSend } from "react-icons/fi";

const UserChatInput = ({ setSelectedUser, selectedUser, sendMessage}) => {
  const [messageText, setMessageText] = useState('');

  const handleSendMessage = () => {
    if (messageText.trim() !== "") {
      sendMessage(messageText, true);
      setSelectedUser({ ...selectedUser, messages: [...selectedUser.messages, { text: messageText, isMine: true }] })
      setMessageText("");
    }
  }
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };
  return (
    <div>
      <Box
        sx={{
          width: "500px",
          display: "flex",
          alignItems: "center",
          background: "#ffffffa6",
          position: "absolute",
          bottom: "10px",
          left: "45%",
          padding: "10px 15px",
          borderRadius: "20px",
        }}
      >
        <Box
          sx={{
            width: "450px",
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            columnGap: "5px",
          }}
        >
          <FiSmile size={25} color={"black"} />
          <TextField
            size={"small"}
            fullWidth
            placeholder="Message"
            value={messageText}
            sx={{ "& fieldset": { border: "none" } }}
            onChange={(e) => setMessageText(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <FiPaperclip size={25} color={"black"} />
        </Box>
        <Button onClick={handleSendMessage} sx={{ width: "10px", background: "#1976d2" }}>
          <FiSend size={20} color={"white"} />
        </Button>
      </Box>
    </div>
  );
};

export default UserChatInput;
