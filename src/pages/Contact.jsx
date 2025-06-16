import React, { useState } from 'react';

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div
      style={{
        padding: '1rem',
        fontFamily: 'Arial, sans-serif',
        maxWidth: '500px',
        margin: '0 auto',
      }}
    >
      <h2>Contact Me</h2>

      {submitted ? (
        <div>
          <p>Thanks for reaching out! I’ll get back to you soon.</p>
          <button onClick={() => setSubmitted(false)} style={{ marginTop: '1rem' }}>
            Send another message
          </button>
        </div>
      ) : (
        <>
          <p style={{ marginBottom: '1rem' }}>
            I'd love to hear from you!
          </p>

          <div style={{ marginBottom: '1.5rem', background: '#f9f9f9', padding: '1rem', borderRadius: '8px' }}>
            <strong>How this works:</strong>
            <ol style={{ margin: '0.5rem 0 0 1.2rem', padding: 0 }}>
              <li>Enter your name, email, and message</li>
              <li>Click <strong>Submit</strong></li>
              <li>I’ll receive your message in my inbox and respond shortly</li>
            </ol>
          </div>

          <form
            action="https://formspree.io/f/xvgrrpyl"
            method="POST"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.target;
              const data = new FormData(form);

              fetch(form.action, {
                method: 'POST',
                body: data,
                headers: {
                  Accept: 'application/json',
                },
              })
                .then((response) => {
                  if (response.ok) {
                    setSubmitted(true);
                    form.reset();
                  } else {
                    response.json().then((data) => {
                      if (data.errors) {
                        alert(data.errors.map((error) => error.message).join(', '));
                      } else {
                        alert('Oops! There was a problem submitting your form');
                      }
                    });
                  }
                })
                .catch(() => {
                  alert('Oops! There was a problem submitting your form');
                });
            }}
          >
            <div style={{ marginBottom: '1rem' }}>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                style={{ width: '100%', padding: '8px', marginTop: '4px' }}
              />
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                style={{ width: '100%', padding: '8px', marginTop: '4px' }}
              />
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                style={{ width: '100%', padding: '8px', marginTop: '4px' }}
              ></textarea>
            </div>

            <button type="submit" style={{ padding: '10px 20px', cursor: 'pointer' }}>
              Submit
            </button>
          </form>
        </>
      )}
    </div>
  );
}

export default Contact;
