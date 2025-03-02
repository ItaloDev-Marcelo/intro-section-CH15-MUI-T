import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const DropOpen = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={DropOpen ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={DropOpen ? 'true' : undefined}
        onClick={handleClick}
        endIcon={DropOpen ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/> }
      >
        Dashboard
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={DropOpen}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>  Profile</MenuItem>
        <MenuItem onClick={handleClose}>  My account</MenuItem>
        <MenuItem onClick={handleClose}>  Logout</MenuItem>
        <MenuItem onClick={handleClose}>  Logout</MenuItem>
      </Menu>
    </div>
  );
}
