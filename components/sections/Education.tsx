import { education } from '@/data/portfolio';
import { SpatialCard } from '@/components/ui/SpatialCard';
import { StaggerContainer, StaggerItem, FadeIn } from '@/components/ui/MotionWrappers';
import { GraduationCap, Calendar, CheckCircle2 } from 'lucide-react';

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
                <div className="depth-layer-2" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <GraduationCap size={20} color="#38bdf8" />
                  <h3 style={{ margin: 0 }}>{edu.institution}</h3>
                </div>
                <p className="program depth-layer-2" style={{ color: '#34d399', fontWeight: 600 }}>{edu.program}</p>
                <div className="years depth-layer-1" style={{ color: '#94a3b8', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '6px', marginTop: '4px' }}>
                  <Calendar size={14} />
                  <span>{edu.startYear} {edu.startYear && edu.endYear ? '-' : ''} {edu.endYear}</span>
                </div>
                {edu.result && (
                  <div className="result depth-layer-2" style={{ color: '#38bdf8', marginTop: '8px', display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 500 }}>
                    <CheckCircle2 size={15} color="#34d399" />
                    <span>{edu.result}</span>
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
