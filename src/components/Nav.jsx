import { Stack, AppBar, Toolbar, Button, IconButton, Drawer, Box, List, ListItem, ListItemText  } from '@mui/material';
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


import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function Nav() {

  const [open, setOpen] = useState(false);

  const [drop1, setDrop1]  = useState(false)

  const [drop2, setDrop2]  = useState(false)

  const [anchorEl, setAnchorEl] = useState(null);
  const openEl = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const [anchorEl1, setAnchorEl1] = useState(null);
  const openEl1 = Boolean(anchorEl1);

  const handleClick1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };
  const handleClose1 = () => {
    setAnchorEl1(null);
  };


  // leia isso vc deve arummar a 
  // parte da acessibilidade leia o arquivo
  //  MUI sobre o component Menu para entender


  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250, padding: '1em'}} position='relative'
     role="presentation">
      <Box position='absolute' right='0' paddingRight='1em'>
        <IconButton onClick={toggleDrawer(false)} >
          <CloseIcon fontSize='large' />
        </IconButton>
      </Box>
       
      <Stack sx={{marginTop: '5em'}} >
      <Box  sx={{margin: '.2em 0 '}}
       >
         <Button sx={{textTransform: 'capitalize', color: ' hsl(0, 0%, 41%)' }} id='dropdown1' aria-controls={drop1 ? 'dropdown1' : undefined} aria-haspopup='true' aria-expanded={drop1 ? 'true' : undefined} className='pop' onClick={() => setDrop1(!drop1)} endIcon={drop1 ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon/>}>Features  </Button>
         <List  style={{display: drop1? 'block' : 'none'}} id='dropdown-content' aria-labelledby='dropdown1' >
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

      <Box 
        
        >
         <Button sx={{textTransform: 'capitalize', color: ' hsl(0, 0%, 41%)' }}  id='dropdown2' aria-controls={drop2 ? 'dropdown2' : undefined} aria-haspopup='true' aria-expanded={drop2 ? 'true' : undefined}   className='pop' onClick={() => setDrop2(!drop2)}  endIcon={drop2 ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon/>}>Company  </Button>
         <List  id='dropdown-content2' aria-labelledby='dropdown2' style={{display: drop2? 'block' : 'none'}}>
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
      
      <List id='container-list' >
         <ListItem>
            <ListItemText>Carrers</ListItemText>
         </ListItem>
         <ListItem>
            <ListItemText>About</ListItemText>
         </ListItem>
      </List>


       <Stack  direction='column'>
       <Button variant='text' sx={{marginBottom: '1em ', color: ' hsl(0, 0%, 41%)'}} >Login</Button>
       <Button  variant='outlined' sx={{borderRadius: '10px', color: ' hsl(0, 0%, 41%)', borderColor: ' hsl(0, 0%, 41%)','&:hover':{
          background:'#000',
          color:'#fff'  
       }  }}>Register</Button>
       </Stack>
      </Stack>
  
  
    </Box>
  );



  return (
    <>
      <AppBar color='hsl(0, 0%, 98%)' sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between',  padding: {
        xs: '1em .5em ',
        lg: '1em 4em'
      }, boxShadow:'none' }} >
      
        <Toolbar sx={{ flexDirection: 'flex-start', justifyContent: 'center'}} >
        <IconButton>
          <img src={logo} alt='' />
        </IconButton>
        <Box className='nav-container' sx={{display: {xs: 'none', md: 'flex', marginLeft: '1.2em'}}} >
        
        <Box sx={{ position: 'relative', top: '0', marginRight: '.5em'}}>
      <Button
        variant='text'
        id="basic-button"
        aria-controls={openEl ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={openEl ? 'true' : undefined}
        onClick={handleClick}
        color='#000' 
        sx={{textTransform: 'capitalize'}}
        endIcon={openEl ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon/>}
      >
        Features
      </Button>
      <Menu sx={{position: 'absolute', top: '2em', left: '-4em'}}
        id="basic-menu"
        anchorEl={anchorEl}
        open={openEl}
        onClose={handleClose}
        color='#000' 
        
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem  onClick={handleClose}><img src={Todo} alt="" /> <p>Todo List</p></MenuItem>
        <MenuItem onClick={handleClose}><img src={Calender} alt="" /> <p>Calendar</p></MenuItem>
        <MenuItem onClick={handleClose}><img src={Reminders} alt="" /> <p>Reminders</p> </MenuItem>
        <MenuItem onClick={handleClose}><img src={Planning} alt="" /> <p>Planning</p></MenuItem>
      </Menu>
        </Box>

        <Box sx={{ position: 'relative', top: '0em ',  marginRight: '.5em'}}>
      <Button
      
        variant='text'
        id="basic-button"
        aria-controls={openEl1 ? 'basic-menu1' : undefined}
        aria-haspopup="true"
        aria-expanded={openEl1 ? 'true' : undefined}
        onClick={handleClick1}
        color='#000' 
        sx={{textTransform: 'capitalize'}}
        endIcon={openEl1 ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon/>}
      >
        Dashboard
      </Button>
      <Menu  sx={{position: 'absolute', top: '2em'}}
        id="basic-menu1"
        anchorEl={anchorEl1}
        open={openEl1}
        onClose={handleClose1}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
        </Box>
        <Stack display={{xs: 'none', md: 'flex'}}   direction='row'>
                   <Button variant='text'sx={{textTransform: 'capitalize',color: 'hsl(0, 0%, 41%)' }}  >Carrers</Button>     
                   <Button variant='text' sx={{textTransform: 'capitalize',color: 'hsl(0, 0%, 41%)' }}>About</Button>                                      
        </Stack>  
        </Box>
       
        </Toolbar>

        <IconButton sx={{display: {
          md: 'none'
        }}} onClick={toggleDrawer(true)}>
           <MenuIcon  fontSize='large' />
        </IconButton>

        <Stack display={{xs: 'none', md: 'flex'}} alignItems='center'  direction='row'>
       <Button variant='text' sx={{textTransform: 'capitalize',color: 'hsl(0, 0%, 41%)' }}    >Login</Button>
       <Button  variant='outlined'  sx={{borderRadius: '10px',textTransform: 'capitalize',color: 'hsl(0, 0%, 41%)',borderColor:'hsl(0, 0%, 41%)','&:hover':{
          background:'#000',
          color:"#fff" 
       }   }}>Register</Button>
       </Stack>
      </AppBar>

      <div>
        <Drawer open={open}  anchor='right'>
          {DrawerList}
        </Drawer>
      </div>
    </>

  )
}
