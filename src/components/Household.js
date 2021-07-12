
import React from 'react';
import Pet from '../components/Pet';

const Household = () => (
    <section className="wrapper">
        <Pet />
        <Pet />
        <Pet />
        <button className="add">add new pet</button>
    </section>
);

export default Household;