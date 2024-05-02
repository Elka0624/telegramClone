import React, { useState } from "react";
import { Button, TextField, Typography, Alert } from "@mui/material";
import { Box } from "@mui/system";

const Login = ({ users, setLoggedUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false); // State to control error message visibility

  const handleLogin = () => {
    const foundUser = users.find(
      (user) => user.email === email && user.password === password
    );
    if (foundUser) {
      setLoggedUser(foundUser);
    } else {
      setShowError(true); // Show error message
      setTimeout(() => setShowError(false), 5000); // Hide error message after 3 seconds
    }
  };

  const handleKeyPressLogin = (event) => {
    if (event.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "500px",
          background: "white",
          display: "flex",
          flexDirection: "column",
          rowGap: "30px",
          justifyContent: "center",
          alignItems: "center",
          padding: "50px 0px",
          borderRadius: "30px",
        }}
      >
        <Box>
          <Typography variant="h3" color="black">
            Login
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", rowGap: "20px" }}>
          <TextField
            fullWidth
            size="small"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyPress={handleKeyPressLogin}
          />
          <TextField
            fullWidth
            size="small"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyPress={handleKeyPressLogin}
          />
          <Button
            sx={{
              border: "2px solid #30a4f5",
              color: "white",
              borderRadius: "10px",
              background: "#3390ecb3",
              "&:hover": { color: '#3390ecb3' },
            }}
            onClick={handleLogin}
          >
            Login
          </Button>
        </Box>
        {showError && ( // Show error message if showError state is true
            <Alert severity="error" sx={{ width: '300px', transition: "opacity 0.5s", opacity: 1 }}>
              Email yoki Passworda hatolik bor iltimos tekshirib qaytadan urinib ko'ring
            </Alert>
          )}
      </Box>
    </Box>
  );
};

export default Login;
