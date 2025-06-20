import React, { useState, useEffect } from 'react';
import CaseStudies from './pages/CaseStudies';
import Contact from './pages/Contact';
import Skills from './pages/Skills';
import Certifications from './pages/Certifications';
import Gallery from './pages/Gallery';
import Resources from './pages/Resources';
import AboutMe from './pages/AboutMe';
import TableauEmbed from './pages/TableauEmbed';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faHackerrank } from '@fortawesome/free-brands-svg-icons';

import './App.css';

// Replace with your logging endpoint
const LOGGING_ENDPOINT = 'https://aibycode.vercel.app/api/log-visitor';

function App() {
  const [page, setPage] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => {
        const locationInfo = `${data.city}, ${data.region}, ${data.country_name} (${data.ip})`;
        fetch(LOGGING_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ location: locationInfo }),
        })
          .then(res => res.json())
          .then(data => console.log('Visitor logged:', data))
          .catch(err => console.error('Logging error:', err));
      })
      .catch(err => {
        console.error('Location fetch failed:', err);
      });
  }, []);

  const handlePageChange = (newPage) => {
    setPage(newPage);
    setMenuOpen(false);
  };

  return (
    <div className="container">
      <nav className="navbar">
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <FontAwesomeIcon icon={faBars} size="lg" />
        </div>

        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <button onClick={() => handlePageChange('home')}>Home</button>
          <button onClick={() => handlePageChange('aboutme')}>About Me</button>
          <button onClick={() => handlePageChange('CaseStudies')}>Case Studies</button>
          <button onClick={() => handlePageChange('Gallery')}>Gallery</button>
          <button onClick={() => handlePageChange('Certifications')}>Certifications</button>
          <button onClick={() => handlePageChange('Skills')}>Skills</button>
          <button onClick={() => handlePageChange('Resources')}>Resources</button>
          <button onClick={() => handlePageChange('contact')}>Contact</button>
        </div>
      </nav>

      <main>
        {page === 'home' && (
          <div className="home-content">
            <h1>Building Robust Software, One Line at a Time...</h1>
            <p>Showcasing my journey and passion for software development, AI and automation.</p>
            <img
              className="hero-image"
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
              alt="AI themed"
            />

            <section className="section-card ai-interest">
              <h2>AI Meets Astronomy</h2>
              <p>
                This interactive tableau dashboard I have created, demonstrates how AI can be used to interpret complex astronomical data.
                Using publicly available NASA exoplanet datasets:
              </p>
              <ul>
                <li><strong>Exoplanet Discoveries Over the Years</strong>: A line chart showing how planetary discoveries have increased over time.</li>
                <li><strong>Discovery Method Distribution</strong>: A pie chart breaking down which methods (e.g., transit, radial velocity) were used most frequently.</li>
              </ul>
              <p>
                AI can be instrumental in analyzing vast space data, filtering signal from noise, and uncovering new celestial bodies.
              </p>
              <TableauEmbed />
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
