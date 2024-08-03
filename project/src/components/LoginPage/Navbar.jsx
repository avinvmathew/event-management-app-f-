import React from 'react';
import { AppBar, Box, IconButton, Button, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Box 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        minHeight: '10vh', 
        border: '2px solid black', // Border properties
        padding: '16px', // Padding inside the box
        margin: '16px', // Margin outside the box
        borderRadius: '8px', // Optional: Rounded corners
      }}
    >
      <AppBar
        position="static"
        sx={{
          backgroundColor: 'white',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <b>WELCOME</b>
          </Typography>
          <Link to={'/'} style={{ textDecoration: 'none' }}>
            <Button color="inherit" variant="outlined" sx={{ ml: 2 }}><b>Login</b></Button>
          </Link>
          <Link to={'/Signup'} style={{ textDecoration: 'none' }}>
            <Button color="inherit" variant="outlined" sx={{ ml: 2 }}><b>Signup</b></Button>
          </Link>
        </Toolbar>
      </AppBar>
      {/* Add the rest of your page content here */}
      <Box sx={{ flexGrow: 1 }}>
        {/* Your main content goes here */}
      </Box>
    </Box>
  );
};

export default Navbar;