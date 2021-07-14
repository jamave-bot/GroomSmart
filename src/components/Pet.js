  
import React from 'react';
import PetImg from '../images/dog.png';

const Pet = (props) => {

  const showPetDiv = () =>{
    if (props.pet){
      return <div id="pet-text-wrapper">
      <h3>{props.pet.name}</h3>
      <span>{props.pet.age}, {props.pet.species}</span>
    </div>
    }else{
      return <>
        <h3>nothin here boss</h3>
      </>
    }
  } 

  const handleClick=()=>{
    fetch(`http://127.0.0.1:3000/pets/${props.pet.id}`, {
            method: "DELETE",
            headers: {
              "authorization": localStorage.token
            }
        })
        .then(res => res.json())
        .then(deletedPet =>{
            console.log("This is the Pet you just destroyed: ", deletedPet)
            props.deletePet(deletedPet)
        })
  }

  return(<div className="pet-container">
    <img src={PetImg} alt="cartoon of pet" id="pet-img"></img>
    {showPetDiv()}
    <button className="delete" onClick={handleClick}>X</button>
  </div>)
};

export default Pet;