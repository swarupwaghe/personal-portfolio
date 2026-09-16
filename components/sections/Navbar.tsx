"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Home as HomeIcon, 
  User as UserIcon, 
  Code2, 
  FolderGit2, 
  GraduationCap, 
  Award, 
  Milestone, 
  Mail,
  Cpu
} from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home', icon: HomeIcon },
  { name: 'About', href: '#about', icon: UserIcon },
  { name: 'Skills', href: '#skills', icon: Code2 },
  { name: 'Projects', href: '#projects', icon: FolderGit2 },
  { name: 'Education', href: '#education', icon: GraduationCap },
  { name: 'Certifications', href: '#certifications', icon: Award },
  { name: 'Journey', href: '#journey', icon: Milestone },
  { name: 'Contact', href: '#contact', icon: Mail },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const navHeight = 85;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveSection(targetId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.replace('#', ''));
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="navbar-wrapper">
      <nav className="navbar spatial-glass-panel">
        <button
          className="nav-gear-badge"
          title="System Core"
          onClick={(e) => {
            e.preventDefault();
            const home = document.getElementById('home');
            if (home) home.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <Cpu size={16} />
        </button>

        <div className="nav-links" style={{ position: 'relative' }}>
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace('#', '');
            const Icon = item.icon;
            return (
              <a
                key={item.href}
                href={item.href}
                className={isActive ? 'active' : ''}
                onClick={(e) => scrollToSection(e, item.href)}
                style={{ position: 'relative', zIndex: 2, display: 'inline-flex', alignItems: 'center', gap: '6px' }}
              >
                {isActive && (
                  <motion.span
                    layoutId="spatialNavActivePill"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      borderRadius: '9999px',
                      background: 'rgba(255, 255, 255, 0.16)',
                      border: '1px solid rgba(255, 255, 255, 0.25)',
                      boxShadow: '0 4px 14px rgba(56, 189, 248, 0.25), inset 0 1px 1px rgba(255, 255, 255, 0.3)',
                      zIndex: -1,
                    }}
                  />
                )}
                <Icon size={14} className="nav-item-icon" />
                <span>{item.name}</span>
              </a>
            );
          })}
        </div>
      </nav>
    </div>
  );
}

