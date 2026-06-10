import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, BookOpen, Calendar } from 'lucide-react';
import { experience, education } from '../data/portfolioData';
import FlashCard from '../components/FlashCard/FlashCard';

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

const milestones = [
  { year: '2012', label: 'Started schooling at KV Cooch Behar' },
  { year: '2024', label: 'Completed Class XII at KV Cooch Behar' },
  { year: '2025', label: 'Joined Indian Institute of Information Technology, Sri City — B.Tech CSE' },
  { year: '2026', label: 'Interned at Inamigos Foundation' },
  { year: '2026', label: 'Built Deep Shield, Smart README Agent & more' },
  { year: '2029', label: 'B.Tech graduation (upcoming)' },
];

const Experience = () => {
  return (
    <section className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Nebula bg */}
      <div style={{
        position: 'absolute', width: 600, height: 600, borderRadius: '50%',
        background: 'radial-gradient(circle, var(--nebula-1) 0%, transparent 70%)',
        top: '10%', left: '-10%', pointerEvents: 'none',
        animation: 'nebula-drift 14s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute', width: 400, height: 400, borderRadius: '50%',
        background: 'radial-gradient(circle, var(--nebula-2) 0%, transparent 70%)',
        bottom: '5%', right: '-5%', pointerEvents: 'none',
        animation: 'nebula-drift 18s ease-in-out infinite reverse',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <motion.div {...fadeIn(0)} style={{ marginBottom: 60 }}>
          <div className="section-tag"><Briefcase size={12} /> Experience & Education</div>
          <h2 className="section-title">Journey So Far</h2>
          <p className="section-subtitle">
            Where I've studied, worked, and what I've built along the way.
          </p>
        </motion.div>

        {/* Main grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }} className="exp-grid">

          {/* LEFT: Experience */}
          <div>
            <motion.p {...fadeIn(0.05)} style={{
              fontFamily: 'Space Mono, monospace', fontSize: '0.7rem',
              color: 'var(--accent)', letterSpacing: '0.12em',
              textTransform: 'uppercase', marginBottom: 20,
              display: 'flex', alignItems: 'center', gap: 6,
            }}>
              <Briefcase size={12} /> Work Experience
            </motion.p>

            {experience.map((exp) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: 0.1 }}
                className="glass-card"
                style={{
                  padding: '28px',
                  position: 'relative', 
                  overflow: 'hidden',
                  marginBottom: 20,
                  cursor: 'none'
                }}
              >
                {/* Top accent bar */}
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: 3,
                  background: 'linear-gradient(90deg, var(--accent), var(--accent-2))',
                  borderRadius: '20px 20px 0 0',
                }} />

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 14, flexWrap: 'wrap', gap: 8 }}>
                  <div>
                    <h3 style={{
                      fontFamily: 'Syne, sans-serif', fontSize: '1.2rem', fontWeight: 700,
                      color: 'var(--text-primary)', marginBottom: 4,
                    }}>{exp.role}</h3>
                    <div style={{
                      fontFamily: 'Space Mono, monospace', fontSize: '0.82rem',
                      color: 'var(--accent)', letterSpacing: '0.04em',
                    }}>@ {exp.company}</div>
                  </div>
                  <span style={{
                    padding: '5px 12px',
                    background: 'rgba(139,92,246,0.12)',
                    border: '1px solid rgba(139,92,246,0.3)',
                    borderRadius: 50,
                    fontFamily: 'Space Mono, monospace', fontSize: '0.68rem',
                    color: 'var(--accent)',
                  }}>{exp.type}</span>
                </div>

                <div style={{
                  display: 'flex', alignItems: 'center', gap: 6,
                  marginBottom: 14,
                  fontFamily: 'Space Mono, monospace', fontSize: '0.75rem',
                  color: 'var(--text-muted)',
                }}>
                  <Calendar size={12} /> {exp.duration}
                </div>

                <p style={{
                  fontSize: '0.88rem', color: 'var(--text-secondary)',
                  lineHeight: 1.8, marginBottom: 20,
                }}>{exp.description}</p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {exp.tech.map(t => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* More coming */}
            <motion.div {...fadeIn(0.25)} style={{
              padding: '18px 22px',
              background: 'var(--bg-glass)', border: '1px dashed var(--border)',
              borderRadius: 14, textAlign: 'center',
            }}>
              <p style={{
                color: 'var(--text-muted)', fontSize: '0.82rem',
                fontFamily: 'Space Mono, monospace', letterSpacing: '0.04em',
              }}>
                More experience loading... (2025–2029)
              </p>
            </motion.div>
          </div>

          {/* RIGHT: Education + Timeline */}
          <div>
            <motion.p {...fadeIn(0.05)} style={{
              fontFamily: 'Space Mono, monospace', fontSize: '0.7rem',
              color: 'var(--accent-2)', letterSpacing: '0.12em',
              textTransform: 'uppercase', marginBottom: 20,
              display: 'flex', alignItems: 'center', gap: 6,
            }}>
              <BookOpen size={12} /> Education
            </motion.p>

            {/* Education cards */}
            {education.map((edu, i) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.08 * i }}
                className="glass-card"
                style={{
                  padding: '24px 26px',
                  marginBottom: 16,
                  cursor: 'none'
                }}
              >
                <div>
                  <h3 style={{
                    fontFamily: 'Syne, sans-serif', fontSize: '1rem', fontWeight: 700,
                    color: 'var(--text-primary)', marginBottom: 4,
                  }}>{edu.degree}</h3>
                  <div style={{
                    fontFamily: 'Space Mono, monospace', fontSize: '0.75rem',
                    color: i === 0 ? 'var(--accent)' : 'var(--accent-2)',
                    marginBottom: 6, letterSpacing: '0.04em',
                  }}>{edu.institution}</div>
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: 5,
                    fontFamily: 'Space Mono, monospace', fontSize: '0.7rem',
                    color: 'var(--text-muted)', marginBottom: 8,
                  }}>
                    <Calendar size={10} /> {edu.duration}
                  </div>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    {edu.description}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Timeline */}
            <motion.p {...fadeIn(0.2)} style={{
              fontFamily: 'Space Mono, monospace', fontSize: '0.7rem',
              color: 'var(--text-muted)', letterSpacing: '0.1em',
              textTransform: 'uppercase', margin: '28px 0 20px',
              display: 'flex', alignItems: 'center', gap: 6,
            }}>
               My Journey
            </motion.p>

            <div style={{ position: 'relative', paddingLeft: 32 }}>
              <div style={{
                position: 'absolute', left: 10, top: 8, bottom: 8,
                width: 1,
                background: 'linear-gradient(180deg, var(--accent), var(--accent-2), transparent)',
              }} />
              {milestones.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  style={{ position: 'relative', marginBottom: 20 }}
                >
                  <div style={{
                    position: 'absolute', left: -22, top: 4,
                    width: 10, height: 10, borderRadius: '50%',
                    background: 'var(--accent)', boxShadow: '0 0 10px var(--glow)',
                  }} />
                  <span style={{
                    fontFamily: 'Space Mono, monospace', fontSize: '0.68rem',
                    color: 'var(--accent)', letterSpacing: '0.06em',
                    display: 'block', marginBottom: 3,
                  }}>{m.year}</span>
                  <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)' }}>{m.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Highlight flashcards */}
        <motion.div {...fadeIn(0.3)} style={{ marginTop: 60 }}>
          <p style={{
            fontFamily: 'Space Mono, monospace', fontSize: '0.7rem',
            color: 'var(--text-muted)', letterSpacing: '0.1em',
            textTransform: 'uppercase', marginBottom: 20,
          }}> Highlights-hover to flip</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 16 }}>
            {[
              {
                front: <div><h4 style={{ fontFamily: 'Syne, sans-serif', color: 'var(--text-primary)', fontSize: '0.95rem', marginBottom: 6 }}>Web Dev Intern</h4><p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>Inamigos Foundation · 2026</p></div>,
                back: <div><h4 style={{ fontFamily: 'Syne, sans-serif', marginBottom: 8, fontSize: '0.95rem' }}>What I Did</h4><p style={{ fontSize: '0.78rem', opacity: 0.9, lineHeight: 1.6 }}>Built responsive UIs in React, integrated APIs, improved foundation web presence.</p></div>,
              },
              {
                front: <div><h4 style={{ fontFamily: 'Syne, sans-serif', color: 'var(--text-primary)', fontSize: '0.88rem', marginBottom: 6, lineHeight: 1.3 }}>Indian Institute of Information Technology, Sri City</h4><p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginTop: 4 }}>B.Tech CSE · 2025–2029</p></div>,
                back: <div><h4 style={{ fontFamily: 'Syne, sans-serif', marginBottom: 8, fontSize: '0.95rem' }}>Course Focus</h4><p style={{ fontSize: '0.78rem', opacity: 0.9, lineHeight: 1.6 }}>AI/ML, Full Stack Dev, Data Structures, Algorithms, Cloud Computing.</p></div>,
              },
              {
                front: <div><h4 style={{ fontFamily: 'Syne, sans-serif', color: 'var(--text-primary)', fontSize: '0.95rem', marginBottom: 6 }}>KV Cooch Behar</h4><p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>2012 – 2024</p></div>,
                back: <div><h4 style={{ fontFamily: 'Syne, sans-serif', marginBottom: 8, fontSize: '0.95rem' }}>Foundation</h4><p style={{ fontSize: '0.78rem', opacity: 0.9, lineHeight: 1.6 }}>12 years of strong academic foundation. PCMB in 10+2.</p></div>,
              },
              {
                front: <div><h4 style={{ fontFamily: 'Syne, sans-serif', color: 'var(--text-primary)', fontSize: '0.95rem', marginBottom: 6 }}>AI/ML Builder</h4><p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>PyTorch · LangChain · CV</p></div>,
                back: <div><h4 style={{ fontFamily: 'Syne, sans-serif', marginBottom: 8, fontSize: '0.95rem' }}>Projects</h4><p style={{ fontSize: '0.78rem', opacity: 0.9, lineHeight: 1.6 }}>Deep Shield, Smart README Agent, image classifiers, NLP pipelines.</p></div>,
              },
            ].map((card, i) => (
              <FlashCard key={i} front={card.front} back={card.back} height={155} delay={i * 0.07} />
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .exp-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default Experience;