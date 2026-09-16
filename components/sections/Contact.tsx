"use client";

import React, { useState } from 'react';
import { personalInfo } from '@/data/portfolio';

export function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}&su=${subject}&body=${body}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="terminal-section">
      <div className="terminal-container">
        <h2 className="terminal-section-heading">Contact</h2>

        <div className="terminal-grid-2col">
          {/* Direct contact details */}
          <div className="terminal-card">
            <h3 className="terminal-card-title text-amber">Direct Links & Details</h3>
            <div className="terminal-list" style={{ marginTop: '1.25rem' }}>
              <div className="terminal-list-item">
                <span className="text-gray">Email:</span>{' '}
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="terminal-link"
                >
                  {personalInfo.email} ↗
                </a>
              </div>

              <div className="terminal-list-item">
                <span className="text-gray">GitHub:</span>{' '}
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="terminal-link">
                  {personalInfo.github.replace('https://', '')} ↗
                </a>
              </div>

              <div className="terminal-list-item">
                <span className="text-gray">LinkedIn:</span>{' '}
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="terminal-link">
                  swarup-waghe ↗
                </a>
              </div>

              <div className="terminal-list-item">
                <span className="text-gray">Location:</span> <span className="text-white">{personalInfo.location}</span>
              </div>
            </div>
          </div>

          {/* Quick Terminal Form */}
          <div className="terminal-card">
            <h3 className="terminal-card-title text-amber">Send Message</h3>
            {submitted ? (
              <div style={{ marginTop: '1rem', color: 'rgb(139, 92, 246)' }}>
                Message draft opened in Gmail!
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="terminal-input"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="terminal-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <textarea
                  placeholder="Your Message..."
                  rows={4}
                  className="terminal-input"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
                <button type="submit" className="terminal-btn">
                  Transmit Message →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="terminal-footer">
      <div className="amber-rule" style={{ marginBottom: '1.5rem' }} />
      <div className="terminal-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', paddingBottom: '2.5rem' }}>
        <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem' }}>
          &copy; {new Date().getFullYear()} {personalInfo.name}. Monospace Terminal Edition.
        </div>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="terminal-nav-link">
            GitHub
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="terminal-nav-link">
            LinkedIn
          </a>
          <a href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer" className="terminal-nav-link">
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
}

