import { Stack, AppBar, Toolbar, Button, IconButton, Drawer, Box,   } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import MenuIcon from '@mui/icons-material/Menu'
import logo from '../assets/images/logo.svg'
import { useState } from 'react';
import CloseIcon  from '@mui/icons-material/Close';  
import BasicMenu from './Drop';

export default function Nav() {

  const [open, setOpen] = useState(false);
   const [anchorEl, setAnchorEl] = useState(null);
    const DropOpen = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  


  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 160, padding: '1em' }} position='relative'
     role="presentation">
      <Box position='absolute' right='0' paddingRight='1em'>
        <IconButton onClick={toggleDrawer(false)} >
          <CloseIcon fontSize='large' />
        </IconButton>
      </Box>
       

  
  
    </Box>
  );



  return (
    <>
      <AppBar color='white' sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '1em ' }} >
        <IconButton>
          <img src={logo} alt='' />
        </IconButton>

        <IconButton onClick={toggleDrawer(true)}>
          <MenuIcon />
        </IconButton>
      </AppBar>

      <div>
        <Drawer open={open}  anchor='right'>
          {DrawerList}
        </Drawer>
      </div>
    </>

  )
}
