import { certifications } from '@/data/portfolio';
import { Card } from '@/components/ui/Card';
import { StaggerContainer, StaggerItem, FadeIn } from '@/components/ui/MotionWrappers';

export function Certifications() {
  return (
    <section id="certifications" className="section certifications-section">
      <div className="container">
        <FadeIn><h2>Certifications</h2></FadeIn>
        <StaggerContainer className="cert-grid">
          {certifications.map((cert, index) => (
            <StaggerItem key={index}>
              <Card className="cert-card">
                <h3>{cert.name}</h3>
                <p className="issuer">{cert.issuer}</p>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
