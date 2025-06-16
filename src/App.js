import React, { useState } from 'react';
import CaseStudies from './pages/CaseStudies';
import Contact from './pages/Contact';
import Skills from './pages/Skills';
import Certifications from './pages/Certifications';
import Gallery from './pages/Gallery';
import Resources from './pages/Resources';
import AboutMe from './pages/AboutMe';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faHackerrank } from '@fortawesome/free-brands-svg-icons';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import './App.css';

function App() {
  const [page, setPage] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  const handlePageChange = (newPage) => {
    setPage(newPage);
    setMenuOpen(false);
  };

  return (
    <div className="container">
      <nav className="navbar">
        {/* Hamburger button - absolutely positioned on mobile */}
        <button
          className={`menu-toggle ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
        >
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} size="lg" />
        </button>

        {/* Nav buttons */}
        <div
          id="primary-navigation"
          className={`nav-links ${menuOpen ? 'open' : ''}`}
          role="menu"
        >
          <button role="menuitem" onClick={() => handlePageChange('home')}>Home</button>
          <button role="menuitem" onClick={() => handlePageChange('aboutme')}>About Me</button>
          <button role="menuitem" onClick={() => handlePageChange('CaseStudies')}>Case Studies</button>
          <button role="menuitem" onClick={() => handlePageChange('Gallery')}>Gallery</button>
          <button role="menuitem" onClick={() => handlePageChange('Certifications')}>Certifications</button>
          <button role="menuitem" onClick={() => handlePageChange('Skills')}>Skills</button>
          <button role="menuitem" onClick={() => handlePageChange('Resources')}>Resources</button>
          <button role="menuitem" onClick={() => handlePageChange('contact')}>Contact</button>
        </div>
      </nav>

      <main>
        {page === 'home' && (
          <>
            <h1>Building Robust Software, One Line at a Time...</h1>
            <p>Showcasing my journey and passion for software development, AI and automation.</p>
            <img
              className="hero-image"
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
              alt="AI themed"
            />

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
          </>
        )}

        {page === 'CaseStudies' && <CaseStudies />}
        {page === 'contact' && <Contact />}
        {page === 'Skills' && <Skills />}
        {page === 'Certifications' && <Certifications />}
        {page === 'Gallery' && <Gallery />}
        {page === 'Resources' && <Resources />}
        {page === 'aboutme' && <AboutMe />}
      </main>

      <footer className="footer">
        <p>© 2025 Arun Ramachandran. Built with React.</p>
        <div className="footer-icons">
          <a href="https://www.linkedin.com/in/arun-ramachandran-a2019a/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
          <a href="https://github.com/Arun-K-Ram" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
          <a href="https://leetcode.com/u/Arun_Ram/" target="_blank" rel="noopener noreferrer" aria-label="HackerRank">
            <FontAwesomeIcon icon={faHackerrank} size="lg" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
