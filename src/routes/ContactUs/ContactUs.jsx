// src/routes/ContactUs/ContactUs.jsx
import React, { useState } from 'react';
import './ContactUs.scss';

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send to API or email service)
    setSubmitted(true);
  };

  return (
    <div className="contact-us">
      <h1>Contact Us</h1>
      {submitted ? (
        <p>Thank you for your message. We will get back to you soon!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Message:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit">Send Message</button>
        </form>
      )}
    </div>
  );
};

export default ContactUs;
