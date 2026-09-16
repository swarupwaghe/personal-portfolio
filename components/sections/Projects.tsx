"use client";

import React from 'react';
import { projects } from '@/data/portfolio';

export function Projects() {
  return (
    <section id="projects" className="terminal-section">
      <div className="terminal-container">
        <h2 className="terminal-section-heading">Projects</h2>

        <div className="terminal-projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="terminal-card">
              <div className="terminal-card-header">
                <h3 className="terminal-card-title">{project.title}</h3>
                <span className="terminal-card-category">{project.category}</span>
              </div>
              <p className="terminal-card-desc">{project.description}</p>
              {project.problemAddressed && (
                <p className="terminal-card-problem">
                  <span className="text-amber">Problem:</span> {project.problemAddressed}
                </p>
              )}
              <div className="terminal-tech-tags">
                {project.technologies.map((tech) => (
                  <span key={tech} className="terminal-tech-chip">
                    {tech}
                  </span>
                ))}
              </div>
              {project.liveUrl && (
                <div className="terminal-card-action">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="terminal-link"
                  >
                    <span>Deploy / Live Demo</span>
                    <span className="terminal-arrow">↗</span>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

