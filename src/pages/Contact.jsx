import React, { useState } from 'react';

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', maxWidth: '500px' }}>
      <h2>Contact Me</h2>

      {submitted ? (
        <div>
          <p>Thanks for reaching out! I’ll get back to you soon.</p>
          <button onClick={() => setSubmitted(false)}>Send another message</button>
        </div>
      ) : (
        <form
          action="https://formspree.io/f/xvgrrpyl"
          method="POST"
          onSubmit={(e) => {
            e.preventDefault(); // prevent page reload
            const form = e.target;
            const data = new FormData(form);

            fetch(form.action, {
              method: 'POST',
              body: data,
              headers: {
                'Accept': 'application/json',
              },
            }).then(response => {
              if (response.ok) {
                setSubmitted(true);
                form.reset();
              } else {
                response.json().then(data => {
                  if (data.errors) {
                    alert(data.errors.map(error => error.message).join(", "));
                  } else {
                    alert("Oops! There was a problem submitting your form");
                  }
                });
              }
            }).catch(() => {
              alert("Oops! There was a problem submitting your form");
            });
          }}
        >
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="name">Name:</label><br />
            <input type="text" id="name" name="name" required style={{ width: '100%', padding: '8px' }} />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="email">Email:</label><br />
            <input type="email" id="email" name="email" required style={{ width: '100%', padding: '8px' }} />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="message">Message:</label><br />
            <textarea id="message" name="message" rows="5" required style={{ width: '100%', padding: '8px' }}></textarea>
          </div>

          <button type="submit" style={{ padding: '10px 20px' }}>Send</button>
        </form>
      )}
    </div>
  );
}

export default Contact;
