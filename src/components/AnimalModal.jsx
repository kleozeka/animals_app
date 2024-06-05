import React from "react";
import "../styles/Modal.css";

const AnimalModal = ({ type, animal, onClose }) => (
  <div className="animal-popup">
    <div className="popup-content">
      <span className="close" onClick={onClose}>
        &times;
      </span>
      <img src={animal.image} alt={animal.name} />
      <h3>{animal.name}</h3>
      <p>
        <strong>Origin:</strong> {type === "birds" ? animal.place_of_found : animal.origin}
      </p>
      <p>
        <strong>Description:</strong> {animal.description}
      </p>
    </div>
  </div>
);

export default AnimalModal;