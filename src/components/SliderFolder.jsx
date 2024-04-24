import React from 'react';
import { Box, Typography, List, ListItem } from '@mui/material';

const SliderFolder = () => {
  return (
      <List 
        sx={{
          display: 'flex',
          overflowX: 'scroll', 
          whiteSpace: 'nowrap', '&::-webkit-scrollbar': { display: 'none' }, 
          scrollbarWidth: 'none',
          borderBottom: '2px solid white',
          color: "white"
          }}>
        <ListItem>
          <Typography>All</Typography>
        </ListItem>
        <ListItem>
          <Typography>Shaxsiy</Typography>
        </ListItem>
        <ListItem>
          <Typography>Yangi</Typography>
        </ListItem>
        <ListItem>
          <Typography>Gruppa</Typography>
        </ListItem>
        <ListItem>
          <Typography>Kanal</Typography>
        </ListItem>
        <ListItem>
          <Typography>Bot</Typography>
        </ListItem>
        {/* Boshqa elementlar */}
      </List>
  );
};

export default SliderFolder;
