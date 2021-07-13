
import React from 'react';
import Household from '../components/Household';

const HouseholdContainer = () => (
    <article className="wrapper">
        <h2>username's household</h2>
        <Household />
        <button className="login">sign out</button>
    </article>
);

export default HouseholdContainer;