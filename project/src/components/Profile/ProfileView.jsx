import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCalendar, faVenusMars, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import './ProfileView.css';
import './Sidebar.css';
import Sidebar from './Sidebar';


const ProfileView = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [details, setDetails] = useState({
    name: "FARIS S",
    dob: "29/01/2004",
    gender: "Male",
    email: "abcd@gmail.com",
    phone: "+1234567890"
  });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    // Save logic here
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails(prevDetails => ({
      ...prevDetails,
      [name]: value
    }));
  };

  return (
    <div>
    <Sidebar/>
    <div className="profile-view-container">
      <div className="profile-view">
        <h1>Profile</h1>
        <br /><br />
        <div className="profile-details">
          <div className="profile-detail">
            <FontAwesomeIcon icon={faUser} className="icon" />
            <div className="field">
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={details.name}
                readOnly={!isEditing}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="profile-detail">
            <FontAwesomeIcon icon={faCalendar} className="icon" />
            <div className="field">
              <label>Date of Birth:</label>
              <input
                type="text"
                name="dob"
                value={details.dob}
                readOnly={!isEditing}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="profile-detail">
            <FontAwesomeIcon icon={faVenusMars} className="icon" />
            <div className="field">
              <label>Gender:</label>
              <select
                name="gender"
                value={details.gender}
                onChange={handleChange}
                disabled={!isEditing}
                className="dropdown"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
          </div>
          <div className="profile-detail">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            <div className="field">
              <label>Email:</label>
              <input
                type="text"
                name="email"
                value={details.email}
                readOnly={!isEditing}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="profile-detail">
            <FontAwesomeIcon icon={faPhone} className="icon" />
            <div className="field">
              <label>Phone Number:</label>
              <input
                type="text"
                name="phone"
                value={details.phone}
                readOnly={!isEditing}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <button className="edit-btn" onClick={isEditing ? handleSaveClick : handleEditClick}>
          {isEditing ? 'Save' : 'Edit Profile'}
        </button>
      </div>
    </div>
    </div>
  );
};

export default ProfileView;
