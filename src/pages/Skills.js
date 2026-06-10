import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Layers, Server, Brain, Wrench, ChevronRight } from 'lucide-react';
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
  'Vercel', 'Figma', 'OvenCV', 'Pandas', 'NumPy',
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
            <Brain size={12} /> Skills & Technologies
          </div>
          <h2 className="section-title">My Toolkit</h2>
          <p className="section-subtitle">
            A curated set of technologies I use to build, train, and ship things.
          </p>
        </motion.div>

        {/* Tech cloud */}
        <motion.div {...fadeIn(0.1)} style={{
          padding: '28px 32px',
          background: 'var(--bg-card)',
          border: '1px solid var(--border)',
          borderRadius: 20,
          backdropFilter: 'blur(20px)',
          marginBottom: 48,
        }}>
          <p style={{
            fontFamily: 'Space Mono, monospace',
            fontSize: '0.7rem', color: 'var(--text-muted)',
            letterSpacing: '0.1em', textTransform: 'uppercase',
            marginBottom: 16,
          }}> Full Tech Cloud</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
            {allTechTags.map((tag, i) => (
              <SkillTag key={tag} name={tag} delay={i * 0.025} />
            ))}
          </div>
        </motion.div>

        {/* Category skill bars */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '220px 1fr',
          gap: 32,
        }}
          className="skills-layout"
        >
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
            style={{
              padding: '28px 32px',
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: 20,
              backdropFilter: 'blur(20px)',
            }}
          >
            <div style={{
              display: 'flex', alignItems: 'center', gap: 10,
              marginBottom: 28,
            }}>
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

        {/* Currently Learning */}
        <motion.div {...fadeIn(0.4)} style={{
          marginTop: 32, padding: '24px 32px',
          background: 'linear-gradient(135deg, rgba(139,92,246,0.08) 0%, rgba(6,182,212,0.08) 100%)',
          border: '1px solid var(--border-glow)',
          borderRadius: 16,
          display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap',
        }}>
          <span style={{ fontSize: 24 }}></span>
          <div>
            <p style={{
              fontFamily: 'Syne, sans-serif', fontWeight: 700,
              color: 'var(--text-primary)', marginBottom: 4,
            }}>Currently Exploring</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem' }}>
              Rust · WebAssembly · RAG Pipelines · Diffusion Models · Edge AI Deployment
            </p>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .skills-layout { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default Skills;
