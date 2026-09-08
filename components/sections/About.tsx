import { personalInfo } from '@/data/portfolio';

export function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <p>{personalInfo.about}</p>
        </div>
      </div>
    </section>
  );
}
