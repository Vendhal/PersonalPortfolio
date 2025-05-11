import React from 'react';
import './PageCommon.css';

const projects = [
  {
    name: 'Portfolio Website',
    desc: 'A neon-lit React site to showcase our work.',
    link: '#'
  },
  {
    name: 'Weather App',
    desc: 'Fetches live data with a futuristic UI.',
    link: '#'
  },
  {
    name: 'Task Manager',
    desc: 'Organize your to-dos with localStorage magic.',
    link: '#'
  },
];

export default function Projects() {
  return (
    <div className="page-container neon-bg">
      <h1 className="neon-title">Projects</h1>
      <div className="projects-grid">
        {projects.map((p) => (
          <a key={p.name} href={p.link} className="project-card neon-card">
            <h2>{p.name}</h2>
            <p>{p.desc}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
