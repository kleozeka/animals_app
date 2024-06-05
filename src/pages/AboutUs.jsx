import React from "react";
import "../styles/AboutUs.css";

function AboutUs() {
  return (
    <div>
      <div className="about-section">
        <h1>About Us</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <p>
         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum assumenda suscipit quo accusantium veniam accusamus rem laborum blanditiis culpa aspernatur! Eaque odit adipisci ab nisi accusamus magni deleniti sit commodi!
        </p>
      </div>

      <h2>Our Team</h2>
      <div className="row">
        <div className="column">
          <div className="card">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1724/1724930.png"
              alt="Jane"
            />
            <div className="container">
              <h2>Jane Doe</h2>
              <p className="title">CEO & Founder</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>jane@example.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <img
              src="https://cdn-icons-png.flaticon.com/512/6833/6833591.png"
              alt="Mike"
            />
            <div className="container">
              <h2>Mike Ross</h2>
              <p className="title">Art Director</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>mike@example.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1724/1724930.png"
              alt="Jane"
            />
            <div className="container">
              <h2>Jane Doe</h2>
              <p className="title">CEO & Founder</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>jane@example.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <img
              src="https://cdn-icons-png.flaticon.com/512/6833/6833591.png"
              alt="John"
            />
            <div className="container">
              <h2>John Doe</h2>
              <p className="title">Designer</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>john@example.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1724/1724930.png"
              alt="Jane"
            />
            <div className="container">
              <h2>Jane Doe</h2>
              <p className="title">CEO & Founder</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>jane@example.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs