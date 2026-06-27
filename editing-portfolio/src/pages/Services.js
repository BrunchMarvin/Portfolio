import React from 'react';
import './Services.css';

function Services() {
  const services = [
    {
      title: 'Developmental Editing',
      price: '$0.05/word',
      description: 'High-level feedback on structure, plot, pacing, and character development',
      features: ['Story structure review', 'Pacing analysis', 'Character development', 'Plot feedback']
    },
    {
      title: 'Line Editing',
      price: '$0.04/word',
      description: 'Sentence-level editing for clarity, flow, and style',
      features: ['Sentence clarity', 'Word choice optimization', 'Tone consistency', 'Style refinement']
    },
    {
      title: 'Copy Editing',
      price: '$0.03/word',
      description: 'Grammar, punctuation, spelling, and formatting corrections',
      features: ['Grammar check', 'Punctuation correction', 'Consistency check', 'Formatting']
    },
    {
      title: 'Proofreading',
      price: '$0.02/word',
      description: 'Final polish before publication to catch any remaining errors',
      features: ['Typo detection', 'Final formatting', 'Error elimination', 'Quality assurance']
    },
  ];

  return (
    <div className="services">
      <div className="container">
        <h1>Services</h1>
        <p className="intro-text">Professional editing services tailored to your needs</p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <h3>{service.title}</h3>
              <p className="price">{service.price}</p>
              <p className="description">{service.description}</p>
              <ul className="features">
                {service.features.map((feature, i) => (
                  <li key={i}>✓ {feature}</li>
                ))}
              </ul>
              <button>Get Quote</button>
            </div>
          ))}
        </div>

        <section className="process">
          <h2>My Process</h2>
          <div className="process-steps">
            <div className="step">
              <span className="step-number">1</span>
              <h4>Inquiry</h4>
              <p>Contact me with your project details</p>
            </div>
            <div className="step">
              <span className="step-number">2</span>
              <h4>Quote</h4>
              <p>Receive a customized quote based on your needs</p>
            </div>
            <div className="step">
              <span className="step-number">3</span>
              <h4>Editing</h4>
              <p>I carefully edit your work with attention to detail</p>
            </div>
            <div className="step">
              <span className="step-number">4</span>
              <h4>Delivery</h4>
              <p>Receive your polished content with detailed feedback</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Services;
