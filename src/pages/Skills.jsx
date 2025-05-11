import React from 'react';
import './PageCommon.css';

const skills = ['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Git'];

export default function Skills() {
  return (
    <div className="page-container neon-bg">
      <h1 className="neon-title">Skills</h1>
      <div className="skills-grid">
        {skills.map((skill) => (
          <span key={skill} className="neon-tag">{skill}</span>
        ))}
      </div>
    </div>
  );
}
