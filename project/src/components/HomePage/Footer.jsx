import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import './Footer.css';

export default function Footer() {
  return (
    <Box sx={{
      // marginTop: 'auto',
      marginBottom:0,
      padding: '12px',
      backgroundColor: '#f1f1f1',
      textAlign: 'center',
    }}>
      <Typography variant="body2" color="text.secondary">
        © 2024 EventXmedia. All rights reserved.
      </Typography>
    </Box>
  );
}
