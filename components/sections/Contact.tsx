"use client";

import React, { useState } from 'react';
import { personalInfo } from '@/data/portfolio';
import { FadeIn } from '@/components/ui/MotionWrappers';

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

  const handleReset = () => {
    setName('');
    setEmail('');
    setMessage('');
    setSubmitted(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="contact-section">
      {/* 1. Emerald Green Central Radial Background Glow */}
      <div className="contact-green-aura" />

      {/* 2. Giant Watermark Typography in Background */}
      <div className="contact-watermark">CONTACT</div>

      {/* 3. Tech Circuit Vector SVG Trace Overlay with Junction Nodes */}
      <svg className="contact-circuit-svg" viewBox="0 0 1200 600" preserveAspectRatio="none" fill="none">
        {/* Left upper circuit trace */}
        <path d="M -50 140 C 180 140, 200 280, 440 280 L 540 280" stroke="#10b981" strokeWidth="1.5" strokeOpacity="0.45" />
        <circle cx="215" cy="235" r="4.5" fill="#05080c" stroke="#34d399" strokeWidth="1.5" />
        <circle cx="340" cy="280" r="4.5" fill="#05080c" stroke="#34d399" strokeWidth="1.5" />
        
        {/* Right upper circuit trace */}
        <path d="M 1250 140 C 1020 140, 960 260, 760 260 L 660 260" stroke="#10b981" strokeWidth="1.5" strokeOpacity="0.45" />
        <circle cx="890" cy="235" r="4.5" fill="#05080c" stroke="#34d399" strokeWidth="1.5" />
        <circle cx="780" cy="260" r="4.5" fill="#05080c" stroke="#34d399" strokeWidth="1.5" />
      </svg>

      <div className="container relative z-10">
        {/* Section Top Header Bar */}
        <div className="contact-top-bar">
          <div className="contact-pill-tag">
            CONTACT
          </div>
          <button 
            className="contact-close-btn" 
            title="Back to Top"
            onClick={scrollToTop}
          >
            ✕
          </button>
        </div>

        {/* Main Dual Grid Layout */}
        <div className="contact-grid">
          {/* Left Panel */}
          <FadeIn className="contact-left-panel">
            <div className="contact-status-subbadge">
              <span style={{ color: '#10b981' }}>⊙</span>
              <span>Say hello</span>
            </div>

            <div>
              <h2 className="contact-headline">Get In Touch</h2>
              <p className="contact-subtext">
                Have a project in mind, a question, or want to collaborate? Send me a message and let&apos;s connect!
              </p>
            </div>

            {/* Contact Option Cards Stack */}
            <div className="contact-cards-stack">
              {/* Phone Option */}
              <a 
                href="tel:+919321281463" 
                className="contact-option-card"
              >
                <div className="contact-option-left">
                  <div className="contact-option-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <div className="contact-option-title">Contact me</div>
                    <div className="contact-option-detail">+91 9321281463</div>
                  </div>
                </div>
                <div className="contact-option-arrow">↗</div>
              </a>

              {/* Email Option */}
              <a 
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-option-card"
              >
                <div className="contact-option-left">
                  <div className="contact-option-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <div className="contact-option-title">Email</div>
                    <div className="contact-option-detail">{personalInfo.email}</div>
                  </div>
                </div>
                <div className="contact-option-arrow">↗</div>
              </a>

              {/* Location Option */}
              <a 
                href={`https://maps.google.com/?q=${encodeURIComponent(personalInfo.location)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-option-card"
              >
                <div className="contact-option-left">
                  <div className="contact-option-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <div className="contact-option-title">Location</div>
                    <div className="contact-option-detail">{personalInfo.location}</div>
                  </div>
                </div>
                <div className="contact-option-arrow">↗</div>
              </a>
            </div>

            <div className="contact-bottom-badge">
              Personal &amp; client use
            </div>
          </FadeIn>

          {/* Right Panel Form Card */}
          <FadeIn className="contact-form-card">
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '24px 12px' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>✨</div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#34d399', marginBottom: '8px' }}>
                  Message Ready to Send!
                </h3>
                <p style={{ color: '#94a3b8', lineHeight: 1.6, marginBottom: '20px' }}>
                  Gmail compose has been opened in a new tab with your message prefilled.
                </p>
                <button className="contact-submit-btn" onClick={handleReset}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div className="contact-field-group">
                  <input
                    type="text"
                    className="contact-field-input"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div className="contact-field-group">
                  <input
                    type="email"
                    className="contact-field-input"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="contact-field-group">
                  <textarea
                    className="contact-field-textarea"
                    placeholder="Message"
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="contact-submit-btn">
                  Submit
                </button>
              </form>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-links">
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a 
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}`} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Email
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}


