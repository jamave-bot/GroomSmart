
import React from 'react';

const AppointmentForm = () => (
    <article className="wrapper" id="pet-form">
        <section className="wrapper" id="pet-section">
            <h2>schedule new appointment</h2>
            <form>
                <label for="pet-name">pet name: </label>
                <input id="pet-name" />
                <br />
                <label for="species">species: </label>
                <select id="species" name="species">
                    <option value="dog">dog</option>
                    <option value="cat">cat</option>
                    <option value="rabbit">rabbit</option>
                </select>
                <br />
                <label for="age">age: </label>
                <input type="number" id="age" name="age" />
                <br />
                <input type="submit" value="book appointment" className="button" />
            </form>
        </section>
    </article>
);

export default AppointmentForm;