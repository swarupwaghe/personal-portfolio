"use client";

import React from 'react';
import { personalInfo } from '@/data/portfolio';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/MotionWrappers';
import { SpatialCard } from '@/components/ui/SpatialCard';

export function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <FadeIn>
          <div className="section-header">
            <span className="section-tag">// DISCOVER MY BACKGROUND</span>
            <h2>About Me</h2>
          </div>
        </FadeIn>

        <SpatialCard className="about-card-frame" depth={12}>
          <StaggerContainer>
            {/* Futuristic Spatial HUD Corner Crosshairs */}
            <span className="hud-corner top-left depth-layer-4">+</span>
            <span className="hud-corner top-right depth-layer-4">+</span>
            <span className="hud-corner bottom-left depth-layer-4">+</span>
            <span className="hud-corner bottom-right depth-layer-4">+</span>

            <StaggerItem className="about-hero-text depth-layer-2">
              <h3>Driven by Curiosity, Powered by Code & AI</h3>
              <p>{personalInfo.about}</p>
            </StaggerItem>

            <div className="about-grid">
              <StaggerItem className="depth-layer-2">
                <SpatialCard className="about-feature-card card-cyan" depth={8}>
                  <div className="feature-icon icon-cyan depth-layer-3">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                  </div>
                  <h4 className="depth-layer-2">Engineering Foundation</h4>
                  <p className="depth-layer-1">Building core logic in C++, system concepts, and scalable software architecture.</p>
                </SpatialCard>
              </StaggerItem>

              <StaggerItem className="depth-layer-2">
                <SpatialCard className="about-feature-card card-purple" depth={8}>
                  <div className="feature-icon icon-purple depth-layer-3">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2a10 10 0 1 0 10 10H12V2z"></path><path d="M12 12L2.5 7.5"></path><path d="M12 12v10"></path></svg>
                  </div>
                  <h4 className="depth-layer-2">Prompt Engineering</h4>
                  <p className="depth-layer-1">Crafting structured AI prompts to optimize generative AI model outputs and automated workflows.</p>
                </SpatialCard>
              </StaggerItem>

              <StaggerItem className="depth-layer-2">
                <SpatialCard className="about-feature-card card-pink" depth={8}>
                  <div className="feature-icon icon-pink depth-layer-3">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
                  </div>
                  <h4 className="depth-layer-2">Data Analysis</h4>
                  <p className="depth-layer-1">Transforming raw datasets into actionable insights to guide intelligent decision-making.</p>
                </SpatialCard>
              </StaggerItem>
            </div>

            <StaggerItem className="depth-layer-2">
              <div className="about-pills">
                <span className="about-pill">🎓 Software Engineering Student</span>
                <span className="about-pill">🚀 Hackathon Builder (Spendly)</span>
                <span className="about-pill">📜 IBM & Infosys Certified</span>
                <span className="about-pill">⚡ Practical Experimentation</span>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </SpatialCard>
      </div>
    </section>
  );
}
