import React, { useState } from "react";
import { motion } from "framer-motion";

const hobbies = [
  {
    title: "🏀 Basketball",
    description:
      "I played basketball at a national level and proudly represented the United Arab Emirates (UAE) in tournaments. Sports taught me discipline and teamwork, which I carry into my professional work.",
    image: "/img_7144.jpg",
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
    video: "/img_7611.mp4",
  },
];

const IntroHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{ marginBottom: "1rem" }}
    >
      <h3
        style={{
          fontSize: "2rem",
          fontWeight: "700",
          position: "relative",
          display: "inline-block",
          color: "#222",
          marginBottom: "0.3rem",
          cursor: "default",
        }}
      >
        Arun Ramachandran,{" "}
        <span
          style={{
            fontWeight: "500",
            fontSize: "1.2rem",
            color: "#555",
            display: "block",
            marginTop: "0.15rem",
            letterSpacing: "0.04em",
            fontStyle: "italic",
          }}
        >
          BTech Mechanical Engineering, MSc Mechanical Engineering
        </span>
        <motion.span
          layoutId="underline"
          style={{
            position: "absolute",
            left: 0,
            bottom: -6,
            height: 3,
            width: "100%",
            backgroundColor: "#007bff",
            borderRadius: 2,
          }}
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
      </h3>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.7rem",
          marginTop: "0.8rem",
        }}
      >
        {[
          "Certified Tableau Desktop Specialist",
          "Software Automation Engineer",
          "Selenium & Python Expert",
          "Data Science",
          "Robotics",
          "Machine Learning & AI Enthusiast",
        ].map((skill, i) => (
          <span
            key={i}
            style={{
              backgroundColor: "#e3f2fd",
              color: "#0d47a1",
              padding: "6px 12px",
              borderRadius: "16px",
              fontSize: "0.9rem",
              fontWeight: "600",
              userSelect: "none",
              boxShadow:
                "0 1px 3px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.7)",
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const AboutDescription = () => {
  const [showMore, setShowMore] = useState(false);

  const shortText = `I’m Arun Ramachandran, a dedicated software developer and automation engineer with a passion for building efficient, scalable solutions. With a strong foundation in test automation using Selenium and data analysis using Tableau, I bring a mix of technical proficiency and curiosity to every project.`;

  const fullText = `
I’m Arun Ramachandran, a dedicated software developer and automation engineer with a passion for building efficient, scalable solutions. With a strong foundation in test automation using Selenium and data analysis using Tableau, I bring a mix of technical proficiency and curiosity to every project.

I thrive in fast-paced environments and enjoy solving problems through clean, maintainable code. My focus spans software development, automation, data science, and AI, and I’m always eager to learn and contribute to meaningful work.

Growing up in the Middle East and spending most of my life in Dubai has given me a unique perspective and adaptability that I bring into my professional life. This background fuels my drive to contribute meaningfully to projects that have real-world impact.
`;

  return (
    <div style={{ marginTop: "0.7rem", lineHeight: "1.5", fontSize: "1rem" }}>
      <p style={{ whiteSpace: "pre-line" }}>{showMore ? fullText : shortText}</p>
      <button
        onClick={() => setShowMore(!showMore)}
        style={{
          marginTop: "0.5rem",
          background: "none",
          border: "none",
          color: "#007bff",
          cursor: "pointer",
          fontWeight: "600",
          padding: 0,
          fontSize: "0.9rem",
        }}
        aria-label={showMore ? "Show less description" : "Show more description"}
      >
        {showMore ? "Show less ▲" : "Show more ▼"}
      </button>
    </div>
  );
};

const AboutMe = () => {
  return (
    <div className="about-me-page" style={{ maxWidth: "900px", margin: "0 auto"}}>
      {/* About Section */}
      <section className="section-card" style={{ marginBottom: "3rem" }}>
        <h2 style={{ marginBottom: "1.5rem", fontSize: "1.8rem" }}>About Me</h2>
        <div
          className="about-me-content"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            alignItems: "center",
          }}
        >
          <img
            className="profile-image"
            src="/Arun_Profile_Image.jpeg"
            alt="Arun Ramachandran"
            style={{
              width: "100%",
              maxWidth: "280px",
              height: "auto",
              borderRadius: "10px",
              objectFit: "cover",
              objectPosition: "20% center",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            }}
          />
          <div className="profile-text" style={{ width: "100%" }}>
            <IntroHeader />
            <AboutDescription />
          </div>
        </div>
      </section>

      {/* Hobbies & Interests */}
      <section className="section-card">
        <h2 style={{ marginBottom: "1.5rem", fontSize: "1.8rem" }}>Hobbies & Interests</h2>

        <div
          className="hobbies-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.8rem",
          }}
        >
          {hobbies.map(({ title, description, image, alt, video }, index) => (
            <motion.div
              className="hobby-card"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.25 }}
              style={{
                backgroundColor: "#fff",
                borderRadius: "12px",
                boxShadow: "0 3px 8px rgba(0,0,0,0.1)",
                padding: "1rem 1.3rem",
                userSelect: "none",
              }}
            >
              <h3 style={{ marginBottom: "0.6rem" }}>{title}</h3>
              <p style={{ fontSize: "0.95rem", lineHeight: "1.4", marginBottom: "0.8rem" }}>
                {description}
              </p>

              {image && (
                <img
                  src={image}
                  alt={alt || title}
                  style={{
                    width: "100%",
                    borderRadius: "10px",
                    objectFit: "cover",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                    userSelect: "none",
                  }}
                  loading="lazy"
                />
              )}

              {video && (
                <video
                  controls
                  width="100%"
                  style={{ borderRadius: "10px", userSelect: "none" }}
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
