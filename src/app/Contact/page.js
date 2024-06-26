"use client";
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
    <div className="p-4 text-center min-h-screen">
      <h1 className="text-4xl md:text-5xl font-bold pb-4">Contact Us</h1>
      <h2 className="text-lg md:text-xl mb-8">We would love to hear from you.</h2>

      <div className="max-w-lg mx-auto">
        <form onSubmit={handleSubmit} className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
            <textarea 
              id="message" 
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              className="w-full px-3 py-2 border rounded"
              rows="5"
              required
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="w-full bg-cyan-600 text-white py-2 rounded hover:bg-cyan-700"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Popup Message */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
            <p>Your message has been sent successfully.</p>
            <p className="text-sm text-gray-600 mt-4">We will get back to you shortly.</p>
          </div>
        </div>
      )}

      {/* Contact Ending */}
      <div className="mt-8 text-gray-700">
        <p>For immediate assistance, please call us at <strong>1-800-860-3891</strong> or email us at <strong>support@channelconnectpro.com</strong>.</p>
        <p>We look forward to connecting with you!</p>
      </div>
    </div>
  );
};

export default Contact;




