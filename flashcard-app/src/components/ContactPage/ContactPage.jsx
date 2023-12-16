import React, { useState } from 'react';
import axios from 'axios';

const ContactPage = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await axios.post('http://localhost:3000/messages', {
      email,
      subject,
      message
    });
   
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        {/* Form fields and submit button */}
      </form>
    </div>
  );
};

export default ContactPage;
