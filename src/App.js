import React from 'react';
import { AvatarGroup, Badge, Button, ButtonGroup, Divider } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import { Box, IconButton, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AccountCircle from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';

function App() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <div>
        {/* 1 Example */}
        <AppBar component="nav">
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              MUI
            </Typography>
            <Box>
              <Button key="LISTING" sx={{ color: '#fff' }}>
                LISTING
              </Button>
              <Button key="MENTORS" sx={{ color: '#fff' }}>
                MENTORS
              </Button>
              <Button key="MY ACCOUNT" sx={{ color: '#fff' }}>
                MY ACCOUNT
              </Button>
              <Button key="LOG OUT" sx={{ color: '#fff' }}>
                LOG OUT
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
        <AppBar position="static" sx={{ backgroundColor: "#00bcd4" , marginTop: "200px" }}>
          <Toolbar>
            {/* Left */}
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Navbar
            </Typography>

            {/* Right */}
            <Button color="inherit" startIcon={<MailIcon />}>
              Contact
            </Button>

            <Button color="inherit" startIcon={<SettingsIcon />}>
              Settings
            </Button>

            <IconButton color="inherit" onClick={handleMenuOpen}>
              <AccountCircle />
              <Typography sx={{ ml: 1 }}>Profile</Typography>
            </IconButton>

            {/* Dropdown */}
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <MenuItem onClick={handleMenuClose}>My account</MenuItem>
              <MenuItem onClick={handleMenuClose}>Log out</MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
}

export default App;
