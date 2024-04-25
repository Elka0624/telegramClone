import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { FiUserPlus } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { Avatar, TextField, Typography } from '@mui/material';

const style = {
  position: 'absolute',
  top: '30%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function NewContactModal({ users, setUsers }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('');
  // time save
  const getCurrentTime = () => {
    const currentDate = new Date();
  
    // Soatni olish
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
  
    // Soatni qaytarish
    return `${hours}:${minutes}`;
  };

  const handleAddContact = () => {
    const newUser = {
      userId: Math.floor(Math.random() * 1000),
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      messages: [],
      date: getCurrentTime(),
    }
    setUsers([...users, newUser])
    localStorage.setItem('users', JSON.stringify([...users, newUser]))
    handleClose();
  }


  return (
    <div>
      <Button sx={{background: '#3390ec', borderRadius: '100px', position: 'absolute', bottom: '20px', left: '330px', '&:hover': {backgroundColor: '#3390ecb3',},}} onClick={handleOpen}><FiUserPlus size={30} color={'white'} /></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{
            display: "flex",
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <FiX onClick={handleClose} size={30} color={'black'}/>
            <Typography variant='h4' sx={{color: 'black'}}>Add Contact</Typography>
            <Button
              onClick={handleAddContact}
            >
              Add
            </Button>
          </Box>
          <Box sx={{
            display: "flex",
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: '10px'
          }}>
            <Box>
              <Avatar sx={{
                width: "100px",
                height: '100px'
              }}/>
            </Box>
            <Box sx={{
              marginLeft: '40px',
              display: 'flex',
              flexDirection: 'column',
              rowGap: '10px'
            }}>
            <TextField
              label="First Name"
              type="text"
              variant="outlined"
              size='small'
              onChange={(e) => setFirstName(e.target.value)}
            />
            <TextField
              label="Last Name"
              type="text"
              variant="outlined"
              size='small'
              onChange={(e) => setLastName(e.target.value)}
            />
            </Box>
          </Box>
          <Box sx={{
            marginTop: '20px'
          }}>
          <TextField
            fullWidth
            label="Phone Number"
            type="text"
            variant="outlined"
            size='small'
            onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </Box>
        </Box>
      </Modal>
    </div>
  );
}



// NewContactModal
