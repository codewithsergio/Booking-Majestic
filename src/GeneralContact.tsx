import "./GeneralContact.css";
import fancy_curl from "./assets/fancy_curl.webp";
import { useState } from "react";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import HorizontalLine from "./reusable/HorizontalLine";

function GeneralContact() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [hours, setHours] = useState("");
  const [address, setAddress] = useState("");
  const [service, setService] = useState("");
  const [userEvent, setUserEvent] = useState("");
  const form = useRef<HTMLFormElement>(null);

  const clearForm = () => {
    setUserName("");
    setEmail("");
    setPhoneNumber("");
    setUserEvent("");
    setDate("");
    setHours("");
    setAddress("");
    setService("");
    setUserEvent("");
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current == null) {
      return;
    }
    if (
      userName.length < 3 ||
      !String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      alert("Please make sure to use a real email account.");
      return;
    }
    if (phoneNumber.length < 10) {
      alert("Make sure you typed your phone number correctly.");
      return;
    }

    emailjs
      .sendForm(
        "contact_service",
        "contact_form_general",
        form.current,
        "upAkQ3kPdX-FitIgH"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    clearForm();
  };

  return (
    <div className="generalContact">
      <div className="contactInfo">
        <div>
          <span
            className="iconify iconifySkills"
            data-icon="lucide:phone-call"
          ></span>
          <h2>CALL US</h2>
          <p>323-392-8077</p>
        </div>
        <div>
          <span
            className="iconify iconifySkills"
            data-icon="ic:baseline-phone-iphone"
          ></span>
          <h2>TEXT US</h2>
          <p>323-392-8077</p>
        </div>
      </div>
      <HorizontalLine />
      <h2>CONTACT US FOR A FREE QUOTE</h2>
      <img src={fancy_curl} />
      <form ref={form} onSubmit={sendEmail}>
        <input
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          type="text"
          name="user_name"
          placeholder="Name *"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          name="user_email"
          placeholder="Email *"
        />
        <input
          value={date}
          onChange={(e) => setDate(e.target.value)}
          type="text"
          name="date_of_service"
          placeholder="Date of Service"
        />
        <input
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          type="text"
          name="phone_number"
          placeholder="Phone Number"
        />
        <input
          value={hours}
          onChange={(e) => setHours(e.target.value)}
          type="text"
          name="hours_needed"
          placeholder="Hours Needed"
        />
        <input
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          type="text"
          name="address"
          placeholder="Address of Event"
        />
        <input
          value={service}
          onChange={(e) => setService(e.target.value)}
          type="text"
          name="service"
          placeholder="Service Desired"
        />
        <textarea
          value={userEvent}
          onChange={(e) => setUserEvent(e.target.value)}
          name="message"
          placeholder="Event Information"
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default GeneralContact;
