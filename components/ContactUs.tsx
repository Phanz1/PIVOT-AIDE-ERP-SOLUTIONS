import React, { useState } from 'react';

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-300 to-blue-500 p-4">
      <div className="w-full max-w-lg bg-white bg-opacity-80 rounded-2xl shadow-lg p-8 backdrop-blur-md">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">Get in Touch with DMV Tax Pro Today!</h2>
        <p>Expert Tax Guidance, Every Step of the Way</p>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full p-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows={4}
            required
          />
          <button type="submit" className="w-full p-3 bg-gradient-to-r from-green-400 to-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:from-green-500 hover:to-blue-700 transition-all duration-300">
            Send Message
          </button>
        </form>

        {/* Contact Information */}
        <div className="text-center mt-8 space-y-4 text-gray-800">
          <p className="text-lg font-medium">Phone: +1 (571) 470-3754 </p>
          <p className="text-lg font-medium">Email: info@dmvtaxpro.com</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:scale-110 transition-transform duration-300">
              <i className="fab fa-facebook-f text-2xl"></i>
            </a>
            <a href="https://twitter.com/yourpage" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:scale-110 transition-transform duration-300">
              <i className="fab fa-twitter text-2xl"></i>
            </a>
            <a href="https://linkedin.com/in/yourpage" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:scale-110 transition-transform duration-300">
              <i className="fab fa-linkedin-in text-2xl"></i>
            </a>
            <a href="mailto:contact@yourwebsite.com" className="text-gray-600 hover:scale-110 transition-transform duration-300">
              <i className="fas fa-envelope text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
