import React, { useState } from "react";
import { useForm, ValidationError } from '@formspree/react';
import "./Contact.css";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [state, handleSubmit] = useForm("mzzdjgpp");

  if (state.succeeded) {
    return <p>Thanks for your message!</p>;
  }

  return (
    <section id="contact">
      <div className="contact-container">
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <ValidationError prefix="Subject" field="subject" errors={state.errors} />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
            ></textarea>
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>

          <button type="submit" className="submit-btn" disabled={state.submitting}>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
