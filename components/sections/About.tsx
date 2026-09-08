import { personalInfo } from '@/data/portfolio';
import { FadeIn } from '@/components/ui/MotionWrappers';

export function About() {
  return (
    <section id="about" className="section about-section">
      <FadeIn className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <p>{personalInfo.about}</p>
        </div>
      </FadeIn>
    </section>
  );
}
