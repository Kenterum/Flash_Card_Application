import React, { useState } from 'react';
import axios from 'axios';
import './ContactPage.css'

const ContactPage = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return re.test(String(email).toLowerCase());
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setSuccess('');

    if (!email.trim() || !subject.trim() || !message.trim()) {
      setError('Please fill in all fields.');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setLoading(true);
    try {
      // Post the data to the server
      await axios.post('http://localhost:3000/messages', {
        email,
        subject,
        message
      });
      // Handle the response here (e.g., clear the form, notify the user)
      setSuccess('Message sent successfully!');
      setEmail('');
      setSubject('');
      setMessage('');
    } catch (error) {
      // Handle any errors here, like showing an error message to the user
      console.error("There was an error sending the message:", error);
      setError('There was an error sending your message.'); // Notify the user of the error
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Contact Us</h1>
      {error && <div className="error">{error}</div>}
      {success && <div className="success">{success}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
          />
        </div>
        <div>
          <label htmlFor="subject">Subject:</label>
          <input
            id="subject"
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            disabled={loading}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            disabled={loading}
          />
        </div>
        <button type="submit" disabled={loading}>
  {loading ? <div className="loading-spinner"></div> : 'Send Message'}
</button>
      </form>
    </div>
  );
};

export default ContactPage;
