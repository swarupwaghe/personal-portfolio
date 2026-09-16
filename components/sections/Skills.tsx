import { skills } from '@/data/portfolio';
import { Badge } from '@/components/ui/Badge';
import { SpatialCard } from '@/components/ui/SpatialCard';
import { StaggerContainer, StaggerItem, FadeIn } from '@/components/ui/MotionWrappers';
import { Terminal, GitBranch, Palette, Cpu, Sparkles, Code2 } from 'lucide-react';

const categoryIconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  'Programming': Terminal,
  'Development & Version Control': GitBranch,
  'Design': Palette,
  'Computer Fundamentals': Cpu,
  'Areas of Interest': Sparkles,
};

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
          {categories.map(category => {
            const Icon = categoryIconMap[category] || Code2;
            return (
              <StaggerItem key={category}>
                <SpatialCard className="skill-category-card" depth={12}>
                  <div className="depth-layer-2" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ padding: '6px', borderRadius: '8px', background: 'rgba(56, 189, 248, 0.12)', border: '1px solid rgba(56, 189, 248, 0.3)', color: '#38bdf8' }}>
                      <Icon size={18} />
                    </div>
                    <h3 style={{ margin: 0 }}>{category}</h3>
                  </div>
                  <div className="skills-list depth-layer-3" style={{ marginTop: '16px' }}>
                    {skills.filter(s => s.category === category).map(skill => (
                      <Badge key={skill.name} className="skill-badge depth-layer-2">
                        {skill.name} {skill.reference ? `(${skill.reference})` : ''}
                      </Badge>
                    ))}
                  </div>
                </SpatialCard>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}


