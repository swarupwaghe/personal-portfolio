import { certifications } from '@/data/portfolio';
import { SpatialCard } from '@/components/ui/SpatialCard';
import { StaggerContainer, StaggerItem, FadeIn } from '@/components/ui/MotionWrappers';

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
                <h3 className="depth-layer-2" style={{ fontSize: '1.1rem', marginBottom: '8px' }}>{cert.name}</h3>
                <p className="issuer depth-layer-1" style={{ color: '#38bdf8', fontWeight: 600 }}>Issuer: {cert.issuer}</p>
              </SpatialCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

