import React from 'react';

function Gallery() {
  return (
    <section className="gallery">
      <h2>Gallery</h2>
      <p>A showcase of snapshots from my AI journey, projects, or hackathons.</p>
      {/* Replace these with real images */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        <img src="https://via.placeholder.com/150" alt="Project 1" />
        <img src="https://via.placeholder.com/150" alt="Project 2" />
        <img src="https://via.placeholder.com/150" alt="Workshop" />
      </div>
    </section>
  );
}

export default Gallery;
