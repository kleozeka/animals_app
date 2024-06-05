// /src/components/Gallery.js
import React, { useState, useEffect } from "react";
import { fetchAnimals } from "../helpers/api";
import AnimalCard from "./AnimalCard";
import AnimalPopup from "./AnimalModal";
import Search from "./Search";

const Gallery = ({ type }) => {
  const [animals, setAnimals] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async (type, searchTerm) => {
    try {
      const data = await fetchAnimals(type, searchTerm);
      setAnimals(data);
      setError(null);
    } catch (err) {
      setError("Failed to fetch animals data.");
    }
  };

  useEffect(() => {
    fetchData(type, "");
  }, [type]);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    fetchData(type, term);
  };

  return (
    <div className="gallery">
      <Search type={type} searchTerm={searchTerm} handleSearch={handleSearch} />

      <div className="animal-cards">
        {animals.map((animal) => (
          <AnimalCard
            key={animal.id}
            animal={animal}
            onClick={() => setSelectedAnimal(animal)}
          />
        ))}
      </div>
      {searchTerm && animals.length === 0 && <div>No results found</div>}
      {selectedAnimal && (
        <AnimalPopup
          type={type}
          animal={selectedAnimal}
          onClose={() => setSelectedAnimal(null)}
        />
      )}
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default Gallery