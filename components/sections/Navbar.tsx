"use client";

import React from 'react';
import { personalInfo } from '@/data/portfolio';

const navItems = [
  { name: 'Resume', href: personalInfo.resumeUrl, isExternal: true },
  { name: 'Projects', href: '#projects', isExternal: false },
  { name: 'Extras', href: '#extras', isExternal: false },
  { name: 'Blog', href: '#blog', isExternal: false },
];

export function Navbar() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isExternal: boolean) => {
    if (isExternal) return; // let normal link click open external resume
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - 60,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className="terminal-header">
      <div className="terminal-header-container">
        {/* Left: $ logo icon + Hi, I'm Swarup Waghe */}
        <div className="terminal-logo">
          <span className="terminal-prompt-symbol">$</span>
          <span className="terminal-name-title">Hi, I'm {personalInfo.name}</span>
        </div>

        {/* Right: Resume, Projects, Extras, Blog */}
        <nav className="terminal-nav">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target={item.isExternal ? '_blank' : '_self'}
              rel={item.isExternal ? 'noopener noreferrer' : undefined}
              className="terminal-nav-link"
              onClick={(e) => scrollToSection(e, item.href, item.isExternal)}
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>

      {/* Thin amber horizontal rule under header */}
      <div className="amber-rule" />
    </header>
  );
}

