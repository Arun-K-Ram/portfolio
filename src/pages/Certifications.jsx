import React from 'react';
import { motion } from 'framer-motion';

const certifications = [
  "AI for Medicine",
  "AI Capstone with Deep Learning",
  "Tableau Specialist",
  "Deep Learning with Keras and Tensorflow",
  "Deep Learning with PyTorch",
  "Fundamentals of AI Agents using RAG and Langchain",
  "Gen AI Foundational Models for NLP & Language Understanding",
  "Generative AI Advanced Fine tuning for LLMs",
  "IBM AI Engineering Specialization",
  "Introduction to Big Data",
  "SQL for Data Science",
  "Applied Data Science Capstone",
  "Introduction to Cloud Computing",
  "Data Analysis with Python",
  "Data Visualization with Python",
  "Machine Learning with Python",
  "Tools for Data Science",
  "Machine Learning - Andrew Ng",
  "Project Management Principles and Practices",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function Certifications() {
  return (
    <section className="certifications">
      <h2>Certifications</h2>
      <p style={{ fontStyle: 'normal', marginBottom: '1rem' }}>
        Here are some key certifications demonstrating my skills and expertise. All certrifications are available on my LinkedIn profile.
      </p>
      <motion.ul
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ listStyleType: 'square', paddingLeft: '1.2rem' }}
      >
        {certifications.map((cert, i) => (
          <motion.li
            key={i}
            variants={itemVariants}
            style={{ marginBottom: '0.6rem', fontSize: '1.1rem' }}
          >
            {cert}
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}

export default Certifications;
