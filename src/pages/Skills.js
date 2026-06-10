import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Layers, Server, Brain, Wrench, ChevronRight, Calendar } from 'lucide-react';
import { skills } from '../data/portfolioData';

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

const SkillBar = ({ name, level, delay }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      style={{ marginBottom: 16 }}
    >
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        marginBottom: 6,
      }}>
        <span style={{
          fontSize: '0.875rem', color: 'var(--text-primary)',
          fontWeight: 500,
        }}>{name}</span>
        <span style={{
          fontFamily: 'Space Mono, monospace',
          fontSize: '0.72rem', color: 'var(--accent)',
        }}>{level}%</span>
      </div>
      <div className="skill-bar-track">
        <div
          className="skill-bar-fill"
          style={{
            transform: inView ? `scaleX(${level / 100})` : 'scaleX(0)',
          }}
        />
      </div>
    </motion.div>
  );
};

const CATEGORIES = [
  { key: 'languages', label: 'Languages', icon: <Code2 size={16} />, data: skills.languages },
  { key: 'frontend', label: 'Frontend', icon: <Layers size={16} />, data: skills.frontend },
  { key: 'backend', label: 'Backend', icon: <Server size={16} />, data: skills.backend },
  { key: 'aiml', label: 'AI / ML', icon: <Brain size={16} />, data: skills.aiml },
  { key: 'tools', label: 'Tools & DB', icon: <Wrench size={16} />, data: skills.tools },
];

const SkillTag = ({ name, delay }) => (
  <motion.span
    className="tech-tag"
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.3, delay }}
    whileHover={{ scale: 1.05 }}
    style={{ margin: '4px' }}
  >
    {name}
  </motion.span>
);

const allTechTags = [
  'Python', 'JavaScript', 'TypeScript', 'React.js', 'Next.js',
  'Node.js', 'Express.js', 'FastAPI', 'Django', 'PyTorch',
  'TensorFlow', 'OpenCV', 'HuggingFace', 'LangChain', 'scikit-learn',
  'MongoDB', 'PostgreSQL', 'Redis', 'Docker', 'Git',
  'Tailwind CSS', 'Framer Motion', 'Three.js', 'GraphQL', 'Firebase',
  'Vercel', 'Figma', 'OpenCV', 'Pandas', 'NumPy',
];

