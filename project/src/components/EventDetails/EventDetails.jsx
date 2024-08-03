// src/components/EventDetails.jsx

import React from 'react';
import './EventDetails.css'; // Create a CSS file for styling
import Navbar2 from './Navbar2'    


const EventDetails = () => {
  return (
    <div>
    <Navbar2/>
    <div className="event-background-container">
        <div className="event-details-container">
        <div className="event-status">
            <span className="status">Upcoming</span>
        </div>
        <h1 className="event-title">Acme Conference 2024</h1>
        <div className="event-info">
            <div className="event-date">
            <span role="img" aria-label="calendar">📅</span> June 15, 2024
            </div>
            <div className="event-time">
            <span role="img" aria-label="clock">🕘</span> 9:00 AM - 5:00 PM
            </div>
            <div className="event-location">
            <span role="img" aria-label="location">📍</span> 123 Main St, Anytown USA
            </div>
        </div>
        <h2 className="event-description-title">Event Description</h2>
        <p className="event-description">
            Join us for the Acme Conference 2024, a premier event for industry professionals. 
            This one-day conference will feature keynote speakers, panel discussions, and 
            networking opportunities. Learn about the latest trends and innovations in the field.
        </p>
        <h2 className="event-organizer-title">Organizer</h2>
        <div className="event-organizer">
            <div className="organizer-info">
            <div className="organizer-avatar">
                <span role="img" aria-label="avatar">👤</span>
            </div>
            <div className="organizer-details">
                <div className="organizer-name">John Doe</div>
                <div className="organizer-company">Acme Inc.</div>
            </div>
            </div>
        </div>
        <div className="register-button-container">
            <button className="register-button">Register Now</button>
        </div>
        </div>
        <video autoPlay loop muted id='video'>
        <source src='https://cdn.pixabay.com/video/2016/09/13/5194-183786499_large.mp4'/>
      </video>
    </div>
    </div>
  );
};

export default EventDetails;