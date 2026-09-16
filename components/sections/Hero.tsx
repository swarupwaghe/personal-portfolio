"use client";

import React from 'react';
import { personalInfo } from '@/data/portfolio';

export function Hero() {
  return (
    <section id="home" className="terminal-hero-section">
      <div className="terminal-hero-container">
        {/* Centered, ~5-line block of intro text */}
        <p className="hero-intro-text">
          Hi, I'm {personalInfo.name} — a {personalInfo.title} experienced across the stack, from React and TypeScript to C++ and Python data layers. Comfortable owning a feature end-to-end, from system design to AI prompt engineering to production deployment. Track record of building AI-driven smart wallets and data analytics tools.
        </p>
      </div>

      {/* Thin amber horizontal rule below hero */}
      <div className="amber-rule" />
    </section>
  );
}

