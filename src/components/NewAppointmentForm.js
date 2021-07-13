
import React from 'react';

const AppointmentForm = () => (
    <article className="wrapper" id="appointment-form">
        <section className="wrapper" id="appointment-section">
            <h2>schedule new appointment</h2>
            <form>
                <label for="service-type">service: </label>
                <select id="service-type">
                    <option value="Shampoo &amp; Condition">Shampoo &amp; Condition</option>
                    <option value="Haircut">Haircut</option>
                    <option value="Nail Trim">Nail Trim</option>
                </select>
                <br />
                <label for="date">date: </label>
                <input type="date" id="date" name="date" />
                <br />
                <label for="time">select a time: </label>
                <select id="time" name="time">
                    <option value="9:00 AM">9:00 AM</option>
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="12:00 PM">12:00 PM</option>               
                    <option value="1:00 PM">1:00 PM</option>
                </select>
                <br />
                <label for="location">location: </label>
                <select id="location">
                    <option value="Chicago">Chicago</option>
                    <option value="New York">New York</option>
                    <option value="Seattle">Seattle</option>
                </select>
                <br />
                <input type="submit" value="book appointment" className="button" />
            </form>
        </section>
    </article>
);

export default AppointmentForm;