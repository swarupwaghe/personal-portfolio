import { skills } from '@/data/portfolio';
import { Badge } from '@/components/ui/Badge';
import { SpatialCard } from '@/components/ui/SpatialCard';
import { StaggerContainer, StaggerItem, FadeIn } from '@/components/ui/MotionWrappers';

export function Skills() {
  const categories = Array.from(new Set(skills.map(s => s.category)));

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <FadeIn>
          <div className="section-header">
            <span className="section-tag">// TECHNICAL CAPABILITIES</span>
            <h2>Skills &amp; Expertise</h2>
          </div>
        </FadeIn>
        <StaggerContainer className="skills-grid">
          {categories.map(category => (
            <StaggerItem key={category}>
              <SpatialCard className="skill-category-card" depth={12}>
                <h3 className="depth-layer-2">{category}</h3>
                <div className="skills-list depth-layer-3" style={{ marginTop: '12px' }}>
                  {skills.filter(s => s.category === category).map(skill => (
                    <Badge key={skill.name} className="skill-badge depth-layer-2">
                      {skill.name} {skill.reference ? `(${skill.reference})` : ''}
                    </Badge>
                  ))}
                </div>
              </SpatialCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

