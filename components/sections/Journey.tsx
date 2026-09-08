import { learningJourney } from '@/data/portfolio';
import { Card } from '@/components/ui/Card';
import { StaggerContainer, StaggerItem, FadeIn } from '@/components/ui/MotionWrappers';

export function Journey() {
  return (
    <section id="journey" className="section journey-section">
      <div className="container">
        <FadeIn><h2>Learning Journey</h2></FadeIn>
        <StaggerContainer className="journey-timeline">
          {learningJourney.map((item, index) => (
            <StaggerItem key={index}>
              <Card className="journey-item">
                <div className="journey-date">{item.date}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
