import React from 'react';
import './PageCommon.css';

const experiences = [
  { role: 'Frontend Developer', company: 'TechNova', period: '2024–Present' },
  { role: 'Intern', company: 'CodeCraft', period: '2023' },
];

export default function Experience() {
  return (
    <div className="page-container neon-bg">
      <h1 className="neon-title">Experience</h1>
      <ul className="timeline">
        {experiences.map((e, i) => (
          <li key={i} className="timeline-item neon-card">
            <h2>{e.role}</h2>
            <span>{e.company} • {e.period}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
