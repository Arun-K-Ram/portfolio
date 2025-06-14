import React from 'react';
import { motion } from 'framer-motion';

const caseStudies = [
  {
    title: '📦 Barcode Scanning via Laptop Webcam',
    problem: 'Client needed to scan barcodes for inventory but wanted to avoid investing in external hardware.',
    solution: 'Used laptop webcam with pyzbar and OpenCV to scan barcodes in real-time.',
    outcome: 'Reduced processing time by 40% and avoided hardware costs.',
  },
  {
    title: '🧱 Modular Automation Framework',
    problem: 'Selenium test scripts were monolithic and repetitive.',
    solution: 'Refactored tests into reusable modules with logging, reporting, and data-driven support.',
    outcome: 'Improved maintainability and test reliability across the pipeline.',
  },
  {
    title: '🧪 Automation Reliability with Helenium',
    problem: 'Tests broke frequently due to dynamic page elements.',
    solution: 'Evaluated and adopted Helenium for more resilient automation.',
    outcome: 'Significant reduction in test flakiness and easier syntax.',
  },
  {
    title: '📊 Data Inflation Tool (PySpark)',
    problem: 'Dev/test teams lacked safe, realistic data.',
    solution: 'Built a PySpark-based transformer for anonymized sandbox data generation.',
    outcome: 'Allowed efficient testing on production-like datasets with privacy intact.',
  },
  {
    title: '🎓 LMS with Flask + React',
    problem: 'Training process lacked centralized structure and quiz tracking.',
    solution: 'Built an LMS using Flask for backend and React frontend, with quiz assignment and results dashboard.',
    outcome: 'Streamlined internal training and improved engagement.',
  },
  {
    title: '📈 Data Interface Automation & Pipeline Management',
    problem: `Managed complex data interfaces across dev, staging, and production environments with deployment, monitoring, and error handling challenges.`,
    solution: `- Orchestrated JSON profiling in PG admin using SQL for dev, stage, and production.  
- Coordinated with DXC team to provision Jenkins CI/CD pipelines.  
- Developed AWS Glue jobs for historical and incremental data processing.  
- Automated failure alerts with AWS Glue triggers.  
- Collaborated on Snowflake table provisioning and DDL scripting.  
- Led CAB meetings and coordinated with stakeholders.  
- Supported cross-functional teams using Informatica and Tableau for visualization.  
- Suggested timestamp-triggered batch processing for performance optimization.`,
    outcome: `Streamlined deployments, reduced errors, improved data processing efficiency, and enhanced monitoring and alerting.`,
  },
  {
    title: '📚 IBM Data Science Capstone',
    problem: 'Analyzed and grouped neighborhoods using real-world business/demographic data.',
    solution: 'Applied clustering and visualization using Python and machine learning.',
    outcome: 'Presented insights for business location strategy.',
  },
  {
    title: '🧠 Natural Language Inferencing',
    problem: 'Needed to classify relationships between premise and hypothesis statements.',
    solution: 'Built a deep learning NLP model using LSTM and Transformer layers.',
    outcome: 'Achieved strong classification accuracy across three categories.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

function CaseStudies() {
  return (
    <section className="projects-section">
      <h2>Case Studies</h2>
      <p className="intro-text">
        A walkthrough of real-world problems I’ve tackled through software, automation, and AI.
      </p>

      <motion.div
        className="case-studies-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {caseStudies.map((cs, index) => (
          <motion.div className="case-card" variants={cardVariants} key={index}>
            <h3>{cs.title}</h3>
            <p><strong>Problem:</strong> {cs.problem}</p>
            <p><strong>Solution:</strong> {cs.solution}</p>
            <p><strong>Outcome:</strong> {cs.outcome}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default CaseStudies;
