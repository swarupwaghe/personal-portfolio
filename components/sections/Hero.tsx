import { personalInfo } from '@/data/portfolio';
import { Button } from '@/components/ui/Button';

export function Hero() {
  return (
    <section id="home" className="section hero-section">
      <div className="container">
        <h1>{personalInfo.name}</h1>
        <h2>{personalInfo.title}</h2>
        <h3>{personalInfo.tagline}</h3>
        <p className="location">{personalInfo.location}</p>
        <p className="intro">{personalInfo.introduction}</p>
        <div className="cta-group">
          <Button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>Explore My Projects</Button>
          <Button variant="secondary" onClick={() => window.open(personalInfo.resumeUrl, '_blank')}>Download Resume</Button>
        </div>
      </div>
    </section>
  );
}
