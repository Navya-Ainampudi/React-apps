import React, { useState } from 'react';
import axios from 'axios';

const EmailForm = () => {
  const [formData, setFormData] = useState({
    to: '',
    subject: '',
    text: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:4001/send-email', formData)
      .then(response => {
        alert('Email sent successfully!');
      })
      .catch(error => {
        console.error('Error sending email:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="to"
        value={formData.to}
        onChange={handleChange}
        placeholder="Recipient Email"
      />
      <input
        type="text"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        placeholder="Subject"
      />
      <textarea
        name="text"
        value={formData.text}
        onChange={handleChange}
        placeholder="Message"
      />
      <button type="submit">Send Email</button>
    </form>
  );
};

export default EmailForm;
