import React from 'react';
import Appointment from '../components/Appointment';

const AppointmentSchedule = () => (
    <section className="wrapper">
        <Appointment />
        <Appointment />
        <Appointment />
        <button className="add">schedule appointment</button>
    </section>
);

export default AppointmentSchedule;