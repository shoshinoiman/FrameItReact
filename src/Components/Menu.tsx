import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Dialog, IconButton, Box, Menu, MenuItem, Switch, FormControlLabel } from '@mui/material';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { User } from "lucide-react";
import Profile from './Profile';
import logo from '../images/logo.png';
import { clearToken } from '../Stores/TokenSlice';  // import the clearToken action

const MenuComponent = () => {
  const token = useSelector((state: any) => state.token.token) || localStorage.getItem('token');
  const [openProfile, setOpenProfile] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [darkMode, setDarkMode] = useState(false);
  const dispatch = useDispatch();

  // Handle Menu Click
  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  // Close Menu
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Toggle Dark Mode
  const toggleDarkMode = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDarkMode(event.target.checked);
    localStorage.setItem('darkMode', JSON.stringify(event.target.checked));  // Save the dark mode state in localStorage
  };

  // Logout functionality
  const handleLogout = () => {
    dispatch(clearToken());
    localStorage.removeItem('token');
    handleMenuClose();  // Close the menu after logout
  };

  return (
    <>
      <AppBar position="fixed" sx={{ background: darkMode ? '#121212' : '#41B883', boxShadow: '0px 4px 10px rgba(0,0,0,0.3)' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 3 }}>
          
          {/* Logo */}
          <Button color="inherit" component={Link} to="/" sx={{ p: 0 }}>
            <img src={logo} alt="Logo" style={{ height: 60 }} />
          </Button>

          {/* Navigation */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {!token ? (
              <>
                <Button 
                  color="inherit" 
                  component={Link} 
                  to="/register" 
                  sx={{ fontWeight: 'bold', transition: '0.3s', '&:hover': { color: '#F647CD' } }}
                >
                  Register
                </Button>
                <Button 
                  color="inherit" 
                  component={Link} 
                  to="/login" 
                  sx={{ fontWeight: 'bold', transition: '0.3s', '&:hover': { color: '#F647CD' } }}
                >
                  Login
                </Button>
              </>
            ) : (
              <>
                <Button 
                  color="inherit" 
                  component={Link} 
                  to="/CollageList" 
                  sx={{ fontWeight: 'bold', transition: '0.3s', '&:hover': { color: '#F647CD' } }}
                >
                  My Collages
                </Button>
                <Button 
                  color="inherit" 
                  component={Link} 
                  to="/AlbumEditor" 
                  sx={{ fontWeight: 'bold', transition: '0.3s', '&:hover': { color: '#F647CD' } }}
                >
                  Album Editor
                </Button>
                
                {/* Profile Icon and Dropdown Menu */}
                <IconButton 
                  color="inherit" 
                  onClick={handleMenuClick} 
                  sx={{ transition: '0.3s', '&:hover': { color: '#F647CD' } }}
                >
                  <User size={28} />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                >
                  <MenuItem onClick={() => setOpenProfile(true)}>Settings</MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              </>
            )}

            {/* Dark Mode Toggle */}
            <FormControlLabel
              control={<Switch checked={darkMode} onChange={toggleDarkMode} />}
              label="Dark Mode"
              sx={{ color: darkMode ? 'white' : 'black' }}
            />
          </Box>
        </Toolbar>
      </AppBar>

      {/* Profile Dialog */}
      <Dialog open={openProfile} onClose={() => setOpenProfile(false)} fullWidth maxWidth="sm">
        <Profile closeProfile={() => setOpenProfile(false)} />
      </Dialog>
    </>
  );
};

export default MenuComponent;
