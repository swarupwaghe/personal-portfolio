"use client";

import { personalInfo } from '@/data/portfolio';
import { Button } from '@/components/ui/Button';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/MotionWrappers';

export function Hero() {
  return (
    <section id="home" className="section hero-section">
      <StaggerContainer className="container">
        <StaggerItem>
          <h1>{personalInfo.name}</h1>
        </StaggerItem>
        <StaggerItem>
          <h2>{personalInfo.title}</h2>
        </StaggerItem>
        <StaggerItem>
          <h3>{personalInfo.tagline}</h3>
        </StaggerItem>
        <StaggerItem>
          <p className="location">{personalInfo.location}</p>
        </StaggerItem>
        <StaggerItem>
          <p className="intro">{personalInfo.introduction}</p>
        </StaggerItem>
        <StaggerItem className="cta-group">
          <Button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>Explore My Projects</Button>
          <Button variant="secondary" onClick={() => window.open(personalInfo.resumeUrl, '_blank')}>View Resume</Button>
        </StaggerItem>
      </StaggerContainer>
    </section>
  );
}
