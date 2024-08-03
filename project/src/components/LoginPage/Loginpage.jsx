import React, { useState } from 'react';
import './Loginpage.css';
import { Box, TextField, Button, Typography, InputAdornment, Checkbox, FormControlLabel, Link as MuiLink } from '@mui/material';
import { Email as EmailIcon, Lock as LockIcon } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Loginpage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    // Validate email and password
    if (email.length < 3) {
      setError('Email must be at least 3 characters long');
      setLoading(false);
      return;
    }
    if (password.length < 8) {
      setError('Password must be at least 8 characters long');
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post("http://localhost:4002/logins", { email, password });
      if (response.data.message === "success") {
        alert("Login Successful");
        navigate('/');
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message);
      } else {
        setError("An error occurred. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 2, width: '100%' },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Typography variant="h4" component="h2" className="login-header">
          Login
        </Typography>
        <TextField
          id="email"
          label="Email"
          variant="filled"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          sx={{ mb: 2 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          variant="filled"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          sx={{ mb: 2 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon />
              </InputAdornment>
            ),
          }}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              sx={{ color: '#007bff', '&.Mui-checked': { color: '#007bff' } }}
            />
          }
          label="Remember Me"
          sx={{ mb: 2 }}
        />
        {error && <div className="error-message">{error}</div>}
        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: '#007bff',
            '&:hover': { backgroundColor: '#0056b3' },
            borderRadius: '8px',
            padding: '12px',
            fontSize: '16px',
            width: '100%',
          }}
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Login'}
        </Button>
        <Typography variant="body2" className="forgot-password">
          <MuiLink href="#" underline="hover" className="forgot-password-link">
            Forgot Password?
          </MuiLink>
        </Typography>
        <Typography variant="body2" className="signup-link">
          Don't have an account? <Link to="/Signuppage" className="signup-link-text">Sign Up</Link>
        </Typography>
      </Box>
    </div>
  );
};

export default Loginpage;
