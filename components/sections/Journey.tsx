import { learningJourney } from '@/data/portfolio';
import { SpatialCard } from '@/components/ui/SpatialCard';
import { StaggerContainer, StaggerItem, FadeIn } from '@/components/ui/MotionWrappers';
import { Milestone, Compass, Rocket, Sparkles } from 'lucide-react';

const typeIconMap: Record<string, React.ComponentType<{ size?: number; color?: string }>> = {
  'Foundation': Compass,
  'Exploration': Sparkles,
  'Building': Rocket,
  'Collaboration': Milestone,
  'Future': Sparkles,
};

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
          {learningJourney.map((item, index) => {
            const Icon = typeIconMap[item.type] || Milestone;
            return (
              <StaggerItem key={index}>
                <SpatialCard className="journey-item" depth={10}>
                  <div className="journey-date depth-layer-2" style={{ color: '#38bdf8', fontWeight: 600, fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Icon size={14} color="#34d399" />
                    <span>{item.date} • {item.type}</span>
                  </div>
                  <h3 className="depth-layer-2" style={{ marginTop: '6px' }}>{item.title}</h3>
                  <p className="depth-layer-1" style={{ color: '#cbd5e1', marginTop: '6px' }}>{item.description}</p>
                </SpatialCard>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}


