import React from "react";
import RRoute from "../Routes/RRoute";


export default function AboutPage() {
  return (
    <div style={{ backgroundColor: '#e3f2fd', minHeight: '100vh', padding: '40px', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ maxWidth: '700px', margin: 'auto', backgroundColor: 'white', borderRadius: '12px', padding: '30px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
        <h1 style={{ color: '#1565c0', textAlign: 'center', marginBottom: '20px' }}>About Me</h1>
        <p style={{ color: '#424242', lineHeight: '1.7' }}>
          Hi! I'm <strong>Raja Waqar</strong>, a passionate Front-End Developer who loves creating clean, simple, and responsive web experiences using React, Tailwind CSS, and modern JavaScript.
        </p>

        <p style={{ color: '#424242', lineHeight: '1.7', marginTop: '15px' }}>
          I enjoy learning new technologies and sharing my knowledge through small tutorials and projects. My goal is to make the web a more beautiful and interactive place for everyone.
        </p>

        <h2 style={{ color: '#1976d2', marginTop: '25px' }}>My Skills</h2>
        <ul style={{ color: '#424242', marginTop: '10px', lineHeight: '1.8' }}>
          <li>HTML, CSS, JavaScript (ES6+)</li>
          <li>React & Tailwind CSS</li>
          <li>WordPress & MySQL</li>
          <li>Responsive Web Design</li>
        </ul>

        <h2 style={{ color: '#1976d2', marginTop: '25px' }}>Hobbies</h2>
        <p style={{ color: '#424242', lineHeight: '1.7' }}>
          In my free time, I like exploring new design trends, working on personal coding projects, and writing blog posts about what I learn.
        </p>

        <div style={{ textAlign: 'center', marginTop: '30px' }}>
          <button style={{ backgroundColor: '#1565c0', color: 'white', padding: '10px 20px', borderRadius: '6px', border: 'none', cursor: 'pointer' }}  >
           <a href="/contact" style={{color:'white'}}> Contact Me </a>
          </button>
        </div>
      </div>
    </div>
  );
}
