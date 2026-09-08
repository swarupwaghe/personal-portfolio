import { education } from '@/data/portfolio';
import { Card } from '@/components/ui/Card';

export function Education() {
  return (
    <section id="education" className="section education-section">
      <div className="container">
        <h2>Education</h2>
        <div className="timeline">
          {education.map((edu, index) => (
            <Card key={index} className="timeline-item">
              <h3>{edu.institution}</h3>
              <p className="program">{edu.program}</p>
              <p className="years">{edu.startYear} {edu.startYear && edu.endYear ? '-' : ''} {edu.endYear}</p>
              {edu.result && <p className="result">{edu.result}</p>}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
