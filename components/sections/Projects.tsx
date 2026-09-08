import { projects } from '@/data/portfolio';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

export function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map(project => (
            <Card key={project.id} className={`project-card ${project.featured ? 'featured' : ''}`}>
              <h3>{project.title}</h3>
              <p className="project-category">{project.category}</p>
              <p className="project-desc">{project.description}</p>
              {project.problemAddressed && (
                <p className="project-problem"><strong>Problem:</strong> {project.problemAddressed}</p>
              )}
              <div className="project-tech">
                {project.technologies.map(tech => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
              {project.liveUrl && (
                <div className="project-actions">
                  <Button onClick={() => window.open(project.liveUrl, '_blank')}>Live Demo</Button>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
