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
                depth={15}
              >
                <div className="depth-layer-3" style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                  <div className="depth-layer-4" style={{ padding: '6px', borderRadius: '8px', background: project.featured ? 'rgba(192, 132, 252, 0.15)' : 'rgba(56, 189, 248, 0.15)', border: project.featured ? '1px solid rgba(192, 132, 252, 0.4)' : '1px solid rgba(56, 189, 248, 0.4)' }}>
                    <FolderGit2 size={22} color={project.featured ? '#c084fc' : '#38bdf8'} />
                  </div>
                  <h3 className="depth-layer-3" style={{ margin: 0 }}>{project.title}</h3>
                </div>
                <p className="project-category depth-layer-2">{project.category}</p>
                <p className="project-desc depth-layer-1">{project.description}</p>
                {project.problemAddressed && (
                  <div className="project-problem depth-layer-2" style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                    <AlertCircle size={16} color="#fb923c" style={{ marginTop: '3px', flexShrink: 0 }} />
                    <span><strong>Problem:</strong> {project.problemAddressed}</span>
                  </div>
                )}
                <div className="project-tech depth-layer-3">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} className="depth-layer-2">{tech}</Badge>
                  ))}
                </div>
                {project.liveUrl && (
                  <div className="project-actions depth-layer-4">
                    <Button onClick={() => window.open(project.liveUrl, '_blank')} className="btn-glowing depth-layer-4">
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

