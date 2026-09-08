import { certifications } from '@/data/portfolio';
import { Card } from '@/components/ui/Card';

export function Certifications() {
  return (
    <section id="certifications" className="section certifications-section">
      <div className="container">
        <h2>Certifications</h2>
        <div className="cert-grid">
          {certifications.map((cert, index) => (
            <Card key={index} className="cert-card">
              <h3>{cert.name}</h3>
              <p className="issuer">{cert.issuer}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
