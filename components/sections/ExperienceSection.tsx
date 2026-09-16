"use client";

import React from 'react';
import { experiences } from '@/data/portfolio';

export function ExperienceSection() {
  return (
    <section id="experience" className="terminal-section">
      <div className="terminal-container">
        {/* Left-aligned bold white Experience heading */}
        <h2 className="terminal-section-heading">Experience</h2>

        {/* Violet/Purple outlined container cut off at the fold */}
        <div className="purple-container">
          <div className="purple-container-inner">
            {experiences.map((exp, idx) => (
              <div key={idx} className="terminal-exp-card">
                <div className="terminal-exp-header">
                  <div>
                    <h3 className="terminal-exp-role">{exp.role}</h3>
                    <div className="terminal-exp-company">{exp.company}</div>
                  </div>
                  <span className="terminal-exp-period">{exp.period}</span>
                </div>

                <ul className="terminal-exp-list">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                <div className="terminal-exp-skills">
                  {exp.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="terminal-skill-chip">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
