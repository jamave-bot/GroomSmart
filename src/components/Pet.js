  
import React from 'react';
import PetImg from '../images/dog.png';

const Pet = () => (
  <div className="pet-container">
    <img src={PetImg} alt="cartoon of pet" id="pet-img"></img>
    <div id="pet-text-wrapper">
      <h3>Pet name</h3>
      <p>age, species</p>
    </div>
    <button className="delete">X</button>
  </div>
);

export default Pet;