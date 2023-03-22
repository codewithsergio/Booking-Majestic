import "./Contact.css";
import fancy_curl from "./assets/fancy_curl.webp";
import { useState } from "react";

function Contact() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [userEvent, setUserEvent] = useState("");

  const sendForm = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(e);
  };

  return (
    <div className="contact">
      <div className="line"></div>
      <img src={fancy_curl} />
      <h2>CONTACT US</h2>
      <form onSubmit={sendForm}>
        <input
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          type="text"
          placeholder="Name *"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Email *"
        />
        <input
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          type="text"
          placeholder="Phone Number *"
        />
        <textarea
          value={userEvent}
          onChange={(e) => setUserEvent(e.target.value)}
          placeholder="Event Information"
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;
