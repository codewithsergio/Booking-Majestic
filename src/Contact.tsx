import "./Contact.css";
import fancy_curl from "./assets/fancy_curl.webp";
import { useState } from "react";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import HorizontalLine from "./reusable/HorizontalLine";
import { FormEvent } from "react";
import { NavLink, Navigate } from "react-router-dom";

interface AppProps {
  service: string;
}

function Contact({ service }: AppProps) {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [userEvent, setUserEvent] = useState("");
  const [formFinished, setFormFinished] = useState("False");

  const form = useRef<HTMLFormElement>(null);

  const clearForm = () => {
    setUserName("");
    setEmail("");
    setPhoneNumber("");
    setUserEvent("");
  };

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    if (form.current == null) {
      return;
    }
    if (userName.length < 3) {
      alert("Please make sure to include your full name.");
      return;
    }
    if (
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
        "contact_form",
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
    setFormFinished("True");
  };

  return (
    <div className="contact">
      <HorizontalLine />
      <img src={fancy_curl} />
      <h2>CONTACT US</h2>
      <form ref={form} onSubmit={sendEmail}>
        <input name="service" value={service} type="hidden" />
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
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          type="text"
          name="phone_number"
          placeholder="Phone Number *"
        />
        <textarea
          value={userEvent}
          onChange={(e) => setUserEvent(e.target.value)}
          name="message"
          placeholder="Event Information"
        />
        <NavLink id="submit_link" to="/thankyou" onClick={sendEmail}>
          SUBMIT
        </NavLink>
      </form>
      {formFinished === "True" && <Navigate to="/thankyou" />}
    </div>
  );
}

export default Contact;
