import React from 'react';
import './PageCommon.css';

export default function Home() {
  return (
    <div className="page-container neon-bg text-center">
      <h1 className="neon-title">Hello, We're Sandeep & Ruthvick</h1>
      <p className="neon-text">
        Welcome to our digital realm—where code meets creativity.
        Explore our skills, projects, and experience to see how we bring ideas to life.
      </p>
      <div className="home-cta">
        <a href="/projects" className="neon-card">View Projects</a>
        <a href="/contact" className="neon-card">Get in Touch</a>
      </div>
    </div>
  );
}
