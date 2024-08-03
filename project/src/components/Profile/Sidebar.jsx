import React, { useState } from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [profilePic, setProfilePic] = useState('');

  const handlePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="sidebar">
      <div className="profile">
        <input
          type="file"
          id="profile-pic-input"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={handlePicChange}
        />
        <label htmlFor="profile-pic-input" className="profile-pic-label">
          {profilePic ? (
            <img src={profilePic} alt="Profile" className="profile-pic" />
          ) : (
            <div className="default-avatar">👤</div> 
          )}
        </label>
        <div className="profile-name">
          <h2>FARIS S</h2>
        </div>
      </div>
      <nav className="nav-links">
        <Link to="/profile" className="nav-link">Profile</Link>
        <Link to="/events" className="nav-link">Events</Link>
        <Link to="/logout" className="nav-link">Log Out</Link>
        <Link to="/eventdetails" className='nav-link'>Event Details</Link>
      </nav>
    </div>
  );
};

export default Sidebar;
