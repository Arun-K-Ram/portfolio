import React from 'react';

const mediaItems = [
  {
    type: 'image',
    src: ['IMG_7960.jpg','IMG_7958.png'],
    title: 'Scanning barcodes with Pzbar',
    description:
      'Developed a barcode scanning application using Pzbar, a Python library for reading barcodes. The project featured a simple interface to scan and decode both barcodes and QR codes from images or PDFs, demonstrating the potential of computer vision in streamlining internal workflows. My goal was to integrate this solution into a larger inventory management system to eliminate dependency on external hardware scanners (like Honeywell) and avoid the need for complex barcode parsing templates within the ERP system. The demo was well-received and showcased how easily the solution could be maintained in-house.'
        },
  {
    type: 'image',
    src: 'IMG_7951.png',
    title: 'LMS system with Flask',
    description:
      'Built a Learning Management System (LMS) using Flask and React for the company, featuring real-time quiz assignments and attendance tracking. The project was developed as part of an internal training portal for trainees and completed in about a week. The application includes two dashboards: an Admin Dashboard for uploading training materials, creating and assigning quizzes; and a Trainee Dashboard for accessing the assigned materials and attempting quizzes. The goal was to develop an in-house LMS to avoid the high costs of third-party licenses, providing the company with a scalable and cost-effective alternative.'
     },
  {
    type: 'pdf',
    src: 'Quarter_Car model_using active_suspension.pdf',
    title: 'Quarter Car model using active suspension',
    description:
      'A research project on modeling a quarter car system using active suspension. This project involved simulating the dynamics of a quarter car model to analyze the effects of active suspension systems on ride comfort and handling.',
  },
  {
    type: 'pdf',
    src: 'ASL_using_CNN.pdf',
    title: 'ASL using CNN',
    description:
      'A research project on American Sign Language (ASL) recognition using Convolutional Neural Networks (CNNs). This project involved training a CNN model to recognize ASL gestures from images, showcasing the application of deep learning in gesture recognition.',
  },
  {
    type: 'pdf',
    src: 'Natural_Language_Inferencing.pdf',
    title: 'Natural Language Inferencing',
    description:
      'A research project on Natural Language Inference (NLI) using machine learning techniques. This project involved building a model to determine the relationship between pairs of sentences, such as whether one sentence entails, contradicts, or is neutral with respect to another.',
  },
];

function Gallery() {
  return (
    <section
      className="gallery"
      style={{
        padding: '2rem',
        fontFamily: 'Arial, sans-serif',
        maxWidth: '800px',
        margin: '0 auto',
      }}
    >
      <h2>Gallery</h2>
      <p>
        A showcase of real work: experiments, code, and demos that reflect my
        journey through AI and software development.
      </p>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
          marginTop: '2rem',
        }}
      >
        {mediaItems.map((item, index) => (
          <div
            key={index}
            style={{ borderBottom: '1px solid #ccc', paddingBottom: '1.5rem' }}
          >
            <h3 style={{ marginBottom: '0.5rem' }}>{item.title}</h3>
            <p style={{ marginBottom: '1rem', color: '#555' }}>
              {item.description}
            </p>

            {item.type === 'image' ? (
              Array.isArray(item.src) ? (
                item.src.map((imageSrc, i) => (
                  <img
                    key={i}
                    src={imageSrc}
                    alt={`${item.title} - ${i + 1}`}
                    style={{
                      width: '100%',
                      borderRadius: '8px',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                      marginBottom: '1rem',
                    }}
                  />
                ))
              ) : (
                <img
                  src={item.src}
                  alt={item.title}
                  style={{
                    width: '100%',
                    borderRadius: '8px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  }}
                />
              )
            ) : item.type === 'video' ? (
              <video
                controls
                style={{
                  width: '100%',
                  borderRadius: '8px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                }}
              >
                <source src={item.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : item.type === 'pdf' ? (
              <a
                href={item.src}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  padding: '0.75rem 1.25rem',
                  backgroundColor: '#007bff',
                  color: '#fff',
                  textDecoration: 'none',
                  borderRadius: '4px',
                }}
              >
                📄 View PDF
              </a>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
