import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Star, Code2, Layers, Brain, GitFork, ArrowUpRight } from 'lucide-react';
import { projects } from '../data/portfolioData';

const FILTERS = ['All', 'Full Stack', 'AI/ML'];

const categoryColor = (cat) =>
  cat === 'AI/ML'
    ? { bg: 'rgba(6,182,212,0.12)', border: 'rgba(6,182,212,0.3)', text: 'var(--accent-2)' }
    : { bg: 'rgba(139,92,246,0.12)', border: 'rgba(139,92,246,0.3)', text: 'var(--accent)' };

const ProjectCard = ({ project, index }) => {
  const col = categoryColor(project.category);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      style={{
        position: 'relative', borderRadius: 20,
        background: 'var(--bg-card)',
        backdropFilter: 'blur(20px)',
        border: '1px solid var(--border)',
        padding: '28px 26px 24px',
        display: 'flex', flexDirection: 'column',
        transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)',
        overflow: 'hidden',
        cursor: 'none',
      }}
      whileHover={{
        y: -8, scale: 1.015,
        borderColor: 'var(--border-glow)',
        boxShadow: '0 30px 60px rgba(0,0,0,0.3), 0 0 40px var(--glow)',
      }}
    >
      {/* Top glow line on hover */}
      <div style={{
        position: 'absolute', top: 0, left: '15%', right: '15%', height: 1,
        background: 'linear-gradient(90deg, transparent, var(--accent), var(--accent-2), transparent)',
        opacity: 0.4,
      }} />

      {/* Header row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: 5,
          padding: '3px 10px',
          background: col.bg, border: `1px solid ${col.border}`,
          borderRadius: 50,
          fontFamily: 'Space Mono, monospace', fontSize: '0.65rem',
          color: col.text, letterSpacing: '0.05em',
        }}>
          {project.category === 'AI/ML' ? <Brain size={10} /> : <Layers size={10} />}
          {project.category}
        </span>
        {project.featured && (
          <span style={{
            display: 'flex', alignItems: 'center', gap: 4,
            padding: '3px 10px',
            background: 'rgba(250,204,21,0.08)',
            border: '1px solid rgba(250,204,21,0.25)',
            borderRadius: 50,
            fontFamily: 'Space Mono, monospace', fontSize: '0.62rem',
            color: '#facc15',
          }}>
            <Star size={9} fill="#facc15" /> Featured
          </span>
        )}
      </div>

      {/* Title */}
      <h3 style={{
        fontFamily: 'Syne, sans-serif', fontSize: '1.15rem', fontWeight: 700,
        color: 'var(--text-primary)', marginBottom: 10,
      }}>{project.title}</h3>

      {/* Description */}
      <p style={{
        fontSize: '0.855rem', color: 'var(--text-secondary)',
        lineHeight: 1.75, marginBottom: 20, flex: 1,
      }}>{project.description}</p>

      {/* Tech tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 22 }}>
        {project.tech.map(t => (
          <span key={t} className="tech-tag" style={{ fontSize: '0.7rem' }}>{t}</span>
        ))}
      </div>

      {/* Links */}
      <div style={{ display: 'flex', gap: 10, marginTop: 'auto' }}>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
            padding: '9px 14px',
            background: 'var(--bg-glass)', border: '1px solid var(--border)',
            borderRadius: 10, color: 'var(--text-secondary)',
            fontSize: '0.8rem', textDecoration: 'none',
            fontFamily: 'Syne, sans-serif', fontWeight: 600,
            transition: 'all 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-secondary)'; }}
        >
          <GitFork size={13} /> GitHub
        </a>
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
            padding: '9px 14px',
            background: 'linear-gradient(135deg, var(--accent), var(--accent-2))',
            border: 'none', borderRadius: 10, color: '#fff',
            fontSize: '0.8rem', textDecoration: 'none',
            fontFamily: 'Syne, sans-serif', fontWeight: 600,
            transition: 'all 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
          onMouseLeave={e => e.currentTarget.style.opacity = '1'}
        >
          <ArrowUpRight size={13} /> View Project
        </a>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <section className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Nebula bg */}
      <div style={{
        position: 'absolute', width: 700, height: 700, borderRadius: '50%',
        background: 'radial-gradient(circle, var(--nebula-1) 0%, transparent 70%)',
        bottom: '-10%', right: '-5%', pointerEvents: 'none',
        animation: 'nebula-drift 16s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute', width: 400, height: 400, borderRadius: '50%',
        background: 'radial-gradient(circle, var(--nebula-2) 0%, transparent 70%)',
        top: '20%', left: '-8%', pointerEvents: 'none',
        animation: 'nebula-drift 20s ease-in-out infinite reverse',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 48 }}
        >
          <div className="section-tag"><Code2 size={12} /> Projects</div>
          <h2 className="section-title">Things I've Built</h2>
          <p className="section-subtitle">
            Real projects spanning full-stack platforms, AI systems, and developer tooling.
          </p>
        </motion.div>

        {/* Filter + GitHub link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ display: 'flex', gap: 10, marginBottom: 40, flexWrap: 'wrap', alignItems: 'center' }}
        >
          {FILTERS.map(f => (
            <motion.button
              key={f}
              onClick={() => setFilter(f)}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: '8px 22px', borderRadius: 50,
                background: filter === f
                  ? 'linear-gradient(135deg, var(--accent), var(--accent-2))'
                  : 'var(--bg-glass)',
                border: `1px solid ${filter === f ? 'transparent' : 'var(--border)'}`,
                color: filter === f ? '#fff' : 'var(--text-secondary)',
                fontFamily: 'Syne, sans-serif', fontSize: '0.85rem', fontWeight: 600,
                cursor: 'none', transition: 'all 0.25s ease',
                boxShadow: filter === f ? '0 4px 20px var(--glow)' : 'none',
              }}
            >
              {f}
            </motion.button>
          ))}
          <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginLeft: 4 }}>
            — {filtered.length} project{filtered.length !== 1 ? 's' : ''}
          </span>

          <a
            href="https://github.com/piyali2608"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              marginLeft: 'auto',
              display: 'flex', alignItems: 'center', gap: 6,
              padding: '8px 20px', borderRadius: 50,
              background: 'var(--bg-glass)', border: '1px solid var(--border)',
              color: 'var(--text-secondary)', textDecoration: 'none',
              fontFamily: 'Syne, sans-serif', fontSize: '0.82rem', fontWeight: 500,
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-secondary)'; }}
          >
            <GitFork size={14} /> All Repos
          </a>
        </motion.div>

        {/* Grid */}
        <motion.div
          layout
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: 24,
          }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            marginTop: 64, textAlign: 'center',
            padding: '48px 32px',
            background: 'var(--bg-card)', backdropFilter: 'blur(20px)',
            border: '1px solid var(--border)', borderRadius: 24,
            position: 'relative', overflow: 'hidden',
          }}
        >
          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse at center, var(--glow) 0%, transparent 70%)',
            opacity: 0.3, pointerEvents: 'none',
          }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h3 style={{
              fontFamily: 'Syne, sans-serif', fontSize: '1.5rem',
              color: 'var(--text-primary)', marginBottom: 10,
            }}>
              More on GitHub
            </h3>
            <p style={{
              color: 'var(--text-secondary)', fontSize: '0.95rem',
              maxWidth: 440, margin: '0 auto 28px', lineHeight: 1.7,
            }}>
              Experiments, open-source contributions, and work-in-progress projects live on my GitHub profile.
            </p>
            <a
              href="https://github.com/piyali2608"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ display: 'inline-flex' }}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <GitFork size={16} /> Visit GitHub Profile
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;