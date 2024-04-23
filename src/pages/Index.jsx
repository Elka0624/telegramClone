import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import AppBar from "../components/AppBar";



const Index = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <Grid item xs={3.5} sx={{backgroundColor: "red"}}>
            <AppBar />
        </Grid>
        <Grid item xs={8.5} sx={{backgroundColor: "purple"}}>
          hh
        </Grid>
      </Grid>
    </Box>
  );
};

export default Index;
