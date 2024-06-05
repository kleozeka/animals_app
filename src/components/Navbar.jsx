import React, { useState } from "react";
import "../styles/Navbar.css";

export default function Navbar({ animals, animalType, setAnimalType }) {
  const [tab, setTab] = useState("dog");

  return (
    <header>
      <nav className="navbar">
        <ul className="nav-links">
          {animals &&
            animals.length > 0 &&
            animals.map((animal) => {
              return (
                <li
                  className={`nav-item  ${
                    animalType === animal.type ? "active" : ""
                  }`}
                  onClick={() => setAnimalType(animal.type)}
                >
                  <a href="#home">{animal.label}</a>
                </li>
              );
            })}

          <li
            key="about"
            className={`nav-item ${tab === "about" ? "active" : ""}`}
            onClick={() => setTab("about")}
          >
            <a href="#about">About</a>
          </li>
          <li
            key="contact"
            className={`nav-item ${tab === "contact" ? "active" : ""}`}
            onClick={() => setTab("contact")}
          >
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}