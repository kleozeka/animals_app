// /src/components/MainPage.js
import React, { useEffect, useState } from "react";
import Gallery from "../components/Gallery";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Navbar from "../components/Navbar";
import animalData from "../statics/animals.json";

const MainPage = () => {
  const [animalType, setAnimalType] = useState("dogs");
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          console.log("Updating URL to:", `#${id}`);
          window.history.replaceState({}, "", `#${id}`);
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="home-page">
      <Navbar
        animals={animalData}
        animalType={animalType}
        setAnimalType={setAnimalType}
      />
      <section className="home" id="home">
        <Gallery type={animalType} />
      </section>
      <section className="about-us" id="about">
        <AboutUs />
      </section>
      <section className="contact" id="contact">
        <ContactUs />
      </section>
    </div>
  );
};

export default MainPage;