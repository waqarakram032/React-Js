import React from "react";

export default function blog() {
  const posts = [
    {
      id: 1,
      title: "Getting Started with React",
      date: "November 6, 2025",
      content: "React is a JavaScript library for building user interfaces. It makes creating interactive UIs simple and efficient.",
    },
    {
      id: 2,
      title: "Understanding Components",
      date: "November 5, 2025",
      content: "Components are the building blocks of any React app. They let you split the UI into independent, reusable pieces.",
    },
  ];

  return (
    <div style={{ backgroundColor: '#f0f4ff', minHeight: '100vh', padding: '30px', fontFamily: 'sans-serif' }}>
      <h1 style={{ textAlign: 'center', color: '#2b6cb0' }}>My Simple React Blog</h1>

      <div style={{ maxWidth: '700px', margin: '40px auto' }}>
        {posts.map((post) => (
          <div key={post.id} style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px', marginBottom: '20px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
            <h2 style={{ color: '#2c5282' }}>{post.title}</h2>
            <p style={{ color: '#718096', fontSize: '14px' }}>{post.date}</p>
            <p style={{ marginTop: '10px', color: '#4a5568' }}>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
