import React from 'react';
import './Portfolio.css';

function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'Fiction Novel Editing',
      category: 'Developmental Editing',
      description: 'Complete developmental and line editing for a 80,000-word fantasy novel',
      image: '📖'
    },
    {
      id: 2,
      title: 'Academic Papers',
      category: 'Academic Editing',
      description: 'Edited 25+ research papers for clarity, structure, and academic standards',
      image: '📚'
    },
    {
      id: 3,
      title: 'Business Content',
      category: 'Copy Editing',
      description: 'Polished website content and marketing materials for tech startups',
      image: '💼'
    },
    {
      id: 4,
      title: 'Magazine Articles',
      category: 'Content Editing',
      description: 'Edited feature articles for major online publications',
      image: '📰'
    },
  ];

  return (
    <div className="portfolio">
      <div className="container">
        <h1>My Portfolio</h1>
        <p className="intro-text">A showcase of projects I've edited and refined</p>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-icon">{project.image}</div>
              <h3>{project.title}</h3>
              <p className="category">{project.category}</p>
              <p className="description">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
