import React, { useState } from 'react';
import axios from 'axios';

const ContactPage = () => {
  // State variables for the form inputs
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Post the data to the server
      const result = await axios.post('http://localhost:3000/messages', {
        email,
        subject,
        message
      });
      // Log the result or handle the response here
      console.log(result.data);
      // Optionally clear the form or give feedback to the user
      setEmail('');
      setSubject('');
      setMessage('');
    } catch (error) {
      // Handle any errors here, like showing an error message to the user
      console.error("There was an error sending the message:", error);
    }
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="subject">Subject:</label>
          <input
            id="subject"
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactPage;