const leadershipTimeline = [
  {
    
    role: "Member — AI/ML Wing",
    org: "Epoch · Indian Institute of Information Technology, Sri City",
    duration: "Oct 2025 – Present",
    desc: "Contributing to ML project development and technical workshops. Implementing ML models and exploring emerging AI technologies within the student community."
  },
  {
    
    role: "Designer — UI/UX & Graphic Design",
    org: "Enigma Design Club · Indian Institute of Information Technology, Sri City",
    duration: "Oct 2025 – Present",
    desc: "Leading UI/UX and graphic design initiatives for campus-wide technical events using Figma and Canva. Creating cohesive digital branding assets for club activities."
  },
  {
    
    role: "Core Design Team Member",
    org: "ABHISARGA - Annual Techno-Cultural Fest of IIIT Sri city",
    duration: "Dec 2025 – Present",
    desc: "Conceptualised and designed the visual identity for the institute's flagship cultural fest, creating high-fidelity assets for social media and physical branding."
  },
  {
    
    role: "Sponsorship, Hospitality & Marketing Design Lead",
    org: "UDBHAV - Inter-IIIT Hackathon",
    duration: "Sept 2025 – Jan 2026",
    desc: "Spearheaded visual identity for the first-ever Inter-IIIT Hackathon reaching 500+ students. Managed hospitality for 50+ participants from IIIT Kalyani, Agartala & Manipur. Secured industrial partnerships."
  },
  {
    
    role: "Event Organiser & Host",
    org: "Cyber Tea 3.0 - National Cybersecurity Workshop",
    duration: "Dec 2025",
    desc: "Successfully organised and hosted an All-India cybersecurity workshop, facilitating technical sessions for participants across various engineering colleges nationwide."
  },
  {
    
    role: "School Head Girl",
    org: "Kendriya Vidyalaya Cooch Behar",
    duration: "Academic Year 2023 – 2024",
    desc: "Elected to represent the collective student body, manage student councils, direct primary assemblies, coordinate institutional leadership standards, and lead event executions."
  }
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('languages');
  const activeCat = CATEGORIES.find(c => c.key === activeCategory);

  return (
    <section className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', width: 500, height: 500, borderRadius: '50%',
        background: 'radial-gradient(circle, var(--nebula-2) 0%, transparent 70%)',
        top: '10%', right: '-10%', pointerEvents: 'none',
        animation: 'nebula-drift 14s ease-in-out infinite',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <motion.div {...fadeIn(0)} style={{ marginBottom: 60 }}>
          <div className="section-tag">
            <Brain size={12} /> Skills & Toolkit
          </div>
          <h2 className="section-title">My Technical Stack</h2>
          <p className="section-subtitle">
            A curated environment of technologies I use to develop algorithms, construct interfaces, and ship full-stack web platforms.
          </p>
        </motion.div>

        {/* Tech cloud */}
        <motion.div {...fadeIn(0.1)} className="glass-card" style={{ padding: '28px 32px', marginBottom: 48, cursor: 'none' }}>
          <p style={{
            fontFamily: 'Space Mono, monospace',
            fontSize: '0.7rem', color: 'var(--text-muted)',
            letterSpacing: '0.1em', textTransform: 'uppercase',
            marginBottom: 16,
          }}>Full Tech Cloud</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
            {allTechTags.map((tag, i) => (
              <SkillTag key={tag} name={tag} delay={i * 0.025} />
            ))}
          </div>
        </motion.div>

        {/* Category skill bars */}
        <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: 32 }} className="skills-layout">
          {/* Category Sidebar */}
          <motion.div {...fadeIn(0.2)}>
            <p style={{
              fontFamily: 'Space Mono, monospace',
              fontSize: '0.68rem', color: 'var(--text-muted)',
              letterSpacing: '0.1em', textTransform: 'uppercase',
              marginBottom: 12, paddingLeft: 4,
            }}>Categories</p>
            {CATEGORIES.map(cat => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                style={{
                  width: '100%', textAlign: 'left',
                  padding: '12px 16px',
                  marginBottom: 6,
                  background: activeCategory === cat.key ? 'var(--accent)' : 'var(--bg-glass)',
                  border: `1px solid ${activeCategory === cat.key ? 'var(--accent)' : 'var(--border)'}`,
                  borderRadius: 10,
                  color: activeCategory === cat.key ? '#fff' : 'var(--text-secondary)',
                  fontFamily: 'Syne, sans-serif',
                  fontSize: '0.88rem', fontWeight: 600,
                  cursor: 'none',
                  display: 'flex', alignItems: 'center', gap: 8,
                  transition: 'all 0.2s ease',
                }}
              >
                <span style={{ opacity: activeCategory === cat.key ? 1 : 0.6 }}>{cat.icon}</span>
                {cat.label}
                {activeCategory === cat.key && (
                  <ChevronRight size={14} style={{ marginLeft: 'auto' }} />
                )}
              </button>
            ))}
          </motion.div>

          {/* Skill bars panel */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="glass-card"
            style={{ padding: '28px 32px', cursor: 'none' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 28 }}>
              <span style={{ color: 'var(--accent)' }}>{activeCat.icon}</span>
              <h3 style={{
                fontFamily: 'Syne, sans-serif',
                fontSize: '1.2rem', color: 'var(--text-primary)',
              }}>{activeCat.label}</h3>
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
              gap: '0 32px',
            }}>
              {activeCat.data.map((skill, i) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  delay={i * 0.06}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* ==========================================================================
           RESTRUCTURED: EXPERIENCE & LEADERSHIP TIMELINE
           ========================================================================== */}
        <div style={{ marginTop: 80 }}>
          <motion.div {...fadeIn(0)}>
            <p style={{
              fontFamily: 'Space Mono, monospace', fontSize: '0.72rem',
              color: 'var(--accent)', letterSpacing: '0.12em',
              textTransform: 'uppercase', marginBottom: 12,
            }}>
              ✦ Leadership Orbit
            </p>
            <h3 style={{
              fontFamily: 'Syne, sans-serif', fontSize: '1.8rem',
              fontWeight: 800, color: 'var(--text-primary)', marginBottom: 40,
            }}>
              Experience & Leadership
            </h3>
          </motion.div>

          <div className="leadership-timeline-wrapper" style={{ position: 'relative' }}>
            {/* Center spine wire trail */}
            <div className="timeline-spine-line" style={{
              position: 'absolute', top: 0, bottom: 0, left: '50%',
              width: 2, background: 'linear-gradient(180deg, var(--border) 0%, var(--border-glow) 50%, transparent 100%)',
              transform: 'translateX(-50%)',
            }} />

            {leadershipTimeline.map((item, i) => (
              <div 
                key={i} 
                className={`timeline-item-container ${i % 2 === 0 ? 'left-align' : 'right-align'}`}
                style={{
                  display: 'flex', justifyContent: i % 2 === 0 ? 'flex-start' : 'flex-end',
                  position: 'relative', width: '100%', marginBottom: 40,
                }}
              >
                {/* Core node point */}
                <div className="timeline-node-dot" style={{
                  position: 'absolute', top: 24, left: '50%',
                  width: 16, height: 16, borderRadius: '50%',
                  background: 'var(--bg-primary)', border: '2px solid var(--accent)',
                  boxShadow: '0 0 10px var(--glow)', transform: 'translateX(-50%)',
                  zIndex: 2,
                }} />

                {/* Main description card stack */}
                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                  className="glass-card timeline-inner-card"
                  style={{
                    width: '45%', padding: '24px 28px',
                    borderRadius: 16, cursor: 'none', position: 'relative',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
                    <span style={{ fontSize: '1.4rem' }}>{item.icon}</span>
                    <div>
                      <h4 style={{
                        fontFamily: 'Syne, sans-serif', fontSize: '1.05rem',
                        fontWeight: 700, color: 'var(--text-primary)',
                      }}>{item.role}</h4>
                      <p style={{
                        fontSize: '0.8rem', color: 'var(--accent-2)',
                        fontFamily: 'DM Sans, sans-serif', fontWeight: 500, marginTop: 2,
                      }}>{item.org}</p>
                    </div>
                  </div>

                  <div style={{
                    display: 'flex', alignItems: 'center', gap: 6,
                    fontFamily: 'Space Mono, monospace', fontSize: '0.72rem',
                    color: 'var(--text-muted)', marginBottom: 14,
                  }}>
                    <Calendar size={11} /> {item.duration}
                  </div>

                  <p style={{
                    fontSize: '0.85rem', color: 'var(--text-secondary)',
                    lineHeight: 1.6, textAlign: 'left',
                  }}>
                    {item.desc}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .skills-layout { grid-template-columns: 1fr !important; }
          
          /* Flip timeline nodes to align perfectly on mobile viewports */
          .timeline-spine-line {
            left: 16px !important;
            transform: none !important;
          }
          .timeline-node-dot {
            left: 16px !important;
            transform: translateX(-50%) !important;
          }
          .timeline-item-container {
            justify-content: flex-end !important;
            padding-left: 40px;
          }
          .timeline-inner-card {
            width: 100% !important;
            padding: 20px 24px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;