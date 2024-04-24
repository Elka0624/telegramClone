import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import AppBar from "../components/AppBar";
import MessageCard from "../components/MessageCard";
import NewContactModal from "../components/NewContactModal";
import SliderFolder from "../components/SliderFolder";
import back from '../assets/telegram.jpg'


function Index() {
  const [users, setUsers] = useState([]);

  return (
    <Box sx={{ flexGrow: 1, height: "100vh" }}>
      <Grid container>
        <Grid item xs={3.5} sx={{backgroundColor: "#5c9ab2", padding: "8px 10px", paddingBottom: '0px',height: "100vh"}}>
            <AppBar />
            <SliderFolder />
            <MessageCard users={users} />
            <NewContactModal users={users} setUsers={setUsers} />
        </Grid>
        <Grid item xs={8.5} sx={{height: "100vh", backgroundImage: `url(${back})`, backgroundSize: 'cover', backgroundPosition: 'right'}}>
          
        </Grid>
      </Grid>
    </Box>
  );
};

export default Index;
