import React from 'react';
import { motion } from 'framer-motion';
import { User, MapPin, Code2, Rocket, Coffee } from 'lucide-react';
import FlashCard from '../components/FlashCard/FlashCard';
import { personalInfo } from '../data/portfolioData';

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.9, delay },
});

const flashCards = [
  {
    front: (
      <div>
        <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: 8 }}>Developer</h3>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
          Building full-stack web apps with React, Node.js & modern tooling.
        </p>
      </div>
    ),
    back: (
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.1rem', marginBottom: 10 }}>Tech Stack</h3>
        <p style={{ fontSize: '0.82rem', lineHeight: 1.8, opacity: 0.9 }}>
          React · Next.js · Node.js · Python · PostgreSQL · MongoDB · Docker
        </p>
      </div>
    ),
  },
  {
    front: (
      <div>
        <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: 8 }}>AI/ML Explorer</h3>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
          Passionate about machine learning, deep learning, NLP and building intelligent systems.
        </p>
      </div>
    ),
    back: (
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.1rem', marginBottom: 10 }}>AI Tools</h3>
        <p style={{ fontSize: '0.82rem', lineHeight: 1.8, opacity: 0.9 }}>
          PyTorch · TensorFlow · HuggingFace · LangChain · OpenCV · scikit-learn.
        </p>
      </div>
    ),
  },
  {
    front: (
      <div>
        <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: 8 }}>Designer</h3>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
          Blending creativity and usability to craft clean, intuitive, and delightful products.
        </p>
      </div>
    ),
    back: (
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.1rem', marginBottom: 10 }}>Design Tools</h3>
        <p style={{ fontSize: '0.82rem', lineHeight: 1.8, opacity: 0.9 }}>
          Figma · Canva · Framer Motion · CSS Animations · Tailwind · Three.js.
        </p>
      </div>
    ),
  },
  {
    front: (
      <div>
        <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: 8 }}>Builder</h3>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
          From idea to production, I love shipping things that matter.
        </p>
      </div>
    ),
    back: (
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.1rem', marginBottom: 10 }}>Currently Building</h3>
        <p style={{ fontSize: '0.82rem', lineHeight: 1.8, opacity: 0.9 }}>
          AI-powered tools · Open source contributions · Personal projects.
        </p>
      </div>
    ),
  },
];

const About = () => {
  return (
    <section className="section about-section" style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', width: 600, height: 600, borderRadius: '50%',
        background: 'radial-gradient(circle, var(--nebula-1) 0%, transparent 70%)',
        top: '20%', left: '-15%', pointerEvents: 'none',
        animation: 'nebula-drift 18s ease-in-out infinite',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div {...fadeIn(0)} className="about-header" style={{ marginBottom: 60 }}>
          <div className="section-tag">
            <User size={12} /> About Me
          </div>
          <h2 className="section-title">The Human Behind the Code</h2>
          <p className="section-subtitle">{personalInfo.subtitle} <br></br> Blending engineering logic with visual aesthetics.</p>
        </motion.div>

        {/* Main Grid: Responsive column count applied via CSS classes below */}
        <div className="about-grid">
          <div>
            <motion.div {...fadeIn(0.1)} className="glass-card about-story-card" style={{ padding: '32px', marginBottom: 20 }}>
              <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.3rem', marginBottom: 16, color: 'var(--text-primary)' }}>
                My Story
              </h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.9, fontSize: '0.95rem', marginBottom: 16 }}>
                I'm currently pursuing a B.Tech in Computer Science & Engineering at IIIT Sri City, driven by curiosity and a passion for building things that make an impact.
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.9, fontSize: '0.95rem', marginBottom: 16 }}>
                Today, I enjoy building seamless web experiences, developing full-stack applications, and exploring the possibilities of AI/ML, particularly in computer vision, PyTorch, and LLM-powered applications.
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.9, fontSize: '0.95rem' }}>
                When I'm not coding, you'll find me chasing new ideas, exploring the latest in tech fields, or turning late-night inspiration into responsive software designs.
              </p>
            </motion.div>

            {/* Info Metrics Chips Sub-Grid */}
            <motion.div {...fadeIn(0.2)} className="about-chips-grid">
              {[
                { icon: <MapPin size={14} />, label: 'Location', value: personalInfo.location },
                { icon: <Code2 size={14} />, label: 'Focus', value: 'Full Stack + AI/ML' },
                { icon: <Rocket size={14} />, label: 'Status', value: 'Open to Work' },
                { icon: <Coffee size={14} />, label: 'Fuel', value: 'Coffee + Curiosity' },
              ].map(({ icon, label, value }) => (
                <div key={label} style={{
                  padding: '14px 16px',
                  background: 'var(--bg-glass)',
                  border: '1px solid var(--border)',
                  borderRadius: 12,
                }}>
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: 6,
                    color: 'var(--accent)', marginBottom: 4,
                    fontFamily: 'Space Mono, monospace', fontSize: '0.68rem',
                    letterSpacing: '0.06em',
                  }}>
                    {icon} {label.toUpperCase()}
                  </div>
                  <div style={{ color: 'var(--text-primary)', fontSize: '0.88rem', fontWeight: 500 }}>
                    {value}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <div>
            <motion.div {...fadeIn(0.05)} style={{ marginBottom: 16 }}>
              <p style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.72rem', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                   Flip the cards to review tech segments
              </p>
            </motion.div>
            
            {/* Interactive Flashcards Sub-Grid */}
            <div className="about-flashcards-grid">
              {flashCards.map((card, i) => (
                <FlashCard key={i} front={card.front} back={card.back} height={180} delay={i * 0.08} />
              ))}
            </div>

            <motion.div {...fadeIn(0.4)} className="glass-card education-card" style={{ marginTop: 20, padding: '20px 24px' }}>
              <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.9rem', color: 'var(--accent)', letterSpacing: '0.1em', marginBottom: 8 }}>
                 EDUCATION
              </div>
              <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 4 }}>
                B.Tech in Computer Science & Engineering (IIIT Sri City)
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                2025 - 2029 · Specializing in AI/ML & Full Stack Systems
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Styled Responsive Adaptation Layout Layers */}
      <style>{`
        /* Desktop base configurations */
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: start;
        }
        .about-chips-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        .about-flashcards-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        /* Tablet Viewport Optimization (< 992px) */
        @media (max-width: 992px) {
          .about-grid {
            gap: 40px;
          }
        }

        /* Mobile Viewport Collapse (< 768px) */
        @media (max-width: 768px) {
          .about-section {
            padding: 60px 0 !important;
          }
          .about-header {
            margin-bottom: 36px !important;
          }
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 32px;
          }
          .about-story-card {
            padding: 24px !important;
          }
        }

        /* Small Smartphone Screen Specific Adjustments (< 480px) */
        @media (max-width: 480px) {
          .about-chips-grid {
            grid-template-columns: 1fr !important;
            gap: 10px;
          }
          .about-flashcards-grid {
            grid-template-columns: 1fr !important;
            gap: 14px;
          }
          .education-card {
            padding: 18px 20px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default About;