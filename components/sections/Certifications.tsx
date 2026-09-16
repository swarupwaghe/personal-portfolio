import { certifications } from '@/data/portfolio';
import { SpatialCard } from '@/components/ui/SpatialCard';
import { StaggerContainer, StaggerItem, FadeIn } from '@/components/ui/MotionWrappers';
import { Award, ShieldCheck } from 'lucide-react';

export function Certifications() {
  return (
    <section id="certifications" className="section certifications-section">
      <div className="container">
        <FadeIn>
          <div className="section-header">
            <span className="section-tag">// CREDENTIALS & CERTIFICATES</span>
            <h2>Certifications</h2>
          </div>
        </FadeIn>
        <StaggerContainer className="cert-grid">
          {certifications.map((cert, index) => (
            <StaggerItem key={index}>
              <SpatialCard className="cert-card" depth={12}>
                <div className="depth-layer-2" style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '8px' }}>
                  <Award size={20} color="#c084fc" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <h3 style={{ fontSize: '1.1rem', margin: 0 }}>{cert.name}</h3>
                </div>
                <div className="issuer depth-layer-1" style={{ color: '#38bdf8', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.9rem' }}>
                  <ShieldCheck size={14} color="#34d399" />
                  <span>Issuer: {cert.issuer}</span>
                </div>
              </SpatialCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}


