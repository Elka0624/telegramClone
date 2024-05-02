import { useState } from "react";
import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { FiSmile } from "react-icons/fi";
import { FiPaperclip } from "react-icons/fi";
import { FiSend } from "react-icons/fi";

const UserChatInput = ({ setSelectedUser, selectedUser, sendMessage, loggedUser }) => {
  const [messageText, setMessageText] = useState('');

  const handleSendMessage = () => {
    if (messageText.trim() !== "") {
      const newMessage = {
        text: messageText,
        senderId: loggedUser.userId,
        receiverId: selectedUser.userId,
        date: new Date().toLocaleTimeString(),
      }
      sendMessage(newMessage);
      setMessageText("");
    }
    const box = document.getElementById("your-box-id");
      if (box) {
        box.scrollTop = box.scrollHeight;
      }
  }
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSendMessage();
      const box = document.getElementById("your-box-id");
      if (box) {
        box.scrollTop = box.scrollHeight;
      }
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
        <Button onClick={handleSendMessage} sx={{ width: "40px", background: "#1976d2", height: '40px', borderRadius: '50px', marginLeft: '10px' }}>
          <FiSend size={20} color={"white"} />
        </Button>
      </Box>
    </div>
  );
};

export default UserChatInput;
