import React from 'react';
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar2 = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" sx={{ width: '100%', minHeight: 50, boxShadow: 'none', backgroundColor: 'transparent' }}>
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              {/* Menu Icon can be added here */}
            </IconButton>
            <Typography variant="h6" component="div" sx={{ textAlign: 'center', flexGrow: 1 }} className="animated-text">
              Register for this event now!
            </Typography>
            {/* <Link to={'/'}><Button color="inherit">Home</Button></Link>
            <Link to={'/add'}><Button color="inherit">Add</Button></Link> */}
            <Button color="inherit">Home</Button>
            <Button color="inherit">Add</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar2;
