import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './PageCommon.css';

const recipients = {
  'Manu Kondaruthvik': 'manukondaruthvik14@gmail.com',
  'Sai Sandeep Kambhampati': 'saisandeepkambhampati50@gmail.com',
};

export default function Contact() {
  const [form, setForm] = useState({
    recipient: '',
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  // Initialize EmailJS once
  useEffect(() => {
    const userID = import.meta.env.VITE_EMAILJS_USER_ID;
    if (userID) emailjs.init(userID);
    else console.warn('Missing VITE_EMAILJS_USER_ID in .env');
  }, []);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    // basic front-end validation
    if (!form.recipient || !form.name || !form.email || !form.message) {
      return setStatus('❗ Please complete all fields.');
    }

    setStatus('Sending…');

    const templateParams = {
      to_email: form.recipient,
      from_name: form.name,
      from_email: form.email,
      message: form.message,
      title: 'New Message via Portfolio',
      time: new Date().toLocaleString(),
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams
      );
      setStatus('✅ Message sent!');
      setForm(prev => ({ ...prev, name: '', email: '', message: '' }));
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('❌ Something went wrong. Try again later.');
    }
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>Have a project in mind or just want to say hi? We’d love to hear from you!</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="recipient">Choose a team member:</label>
        <select
          id="recipient"
          name="recipient"
          value={form.recipient}
          onChange={handleChange}
          required
        >
          <option value="">-- Select --</option>
          {Object.entries(recipients).map(([name, email]) => (
            <option key={email} value={email}>
              {name}
            </option>
          ))}
        </select>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={form.message}
          onChange={handleChange}
          required
        />

        <button type="submit" disabled={status === 'Sending…'}>
          {status === 'Sending…' ? 'Sending…' : 'Send Message'}
        </button>

        {status && (
          <p className={`status-message ${status.startsWith('✅') ? 'success' : 'error'}`}>
            {status}
          </p>
        )}
      </form>
    </div>
  );
}
