"use client";

import React from 'react';

const posts = [
  {
    title: 'Building Spendly: Lessons in AI Prompting & Next.js Performance',
    date: '2026-03-10',
    summary: 'How we built an AI-driven smart wallet application, structured LLM output schemas, and optimized client-side state.',
    readTime: '4 min read',
  },
  {
    title: 'Modern Retro Terminal UI Architecture with Next.js',
    date: '2026-02-18',
    summary: 'A deep dive into CRT scanline overlays, monospace typography hierarchies, and dark mode color systems.',
    readTime: '6 min read',
  },
];

export function BlogSection() {
  return (
    <section id="blog" className="terminal-section">
      <div className="terminal-container">
        <h2 className="terminal-section-heading">Blog & Articles</h2>

        <div className="terminal-projects-grid">
          {posts.map((post, idx) => (
            <div key={idx} className="terminal-card">
              <div className="terminal-card-header">
                <h3 className="terminal-card-title">{post.title}</h3>
                <span className="terminal-exp-period">{post.date} • {post.readTime}</span>
              </div>
              <p className="terminal-card-desc">{post.summary}</p>
              <div className="terminal-card-action">
                <span className="terminal-link">
                  <span>Read Article</span>
                  <span className="terminal-arrow">→</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
