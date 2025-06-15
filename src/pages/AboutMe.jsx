import React from "react";
import { motion } from "framer-motion";

const hobbies = [
  {
    title: "🏀 Basketball",
    description:
      "I played basketball at a national level and proudly represented the United Arab Emirates (UAE) in tournaments. Sports taught me discipline and teamwork, which I carry into my professional work.",
    image: "img_7144.jpg",
    alt: "Basketball",
  },
  {
    title: "⚽ Other Sports",
    description:
      "I’ve also played soccer and table tennis competitively. I enjoy staying active and thrive in environments that combine strategy and physicality.",
  },
  {
    title: "🎮 Gaming",
    description:
      "Gaming is my way of relaxing and sparking creativity. I enjoy games like League of Legends, God of War, and immersive single-player titles that blend storytelling and challenge.",
  },
  {
    title: "🧗 Rock Climbing",
    description:
      "I’ve always had a fear of heights... the kind that makes your knees wobble just standing on a third-floor balcony. But thanks to a few slightly reckless yet incredibly supportive friends, I found myself roped in (literally) to the world of rock climbing. It’s been a challenge, but one I’m embracing, and I hope to be as skilled as they are someday.",
    video: "img_7611.mp4",
  },
];

const AboutMe = () => {
  return (
    <div className="about-me-page">
      {/* About Section */}
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
              Certified Tableau Desktop Specialist | Software Automation
              Engineer | Selenium & Python Expert | Data Science, Robotics,
              Machine Learning & AI Enthusiast
            </p>
            <p>
              I’m Arun Ramachandran, a dedicated software developer and
              automation engineer with a passion for building efficient,
              scalable solutions. With a strong foundation in test automation
              using Selenium and data analysis using Tableau, I bring a mix of
              technical proficiency and curiosity to every project.
            </p>
            <p>
              I thrive in fast-paced environments and enjoy solving problems
              through clean, maintainable code. My focus spans software
              development, automation, data science, and AI, and I’m always
              eager to learn and contribute to meaningful work.
            </p>
            <p>
              Growing up in the Middle East and spending most of my life in
              Dubai has given me a unique perspective and adaptability that I
              bring into my professional life. This background fuels my drive
              to contribute meaningfully to projects that have real-world
              impact.
            </p>
          </div>
        </div>
      </section>

      {/* Hobbies & Interests */}
      <section className="section-card">
        <h2>Hobbies & Interests</h2>

        <div className="hobbies-grid">
          {hobbies.map(({ title, description, image, alt, video }, index) => (
            <motion.div
              className="hobby-card"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3>{title}</h3>
              <p>{description}</p>

              {image && (
                <img
                  src={image}
                  alt={alt || title}
                  className="hobby-image"
                />
              )}

              {video && (
                <video
                  className="hobby-video"
                  controls
                  width="300"
                  preload="metadata"
                >
                  <source src={video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
