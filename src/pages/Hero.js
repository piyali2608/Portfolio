import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowRight, Mail, MapPin } from 'lucide-react';
import { GitFork, Link2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] },
});

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.9;
      videoRef.current.muted = false;
      videoRef.current.volume = 0.5;
      videoRef.current.play().catch(() => {
        if (videoRef.current) {
          videoRef.current.muted = true;
          videoRef.current.play().catch(() => {});
        }
      });
    }
  }, []);

  return (
    <section style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      paddingTop: 80, position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', width: 800, height: 800, borderRadius: '50%',
        background: 'radial-gradient(circle, var(--nebula-1) 0%, transparent 65%)',
        top: '-20%', right: '-15%', pointerEvents: 'none',
        animation: 'nebula-drift 12s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute', width: 600, height: 600, borderRadius: '50%',
        background: 'radial-gradient(circle, var(--nebula-2) 0%, transparent 65%)',
        bottom: '-5%', left: '-10%', pointerEvents: 'none',
        animation: 'nebula-drift 16s ease-in-out infinite reverse',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <div className="hero-layout">
          <div className="hero-text">
            <motion.div {...fadeUp(0.1)}>
              <div className="hero-badge">
                <span className="dot" />
                Available for opportunities
              </div>
            </motion.div>

            <motion.p {...fadeUp(0.2)} style={{
              fontFamily: 'Space Mono, monospace',
              fontSize: '0.85rem', color: 'var(--accent-2)',
              letterSpacing: '0.12em', marginBottom: 12,
            }}>
              Hello, Universe 👋
            </motion.p>

            <motion.h1 {...fadeUp(0.3)} style={{
              fontSize: 'clamp(2.6rem, 6vw, 5.5rem)',
              fontWeight: 800, lineHeight: 1.0,
              marginBottom: 18, letterSpacing: '-0.03em',
            }}>
              I'm{' '}
              <span className="gradient-text">Piyali</span>
              <br />
              <span style={{ color: 'var(--text-primary)' }}>Barman.</span>
            </motion.h1>

            <motion.div {...fadeUp(0.4)} style={{
              display: 'flex', alignItems: 'center', gap: 8,
              marginBottom: 22, minHeight: 34,
            }}>
              <span style={{
                fontFamily: 'Syne, sans-serif',
                fontSize: 'clamp(1rem, 2.5vw, 1.45rem)',
                color: 'var(--text-secondary)', fontWeight: 600,
              }}>
                <TypeAnimation
                  sequence={[
                    'Full Stack Developer', 2000,
                    'AI/ML Enthusiast', 2000,
                    'React Engineer', 2000,
                    'PyTorch Practitioner', 2000,
                    'Creative Technologist', 2000,
                  ]}
                  wrapper="span" speed={55} repeat={Infinity}
                  style={{ color: 'var(--accent)' }}
                />
              </span>
            </motion.div>

            <motion.p {...fadeUp(0.5)} style={{
              fontSize: '1.02rem', color: 'var(--text-secondary)',
              maxWidth: 500, lineHeight: 1.85, marginBottom: 36,
            }}>
              {personalInfo.bio}
            </motion.p>

            <motion.div {...fadeUp(0.6)} style={{
              display: 'flex', flexWrap: 'wrap', gap: 14, marginBottom: 44,
            }}>
              <Link to="/projects" className="btn-primary">
                <span>View My Work</span>
                <ArrowRight size={15} />
              </Link>
              <Link to="/contact" className="btn-outline">
                <Mail size={15} />
                <span>Get In Touch</span>
              </Link>
            </motion.div>

            <motion.div {...fadeUp(0.7)} style={{
              display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap',
            }}>
              {[
                { icon: <GitFork size={16} />, href: personalInfo.github, label: 'GitHub' },
                { icon: <Link2 size={16} />, href: personalInfo.linkedin, label: 'LinkedIn' },
                { icon: <Mail size={16} />, href: `mailto:${personalInfo.email}`, label: 'Email' },
              ].map(({ icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={label}
                  style={{
                    width: 42, height: 42, borderRadius: '50%',
                    background: 'var(--bg-glass)', border: '1px solid var(--border)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--text-secondary)', textDecoration: 'none',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-secondary)'; }}
                >
                  {icon}
                </motion.a>
              ))}
              <div style={{ width: 1, height: 20, background: 'var(--border)' }} />
              <span style={{
                fontFamily: 'Space Mono, monospace', fontSize: '0.68rem',
                color: 'var(--text-muted)', letterSpacing: '0.06em',
                display: 'flex', alignItems: 'center', gap: 4,
              }}>
                <MapPin size={11} /> {personalInfo.location}
              </span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotate: -4 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.1, delay: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
            className="hero-video-wrap"
          >
            <div className="orbit-outer">
              {[0, 90, 180, 270].map(deg => (
                <div key={deg} style={{
                  position: 'absolute', top: '50%', left: '50%',
                  transformOrigin: '0 0',
                  transform: `rotate(${deg}deg) translateX(calc(50% + 28px)) translateY(-50%)`,
                  width: deg % 180 === 0 ? 10 : 7,
                  height: deg % 180 === 0 ? 10 : 7,
                  borderRadius: '50%',
                  background: deg % 180 === 0 ? 'var(--accent)' : 'var(--accent-2)',
                  boxShadow: `0 0 12px ${deg % 180 === 0 ? 'var(--accent)' : 'var(--accent-2)'}`,
                }} />
              ))}
            </div>

            <div className="orbit-inner" />

            <div className="hero-video-card">
              <video
                ref={videoRef}
                src="/avatar.mp4"
                loop
                playsInline
                autoPlay
                style={{
                  width: '100%', height: '100%',
                  objectFit: 'cover', display: 'block',
                }}
              />
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0, height: '30%',
                background: 'linear-gradient(to top, rgb(6, 6, 15) 0%, transparent 100%)',
                pointerEvents: 'none',
              }} />
            </div>

            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                position: 'absolute', bottom: -14, right: -14,
                background: 'var(--bg-card)', border: '1px solid var(--border-glow)',
                borderRadius: 12, padding: '8px 14px',
                backdropFilter: 'blur(20px)', zIndex: 2,
              }}
            >
              <span style={{
                fontFamily: 'Space Mono, monospace', fontSize: '0.68rem',
                color: 'var(--accent)', letterSpacing: '0.06em',
              }}>
                 Open to Work
              </span>
            </motion.div>

            <motion.div
              animate={{ y: [5, -5, 5] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              style={{
                position: 'absolute', top: -14, left: -14,
                background: 'var(--bg-card)', border: '1px solid var(--border)',
                borderRadius: 12, padding: '8px 14px',
                backdropFilter: 'blur(20px)', zIndex: 2,
              }}
            >
              <span style={{
                fontFamily: 'Space Mono, monospace', fontSize: '0.68rem',
                color: 'var(--accent-2)', letterSpacing: '0.06em',
              }}>
                 IIITS'29
              </span>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          style={{ display: 'flex', gap: 48, marginTop: 64, flexWrap: 'wrap' }}
        >
          {[
            { value: '7+', label: 'Projects Built' },
            { value: '10+', label: 'Technologies' },
            { value: '1', label: 'Internship' },
            { value: '∞', label: 'Curiosity' },
          ].map(({ value, label }) => (
            <div key={label}>
              <div style={{
                fontFamily: 'Syne, sans-serif', fontSize: '2.2rem', fontWeight: 800,
                background: 'linear-gradient(135deg, var(--accent), var(--accent-2))',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>{value}</div>
              <div style={{
                fontSize: '0.78rem', color: 'var(--text-muted)',
                fontFamily: 'Space Mono, monospace', letterSpacing: '0.06em',
              }}>{label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .hero-layout {
          display: grid;
          grid-template-columns: 1fr 340px;
          gap: 60px;
          align-items: center;
        }
        .hero-video-wrap {
          position: relative;
          flex-shrink: 0;
        }
        .hero-video-card {
          width: 260px;
          height: 360px;
          border-radius: 24px;
          overflow: hidden;
          border: 2px solid rgba(139,92,246,0.45);
          box-shadow: 0 0 60px rgba(139,92,246,0.3), 0 0 120px rgba(139,92,246,0.12), inset 0 0 30px rgba(139,92,246,0.08);
          position: relative;
          z-index: 1;
          animation: pulse-glow 4s ease-in-out infinite;
        }
        .orbit-outer {
          position: absolute;
          inset: -28px;
          border-radius: 28px;
          border: 1px dashed rgba(139,92,246,0.25);
          animation: spin-slow 22s linear infinite;
          z-index: 0;
        }
        .orbit-inner {
          position: absolute;
          inset: -12px;
          border-radius: 30px;
          border: 1px solid rgba(6,182,212,0.2);
          animation: counter-spin 14s linear infinite;
          z-index: 0;
        }

        @media (max-width: 1024px) {
          .hero-layout {
            grid-template-columns: 1fr 280px;
            gap: 40px;
          }
          .hero-video-card { width: 220px; height: 310px; }
        }

        @media (max-width: 768px) {
          .hero-layout {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .hero-video-wrap {
            margin: 0 auto;
            width: 200px;
          }
          .hero-video-card {
            width: 200px !important;
            height: 280px !important;
          }
          .hero-text > div:last-child {
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .hero-video-card {
            width: 170px !important;
            height: 240px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;