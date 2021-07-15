
import React from 'react';
import Household from '../components/Household';
import Calendar from './Calendar'


const HouseholdContainer = (props) => {

    const handleClick = ()=>{
        props.logOut()
    }

    return <article className="wrapper">
        <h2>{props.user.username}'s household</h2>
        <Household user={props.user} deletePet={props.deletePet}/>
        <button className="login" onClick={handleClick}>sign out</button>
        <Calendar user={props.user}/>
    </article>
    
};

export default HouseholdContainer;