import React, { useState } from 'react';
import { Heading, useShowHeadingOnPath } from './InnerComponent/Hooks';
import { ContactSocialLink } from './InnerComponent/Hooks';
import '../styles/Contact.css';
import { showSuccessToast, showErrorToast } from './InnerComponent/Toast'; // Import utility functions
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const showHeading = useShowHeadingOnPath('/contact');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://getform.io/f/alljvdra', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        showSuccessToast("Thank you for getting in touch! I'll reach out to you as soon as possible.");
        setFormData({
          name: '',
          email: '',
          number: '',
          message: ''
        });
      } else {
        showErrorToast('Failed to send message. Please try again.');
      }
    } catch (error) {
      showErrorToast('An error occurred. Please try again.');
    }
  };

  return (
    <div className="contact">
      {showHeading && <Heading text="Contact me!" />}
      <div className="contact-form">
      <form onSubmit={handleSubmit} className="hover-modal">
  <input
    type="text"
    name="name"
    value={formData.name}
    onChange={handleChange}
    placeholder="Enter Your Name"
    required
  />
  <input
    type="email"
    name="email"
    value={formData.email}
    onChange={handleChange}
    placeholder="Enter Your Email"
    required
  />
  <input
    type="number"
    name="number"
    value={formData.number}
    onChange={handleChange}
    placeholder="Enter Your Phone Number"
    required
  />
  <textarea
    name="message"
    value={formData.message}
    onChange={handleChange}
    placeholder="Enter Your Message"
    required
  />
  <button type="submit" className="submit-btn">Send</button>
</form>

      </div>
      <ContactSocialLink />
      <ToastContainer />
    </div>
  );
}

export default Contact;
