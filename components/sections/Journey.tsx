import { learningJourney } from '@/data/portfolio';
import { SpatialCard } from '@/components/ui/SpatialCard';
import { StaggerContainer, StaggerItem, FadeIn } from '@/components/ui/MotionWrappers';

export function Journey() {
  return (
    <section id="journey" className="section journey-section">
      <div className="container">
        <FadeIn>
          <div className="section-header">
            <span className="section-tag">// EVOLUTION & GROWTH</span>
            <h2>Learning Journey</h2>
          </div>
        </FadeIn>
        <StaggerContainer className="journey-timeline">
          {learningJourney.map((item, index) => (
            <StaggerItem key={index}>
              <SpatialCard className="journey-item" depth={10}>
                <div className="journey-date depth-layer-2" style={{ color: '#38bdf8', fontWeight: 600, fontSize: '0.85rem' }}>{item.date}</div>
                <h3 className="depth-layer-2" style={{ marginTop: '4px' }}>{item.title}</h3>
                <p className="depth-layer-1" style={{ color: '#cbd5e1', marginTop: '6px' }}>{item.description}</p>
              </SpatialCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

