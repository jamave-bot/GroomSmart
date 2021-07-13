
import React from 'react';
import AppointmentSchedule from './AppointmentSchedule';

const AppointmentScheduleContainer = () => (
    <article className="wrapper">
        <h2>pet name's appointments</h2>
        <AppointmentSchedule />
        <button className="back">back to pets</button>
    </article>
);

export default AppointmentScheduleContainer;