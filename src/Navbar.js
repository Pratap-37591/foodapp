import {AppBar, Toolbar,  Typography, Stack , Button, Collapse} from '@mui/material';
import { useState } from 'react';
// import {NavLink} from 'react-router-dom'; 


export const Navbar = () => {
const [open, setOpen] = useState(false);

const handleToggle = () =>{
  setOpen(!open)
}
    return (
     <AppBar position='sticky'>
       <Toolbar   style={{background: ''}}>
         
          <img src="../image/basava.jpg" alt="basavanna" style={{marginRight: 25}} width={49} />
        
          <Typography variant='h6' component='div' flexGrow={1} color={'gold'}>
          ಬಸವೇಶ್ವರ ಖಾನಾವಳಿ
          </Typography>
          
          <Button variant='contained' onClick={handleToggle}>
        {open ? 'Close' : 'Open'}
          </Button>
     <Collapse in={open}>
      <div>
      <Stack direction='row' spacing={2}>
           <Button   color='inherit'>Home</Button>
           <Button  color='inherit'>Contact</Button>
           <Button   sx={{color: 'white', textTransform: 'none'}}>Login/Registration</Button>
          </Stack>
      </div>
     </Collapse>
      
         
       </Toolbar>
     </AppBar>
    )
}