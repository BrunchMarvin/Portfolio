import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend or service
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="contact">
      <div className="container">
        <h1>Get In Touch</h1>
        <p className="intro-text">Have a project in mind? I'd love to hear from you!</p>

        <div className="contact-content">
          <div className="contact-form-wrapper">
            <form onSubmit={handleSubmit} className="contact-form">
              {submitted && <div className="success-message">Thank you! I'll be in touch soon.</div>}
              
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What is this about?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project..."
                  rows="6"
                />
              </div>

              <button type="submit" className="submit-button">Send Message</button>
            </form>
          </div>

          <div className="contact-info">
            <div className="info-box">
              <h3>📧 Email</h3>
              <p><a href="mailto:hello@example.com">hello@example.com</a></p>
            </div>

            <div className="info-box">
              <h3>💬 Social Media</h3>
              <div className="social-links">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>

            <div className="info-box">
              <h3>📋 Availability</h3>
              <p>I typically respond within 24 hours and can accommodate rush projects.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
