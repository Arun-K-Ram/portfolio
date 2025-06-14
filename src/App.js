import React, { useState } from 'react';
import CaseStudies from './pages/CaseStudies';
import Contact from './pages/Contact';
import Skills from './pages/Skills';
import Certifications from './pages/Certifications';
import Gallery from './pages/Gallery';
import Resources from './pages/Resources';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faHackerrank } from '@fortawesome/free-brands-svg-icons';

import './App.css';

function App() {
  const [page, setPage] = useState('home');

  return (
    <div className="container">
      <nav>
        <button onClick={() => setPage('home')} style={{ marginRight: '0.5rem' }}>
          Home
        </button>
        <button onClick={() => setPage('CaseStudies')} style={{ marginRight: '0.5rem' }}>
          Case Studies
        </button>
        <button onClick={() => setPage('Gallery')} style={{ marginRight: '0.5rem' }}>
          Gallery
        </button>
        <button onClick={() => setPage('Certifications')} style={{ marginRight: '0.5rem' }}>
          Certifications
        </button>
        <button onClick={() => setPage('Skills')} style={{ marginRight: '0.5rem' }}>
          Skills
        </button>
        <button onClick={() => setPage('Resources')} style={{ marginRight: '0.5rem' }}>
          Resources
        </button>
        <button onClick={() => setPage('contact')}>
          Contact
        </button>
      </nav>

      {page === 'home' && (
        <>
          <h1>Building Robust Software, One Line at a Time...</h1>
          <p>Showcasing my journey and passion for software development, AI and automation.</p>
          <img
            className="hero-image"
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
            alt="AI themed"
          />

          <div className="sections-container">
            <section className="section-card about-me">
              <h2>About Me</h2>
              <div className="about-me-content">
                <img
                  className="profile-image"
                  src="Arun_Profile_Image.jpeg"
                  alt="Profile"
                />
                <div className="profile-text">
                  <div className="profile-details">
                    <h3>Arun Ramachandran</h3>
                    <p>Certified Tableau Desktop Specialist | Software Automation Engineer | Selenium & Python Expert | Data Science, Robotics, Machine Learning & AI Enthusiast</p>
                  </div>
                  <p>
I’m Arun Ramachandran, a dedicated software developer and automation engineer with expertise in building efficient, scalable software solutions. With a strong foundation in test automation using Selenium and proficiency in data analysis tools like Tableau, I combine technical skills with problem-solving to deliver high-quality products.
I thrive in fast-paced environments where continuous learning and optimization are key. I’m passionate about writing clean, maintainable code and applying best practices in software design and testing. Whether it’s automating workflows or developing new features, I enjoy challenges that push me to grow.
My interests include software development, automation, data science, and project management. I’m committed to evolving my skills and contributing to impactful projects that improve processes and deliver real value.
                  </p>
                </div>
              </div>
            </section>

            <section className="section-card ai-interest">
              <h2>My Passion and Focus</h2>
              <p>
                AI fascinates me because of its potential to transform industries and improve lives.
                I am particularly interested in natural language processing and computer vision.
              </p>
            </section>

            <section className="section-card future-projects">
              <h2>Topics that interest me</h2>
              <ul>
                <li>Developing a chatbot using NLP techniques</li>
                <li>Creating a computer vision application for image recognition</li>
                <li>Exploring reinforcement learning algorithms</li>
                <li>Self driving - Autonomous Vehicles</li>
              </ul>
            </section>
          </div>
        </>
      )}

      {page === 'CaseStudies' && <CaseStudies />}
      {page === 'contact' && <Contact />}
      {page === 'Skills' && <Skills />}
      {page === 'Certifications' && <Certifications />}
      {page === 'Gallery' && <Gallery />}
      {page === 'Resources' && <Resources />}

      <footer className="footer">
        <p>© 2025 Arun Ramachandran. Built with React.</p>
        <div className="footer-icons">
          <a href="https://www.linkedin.com/in/arun-ramachandran-a2019a/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
          <a href="https://github.com/Arun-K-Ram" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
          <a href="https://leetcode.com/u/Arun_Ram/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faHackerrank} size="lg" />
          </a>
        </div>
      </footer>

    </div>
  );
}

export default App;
