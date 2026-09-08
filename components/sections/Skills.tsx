import { skills } from '@/data/portfolio';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';

export function Skills() {
  const categories = Array.from(new Set(skills.map(s => s.category)));

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-grid">
          {categories.map(category => (
            <Card key={category} className="skill-category-card">
              <h3>{category}</h3>
              <div className="skills-list">
                {skills.filter(s => s.category === category).map(skill => (
                  <Badge key={skill.name} className="skill-badge">
                    {skill.name} {skill.reference ? `(${skill.reference})` : ''}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
