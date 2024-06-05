import { useState } from "react";
import "../styles/ContactUs.css";
import Button from "../components/Button";

export default function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const validate = (e) => {
    debugger;
    e.preventDefault();

    if (name.length < 3) {
      setError("Your name should be at least 3 characters long.");
      return false;
    }

    if (!(email.includes(".") && email.includes("@"))) {
      setError("Please enter a valid email address.");
      return false;
    }

    if (!emailIsValid(email)) {
      setError("Please enter a valid email address.");
      return false;
    }

    if (message.length < 15) {
      setError("Please write a longer message.");
      return false;
    }

    setError("");
    setSuccessMsg("Thank you! I will get back to you as soon as possible.");

    setTimeout(() => {
      setSuccessMsg("");
      resetForm();
    }, 6000);

    return true;
  };

  const emailIsValid = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <>
      <div className="contact-container">
        <div className="left-col"></div>
        <div className="right-col">
          <h1>Contact us</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam repellat ipsam asperiores id deserunt neque nihil vitae eum tempora, temporibus, accusantium blanditiis totam dolorum distinctio velit eligendi inventore illum laboriosam.
          </p>

          <form id="contact-form" method="post">
            <label htmlFor="name">Full name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="message">Message</label>
            <textarea
              rows="6"
              placeholder="Your Message"
              id="message"
              name="message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <Button
              type="submit"
              name="submit"
              onclick={(e) => validate(e)}
              label="Send"
            />
          </form>
          {error && <p>{error}</p>}
          {successMsg && <p>{successMsg}</p>}
        </div>
      </div>
    </>
  );
}