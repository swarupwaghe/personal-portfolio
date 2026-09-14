"use client";

import { personalInfo } from '@/data/portfolio';
import { Button } from '@/components/ui/Button';
import { StaggerContainer, StaggerItem } from '@/components/ui/MotionWrappers';

export function Hero() {
  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      const navHeight = 75;
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth',
      });
    }
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      const navHeight = 75;
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="section hero-section">
      <div className="container">
        <StaggerContainer className="hero-card-frame">
          {/* Futuristic HUD Corner Crosshairs */}
          <span className="hud-corner top-left">+</span>
          <span className="hud-corner top-right">+</span>
          <span className="hud-corner bottom-left">+</span>
          <span className="hud-corner bottom-right">+</span>

          {/* Status Badge */}
          <StaggerItem>
            <div className="hero-status-pill">
              <span className="status-dot"></span>
              <span>Available for Software Engineering & AI Collaborations</span>
            </div>
          </StaggerItem>

          {/* Hero Name */}
          <StaggerItem>
            <h1 className="hero-title">{personalInfo.name}</h1>
          </StaggerItem>

          {/* Specialization Tags */}
          <StaggerItem>
            <div className="hero-tags">
              <span className="tech-tag tag-primary">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                Software Engineering
              </span>
              <span className="tech-tag tag-cyan">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2a10 10 0 1 0 10 10H12V2z"></path><path d="M12 12L2.5 7.5"></path><path d="M12 12v10"></path></svg>
                Prompt Engineering
              </span>
              <span className="tech-tag tag-purple">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
                Data Analysis
              </span>
            </div>
          </StaggerItem>

          {/* Location */}
          <StaggerItem>
            <p className="hero-location">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              {personalInfo.location}
            </p>
          </StaggerItem>

          {/* Introduction */}
          <StaggerItem>
            <p className="hero-intro">{personalInfo.introduction}</p>
          </StaggerItem>


          {/* Call to Action Group */}
          <StaggerItem className="cta-group">
            <Button onClick={scrollToProjects} className="btn-glowing">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
              Explore Projects
            </Button>
            <Button variant="secondary" onClick={() => window.open(personalInfo.resumeUrl, '_blank')}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              View Resume
            </Button>
            <Button variant="secondary" onClick={scrollToContact} className="btn-contact-quick">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              Get In Touch
            </Button>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}

