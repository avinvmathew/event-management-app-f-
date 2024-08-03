import { useState } from 'react';
// import Login from './components/LoginPage/Login';
// import Navbar from './components/LoginPage/Navbar';
// import Signup from './components/LoginPage/Signup';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import HomeBar from './components/HomePage/HomeBar';
import axios from 'axios';
import EventDetails from './components/EventDetails/EventDetails';
import Signuppage from './components/LoginPage/Signuppage';
import Loginpage from './components/LoginPage/Loginpage';



function App() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/home'); // navigate to /home route
  };

  return (
    <>
    {/* <HomeBar /> */}
      {/* <Navbar /> */}
      <Routes>
        {/* <Route path="/Loginpage" element={<Loginpage onLogin={handleLogin} />} /> */}
        <Route path="/Loginpage" element={<Loginpage />} />
        <Route path="/Signuppage" element={<Signuppage />} />
        <Route path="/" element={<HomeBar />} />     
        <Route path="/eventdetails" element={<EventDetails />} /> 
      </Routes>
    </>
  );
}

export default App;