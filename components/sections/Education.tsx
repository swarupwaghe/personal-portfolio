import { education } from '@/data/portfolio';
import { SpatialCard } from '@/components/ui/SpatialCard';
import { StaggerContainer, StaggerItem, FadeIn } from '@/components/ui/MotionWrappers';

export function Education() {
  return (
    <section id="education" className="section education-section">
      <div className="container">
        <FadeIn>
          <div className="section-header">
            <span className="section-tag">// ACADEMIC FOUNDATION</span>
            <h2>Education</h2>
          </div>
        </FadeIn>
        <StaggerContainer className="timeline">
          {education.map((edu, index) => (
            <StaggerItem key={index}>
              <SpatialCard className="timeline-item" depth={10}>
                <h3 className="depth-layer-2">{edu.institution}</h3>
                <p className="program depth-layer-2" style={{ color: '#34d399', fontWeight: 600 }}>{edu.program}</p>
                <p className="years depth-layer-1" style={{ color: '#94a3b8', fontSize: '0.9rem' }}>
                  {edu.startYear} {edu.startYear && edu.endYear ? '-' : ''} {edu.endYear}
                </p>
                {edu.result && <p className="result depth-layer-2" style={{ color: '#38bdf8', marginTop: '6px' }}>{edu.result}</p>}
              </SpatialCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

