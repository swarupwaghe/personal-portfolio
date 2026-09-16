"use client";

import React from 'react';
import { projects } from '@/data/portfolio';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { StaggerContainer, StaggerItem, FadeIn } from '@/components/ui/MotionWrappers';
import { SpatialCard } from '@/components/ui/SpatialCard';
import { ExternalLink, AlertCircle, FolderGit2 } from 'lucide-react';

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
                depth={12}
              >
                <div className="depth-layer-2" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <FolderGit2 size={20} color={project.featured ? '#c084fc' : '#38bdf8'} />
                  <h3 style={{ margin: 0 }}>{project.title}</h3>
                </div>
                <p className="project-category depth-layer-2">{project.category}</p>
                <p className="project-desc depth-layer-1">{project.description}</p>
                {project.problemAddressed && (
                  <div className="project-problem depth-layer-1" style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                    <AlertCircle size={16} color="#fb923c" style={{ marginTop: '3px', flexShrink: 0 }} />
                    <span><strong>Problem:</strong> {project.problemAddressed}</span>
                  </div>
                )}
                <div className="project-tech depth-layer-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
                {project.liveUrl && (
                  <div className="project-actions depth-layer-3">
                    <Button onClick={() => window.open(project.liveUrl, '_blank')} className="btn-glowing">
                      <span>Live Demo</span>
                      <ExternalLink size={16} />
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

