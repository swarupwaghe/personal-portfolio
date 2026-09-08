import { learningJourney } from '@/data/portfolio';
import { Card } from '@/components/ui/Card';

export function Journey() {
  return (
    <section id="journey" className="section journey-section">
      <div className="container">
        <h2>Learning Journey</h2>
        <div className="journey-timeline">
          {learningJourney.map((item, index) => (
            <Card key={index} className="journey-item">
              <div className="journey-date">{item.date}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
