import { Box, TextField } from "@mui/material";
import React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { FiAlignJustify } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";

const AppBar = ({ users }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleLogOut = () => {
    localStorage.setItem("loggedUser", '')
    window.location.reload()
  }


  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <FiAlignJustify
        size={"25px"}
        color={"white"}
        aria-describedby={id}
        variant="contained"
        onClick={handleClick}
      />
      {/* popover start */}
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Box
          sx={{
            width: "300px",
            display: "flex",
            flexDirection: "column",
            rowGap: "10px",
            justifyContent: "left",
            padding: "10px 20px",
          }}
        >
          <Typography sx={{ background: "#ececec", padding: "10px" }}>
            FistName: Elka
          </Typography>
          <Typography sx={{ background: "#ececec", padding: "10px" }}>
            LastName: Elka
          </Typography>
          <Button onClick={() => handleLogOut()}>LogOut</Button>
        </Box>
      </Popover>
      {/* popover end */}
      <Box
        width={350}
        sx={{
          height: "35px",
          display: "flex",
          alignItems: "center",
          padding: "2px 15px",
          borderRadius: "20px",
          border: "1px solid white",
          color: "white",
        }}
      >
        <FiSearch size={"25px"} color={"white"} />
        <TextField
          size="small"
          sx={{ color: "white", "& fieldset": { border: "none" } }}
          fullWidth
          placeholder="Search"
        />
      </Box>
    </div>
  );
};

export default AppBar;
