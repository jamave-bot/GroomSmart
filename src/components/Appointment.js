
  
import React from 'react';
import ServiceImg from '../images/soap.png';

const Appointment = () => (
  <div className="pet-container">
    <img src={ServiceImg} alt="drawing of service" id="service-img"></img>
    <div className="appointment-info">
      <h3>Service Type</h3>
      <p>Date &amp; Time</p>
      <p>Location</p>
    </div>
    <button className="delete">X</button>
  </div>
);

export default Appointment;