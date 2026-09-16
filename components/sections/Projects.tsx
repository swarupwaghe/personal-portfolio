"use client";

import React from 'react';
import { projects } from '@/data/portfolio';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { StaggerContainer, StaggerItem, FadeIn } from '@/components/ui/MotionWrappers';
import { SpatialCard } from '@/components/ui/SpatialCard';

export function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <FadeIn>
          <div className="section-header">
            <span className="section-tag">// SELECTED WORK & LABS</span>
            <h2>Projects</h2>
          </div>
        </FadeIn>
        <StaggerContainer className="projects-grid">
          {projects.map((project) => (
            <StaggerItem key={project.id}>
              <SpatialCard
                className={`project-card ${project.featured ? 'featured' : ''}`}
                depth={10}
              >
                <h3 className="depth-layer-2">{project.title}</h3>
                <p className="project-category depth-layer-2">{project.category}</p>
                <p className="project-desc depth-layer-1">{project.description}</p>
                {project.problemAddressed && (
                  <p className="project-problem depth-layer-1">
                    <strong>Problem:</strong> {project.problemAddressed}
                  </p>
                )}
                <div className="project-tech depth-layer-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
                {project.liveUrl && (
                  <div className="project-actions depth-layer-3">
                    <Button onClick={() => window.open(project.liveUrl, '_blank')}>
                      Live Demo
                    </Button>
                  </div>
                )}
              </SpatialCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
