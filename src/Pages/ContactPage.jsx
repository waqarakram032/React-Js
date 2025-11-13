import React, { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been sent.`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div style={{ backgroundColor: '#e8f5e9', minHeight: '100vh', padding: '40px', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ maxWidth: '600px', margin: 'auto', backgroundColor: 'white', borderRadius: '12px', padding: '30px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
        <h1 style={{ color: '#2e7d32', textAlign: 'center', marginBottom: '20px' }}>Contact Me</h1>
        <p style={{ color: '#424242', textAlign: 'center', marginBottom: '30px' }}>
          Have a question, feedback, or collaboration idea? I'd love to hear from you!
        </p>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', color: '#2e7d32', marginBottom: '5px' }}>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', color: '#2e7d32', marginBottom: '5px' }}>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', color: '#2e7d32', marginBottom: '5px' }}>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }}
            ></textarea>
          </div>

          <div style={{ textAlign: 'center' }}>
            <button type="submit" style={{ backgroundColor: '#2e7d32', color: 'white', padding: '10px 20px', borderRadius: '6px', border: 'none', cursor: 'pointer' }}>
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}