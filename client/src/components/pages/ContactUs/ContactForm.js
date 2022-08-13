import React, { useState } from "react";
import "./styles/contactForm.scss";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="contact-form-container">
      <form>
        <h2>
          <FormattedMessage id="contact-form-title" />
        </h2>

        <div className="input-content">
          <p>
            <FormattedMessage id="contact-form-name" />
          </p>
          <div className="inner-input-content">
            <input
              type="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full Name"
            />
          </div>
        </div>

        <div className="input-content">
          <p>Email</p>
          <div className="inner-input-content">
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Name"
            />
          </div>
        </div>

        <div className="input-content">
          <p>
            <FormattedMessage id="contact-form-subject" />
          </p>
          <div className="inner-input-content">
            <input
              type="subject"
              name="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="The message subject"
            />
          </div>
        </div>

        <div className="input-content">
          <p>
            <FormattedMessage id="contact-form-message" />
          </p>
          <div className="inner-input-content">
            <textarea
              type="message"
              name="message"
              rows="7"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your message"
            ></textarea>
          </div>
        </div>

        <Link to="/" className="hover-button">
          <FormattedMessage id="submit" />
        </Link>
      </form>
    </div>
  );
};

export default ContactForm;
