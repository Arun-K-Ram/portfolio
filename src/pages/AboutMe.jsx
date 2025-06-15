import React from 'react';

const AboutMe = () => {
  return (
    <div className="about-me-page">
      {/* === About Section === */}
      <section className="section-card">
        <h2>About Me</h2>
        <div className="about-me-content">
          <img
            className="profile-image"
            src="/Arun_Profile_Image.jpeg"
            alt="Profile"
          />
          <div className="profile-text">
            <h3>Arun Ramachandran</h3>
            <p>
              Certified Tableau Desktop Specialist | Software Automation Engineer | Selenium & Python Expert | Data Science, Robotics, Machine Learning & AI Enthusiast
            </p>
            <p>
              I’m Arun Ramachandran, a dedicated software developer and automation engineer with a passion for building efficient, scalable solutions. With a strong foundation in test automation using Selenium and data analysis using Tableau, I bring a mix of technical proficiency and curiosity to every project.
            </p>
            <p>
              I thrive in fast-paced environments and enjoy solving problems through clean, maintainable code. My focus spans software development, automation, data science, and AI, and I’m always eager to learn and contribute to meaningful work.
            </p>
            <p>
              Growing up in the Middle East and spending most of my life in Dubai has given me a unique perspective and adaptability that I bring into my professional life. This background fuels my drive to contribute meaningfully to projects that have real-world impact.
            </p>
          </div>
        </div>
      </section>

      {/* === Hobbies & Interests === */}
      <section className="section-card">
        <h2>Hobbies & Interests</h2>

        {/* Basketball */}
        <div className="hobby">
          <div className="hobby-row">
            <div className="hobby-text">
              <h3>🏀 Basketball</h3>
              <p>
                I played basketball at a national level and proudly represented the United Arab Emirates (UAE) in tournaments.
                Sports taught me discipline and teamwork, which I carry into my professional work.
              </p>
            </div>
            <img src="img_7144.jpg" alt="Basketball" className="hobby-image-side" />
          </div>
        </div>

        {/* Other Sports */}
        <div className="hobby">
          <div className="hobby-row">
            <div className="hobby-text">
              <h3>⚽ Other Sports</h3>
              <p>
                I’ve also played soccer and table tennis competitively. I enjoy staying active and thrive in environments
                that combine strategy and physicality.
              </p>
            </div>
          </div>
        </div>

        {/* Gaming */}
        <div className="hobby">
          <div className="hobby-row">
            <div className="hobby-text">
              <h3>🎮 Gaming</h3>
              <p>
                Gaming is my way of relaxing and sparking creativity. I enjoy games like <strong>League of Legends</strong>, <strong>God of War</strong>,
                and immersive single-player titles that blend storytelling and challenge.
              </p>
            </div>
          </div>
        </div>

        {/* Rock Climbing */}
        <div className="hobby">
          <div className="hobby-row">
            <div className="hobby-text">
              <h3>🧗 Rock Climbing</h3>
              <p>
I’ve always had a fear of heights....the kind that makes your knees wobble just standing on a third-floor balcony. But thanks to a few slightly reckless yet incredibly supportive friends, I found myself roped in (literally) to the world of rock climbing. It’s been a challenge, but one I’m embracing, and I hope to be as skilled as they are someday.
              </p>
            </div>
            {/* Video Option: */}
            <video className="hobby-video" controls width="300">
              <source src="img_7611.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
