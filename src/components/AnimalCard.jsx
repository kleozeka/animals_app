import React from "react";

const AnimalCard = ({ animal, onClick }) => (
  <div className="animal-card" onClick={onClick}>
    <img src={animal.image} alt={animal.name} />
    <h3>{animal.name}</h3>
    <p>{animal.origin ? animal.origin : animal.place_of_found}</p>
  </div>
);

export default AnimalCard;