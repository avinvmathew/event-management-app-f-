import { AccountCircle } from '@mui/icons-material'
import { AppBar, Box, FormControlLabel, FormGroup, IconButton, Menu, MenuItem, Switch, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react';
import './HomeAppBar.css';

const HomeAppBar = () => {

    const [auth, setAuth] = useState(true);
    const [anchorEl, setAnchorEl] = useState(null);
    
    const handleChange = (event) => {
      setAuth(event.target.checked);
    };
    
    const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
      setAnchorEl(null);
    };  
    return (
        <div>
            <Box sx=
            {{ 
                flexGrow: 1 ,
                padding:'20px',
                margin:'5x'
            }}>
            <AppBar position="fixed" sx={{ boxShadow: 'none', backgroundColor:'black'}}>
            <Toolbar>
                <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                >
                <MenuIcon />
                </IconButton>
                {/* <FormGroup>
                <FormControlLabel
                    control={
                    <Switch
                        checked={auth}
                        onChange={handleChange}
                        aria-label="login switch"
                    />
                    }
                    label={auth ? 'Logout' : 'Login'}
                />
                </FormGroup> */}
                <Box sx=
                {{
                    flexGrow: 1,
                    display:'flex',
                    justifyContent:'center'

                }}>
                    <Typography id='HomeAppBarcentertext'>
                    EventHub-Home
                    </Typography>
                </Box>
                {auth && (
                <div>
                    <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                    >
                    <AccountCircle />
                    </IconButton>
                    <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    </Menu>
                </div>
                )}
            </Toolbar>
            {/* <video autoPlay loop muted id='video'>
                <source src='https://videos.pexels.com/video-files/5818973/5818973-uhd_2560_1440_24fps.mp4' type="video/mp4"/>
                Your browser does not support the video tag.
            </video> */}
            </AppBar>
        </Box>
        </div>
    )
}

export default HomeAppBar;