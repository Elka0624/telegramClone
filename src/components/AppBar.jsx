import { Box, TextField } from '@mui/material';
import React from 'react';
import { FiAlignJustify } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";

const AppBar = () => {
  return (
    <div style={{display: 'flex', justifyContent: "space-between", alignItems: "center"}}>
      <FiAlignJustify size={"25px"} />
      <Box width={350} 
        sx={{
          height: '35px', 
          display: "flex", 
          alignItems: "center", 
          padding:"2px 15px", 
          borderRadius: "20px",
          border: '1px solid gray'
          }}>
        <FiSearch size={"25px"} />
        <TextField  size="small" sx={{"& fieldset": { border: 'none' },}} fullWidth placeholder='Search' />
      </Box>
    </div>
  )
}

export default AppBar
