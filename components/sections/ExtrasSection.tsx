"use client";

import React from 'react';
import { skills, certifications, activities, education } from '@/data/portfolio';

export function ExtrasSection() {
  return (
    <section id="extras" className="terminal-section">
      <div className="terminal-container">
        <h2 className="terminal-section-heading">Extras & Qualifications</h2>

        <div className="terminal-grid-2col">
          {/* Skills & Tech Stack */}
          <div className="terminal-card">
            <h3 className="terminal-card-title text-amber">Technical Arsenal</h3>
            <div className="terminal-tech-tags" style={{ marginTop: '1rem' }}>
              {skills.map((skill, idx) => (
                <span key={idx} className="terminal-tech-chip">
                  {skill.name} <small style={{ opacity: 0.6 }}>({skill.reference})</small>
                </span>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="terminal-card">
            <h3 className="terminal-card-title text-amber">Education</h3>
            <div className="terminal-list" style={{ marginTop: '1rem' }}>
              {education.map((edu, idx) => (
                <div key={idx} className="terminal-list-item">
                  <div className="font-bold text-white">{edu.program}</div>
                  <div className="text-gray">{edu.institution} ({edu.startYear} - {edu.endYear})</div>
                  {edu.result && <div className="text-purple" style={{ fontSize: '0.85rem' }}>{edu.result}</div>}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="terminal-card">
            <h3 className="terminal-card-title text-amber">Certifications</h3>
            <div className="terminal-list" style={{ marginTop: '1rem' }}>
              {certifications.map((cert, idx) => (
                <div key={idx} className="terminal-list-item">
                  <div className="text-white">▸ {cert.name}</div>
                  <div className="text-gray" style={{ fontSize: '0.85rem' }}>Issuer: {cert.issuer}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hackathons & Community */}
          <div className="terminal-card">
            <h3 className="terminal-card-title text-amber">Activities & Community</h3>
            <div className="terminal-list" style={{ marginTop: '1rem' }}>
              {activities.map((act, idx) => (
                <div key={idx} className="terminal-list-item">
                  <div className="text-white">▸ {act.name} — <span className="text-purple">{act.role}</span></div>
                  <div className="text-gray" style={{ fontSize: '0.85rem' }}>{act.year}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
