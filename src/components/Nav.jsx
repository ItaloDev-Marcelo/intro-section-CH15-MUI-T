import { Stack, AppBar, Toolbar, Button, IconButton, Drawer, Box, List, ListItem, ListItemText, ListItemIcon,   } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu'
import logo from '../assets/images/logo.svg'
import { useState } from 'react';
import CloseIcon  from '@mui/icons-material/Close';  
import Calender from '../assets/images/icon-calendar.svg';
import Todo from '../assets/images/icon-todo.svg';
import Planning from '../assets/images/icon-planning.svg';
import Reminders from '../assets/images/icon-reminders.svg';


export default function Nav() {

  const [open, setOpen] = useState(false);

  const [drop1, setDrop1]  = useState(false)

  const [drop2, setDrop2]  = useState(false)


  


  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250, padding: '1em' }} position='relative'
     role="presentation">
      <Box position='absolute' right='0' paddingRight='1em'>
        <IconButton onClick={toggleDrawer(false)} >
          <CloseIcon fontSize='large' />
        </IconButton>
      </Box>
       
      <Stack sx={{marginTop: '5em'}} >
      <Box>
         <Button className='pop' onClick={() => setDrop1(!drop1)} endIcon={drop1 ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon/>}>Features  </Button>
         <List style={{display: drop1? 'block' : 'none'}} >
            <ListItem>
               <img src={Todo} alt="" />
                  <ListItemText>Todo List</ListItemText>
            </ListItem>
            <ListItem>
            <img src={Calender} alt="" />
                  <ListItemText>Calendar</ListItemText>
            </ListItem>
            <ListItem>
            <img src={Reminders} alt="" />
                  <ListItemText>Reminders</ListItemText>
            </ListItem>
            <ListItem>
            <img src={Planning} alt="" />
                  <ListItemText>Planning</ListItemText>
            </ListItem>
         </List>
      </Box>

      <Box>
         <Button className='pop' onClick={() => setDrop2(!drop2)}  endIcon={drop1 ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon/>}>Company  </Button>
         <List style={{display: drop2? 'block' : 'none'}}>
            <ListItem>
                  <ListItemText>History</ListItemText>
            </ListItem>
            <ListItem>
                  <ListItemText>Our Team</ListItemText>
            </ListItem>
            <ListItem>
                  <ListItemText>Blog</ListItemText>
            </ListItem>
           
         </List>
      </Box>
      
      <List >
         <ListItem>
            <ListItemText>Carrers</ListItemText>
         </ListItem>
         <ListItem>
            <ListItemText>About</ListItemText>
         </ListItem>
      </List>

       <Stack  direction='column'>
       <Button variant='text' sx={{marginBottom: '1em '}} >Login</Button>
       <Button  variant='outlined' sx={{borderRadius: '25px'}}>Register</Button>
       </Stack>
      </Stack>
  
  
    </Box>
  );



  return (
    <>
      <AppBar color='white' sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '1em ' }} >
        <IconButton >
          <img src={logo} alt='' />
        </IconButton>

        <IconButton sx={{display: {
          md: 'none'
        }}} onClick={toggleDrawer(true)}>
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
