import { education } from '@/data/portfolio';
import { Card } from '@/components/ui/Card';
import { StaggerContainer, StaggerItem, FadeIn } from '@/components/ui/MotionWrappers';

export function Education() {
  return (
    <section id="education" className="section education-section">
      <div className="container">
        <FadeIn><h2>Education</h2></FadeIn>
        <StaggerContainer className="timeline">
          {education.map((edu, index) => (
            <StaggerItem key={index}>
              <Card className="timeline-item">
                <h3>{edu.institution}</h3>
                <p className="program">{edu.program}</p>
                <p className="years">{edu.startYear} {edu.startYear && edu.endYear ? '-' : ''} {edu.endYear}</p>
                {edu.result && <p className="result">{edu.result}</p>}
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
