import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const IntroScreen = ({ onComplete }) => {
  const [phase, setPhase] = useState('video');
  const [progress, setProgress] = useState(0);
  const [audioUnlocked, setAudioUnlocked] = useState(false);
  const videoRef = useRef(null);
  const timerRef = useRef(null);

  // Try to play with audio on first user interaction
  const handleUnlockAudio = () => {
    if (videoRef.current && !audioUnlocked) {
      videoRef.current.muted = false;
      videoRef.current.volume = 0.7;
      videoRef.current.play().catch(() => {
        videoRef.current.muted = true;
        videoRef.current.play();
      });
      setAudioUnlocked(true);
    }
  };

  useEffect(() => {
    // Attempt autoplay with sound (may be blocked by browser)
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.volume = 0.7;
      videoRef.current.play().catch(() => {
        // Browser blocked autoplay with sound, fallback to muted
        if (videoRef.current) {
          videoRef.current.muted = true;
          videoRef.current.play().catch(() => {});
        }
      });
    }

    const start = Date.now();
    const duration = 4000;
    const tick = () => {
      const elapsed = Date.now() - start;
      const p = Math.min((elapsed / duration) * 100, 100);
      setProgress(p);
      if (p < 100) timerRef.current = requestAnimationFrame(tick);
    };
    timerRef.current = requestAnimationFrame(tick);

    const t1 = setTimeout(() => setPhase('text'), 1200);
    const t2 = setTimeout(() => setPhase('exit'), 3600);
    const t3 = setTimeout(() => onComplete(), 4200);

    return () => {
      cancelAnimationFrame(timerRef.current);
      clearTimeout(t1); clearTimeout(t2); clearTimeout(t3);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== 'exit' ? (
        <motion.div
          key="intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          onClick={handleUnlockAudio}
          style={{
            position: 'fixed', inset: 0, zIndex: 10000,
            background: '#06060f',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            overflow: 'hidden', cursor: 'none',
          }}
        >
          {/* Nebula blobs */}
          <div style={{
            position: 'absolute', width: 700, height: 700, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 70%)',
            top: '-10%', left: '5%', filter: 'blur(60px)',
            animation: 'nebula-drift 8s ease-in-out infinite',
          }} />
          <div style={{
            position: 'absolute', width: 500, height: 500, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%)',
            bottom: '5%', right: '5%', filter: 'blur(60px)',
            animation: 'nebula-drift 10s ease-in-out infinite reverse',
          }} />

          {/* ===== FULL-SCREEN VIDEO BACKGROUND ===== */}
          <div style={{
            position: 'absolute', inset: 0,
            overflow: 'hidden', zIndex: 0,
          }}>
            <video
              ref={videoRef}
              src="/avatar.mp4"
              autoPlay
              loop
              playsInline
              style={{
                width: '100%', height: '100%',
                objectFit: 'cover',
                opacity: 0.55,
                filter: 'brightness(0.7) saturate(1.2)',
              }}
            />
            {/* Dark gradient overlay so text is readable */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to top, rgba(6,6,15,0.95) 0%, rgba(6,6,15,0.3) 50%, rgba(6,6,15,0.7) 100%)',
            }} />
          </div>

          {/* Stars overlay */}
          {[...Array(30)].map((_, i) => (
            <div key={i} style={{
              position: 'absolute',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: Math.random() * 2 + 1,
              height: Math.random() * 2 + 1,
              borderRadius: '50%',
              background: 'white',
              opacity: Math.random() * 0.5 + 0.2,
              animation: `blink ${2 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
              zIndex: 1,
            }} />
          ))}

          {/* Content overlay */}
          <div style={{
            position: 'relative', zIndex: 2,
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', gap: 0,
          }}>
            {/* Orbit rings around avatar area */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.9, ease: [0.34, 1.56, 0.64, 1] }}
              style={{ position: 'relative', marginBottom: 36 }}
            >
              <div style={{
                position: 'absolute', inset: -28, borderRadius: '50%',
                border: '1px solid rgba(139,92,246,0.4)',
                animation: 'spin-slow 8s linear infinite',
              }}>
                <div style={{
                  position: 'absolute', top: -5, left: '50%',
                  transform: 'translateX(-50%)',
                  width: 10, height: 10, borderRadius: '50%',
                  background: '#8b5cf6', boxShadow: '0 0 16px #8b5cf6',
                }} />
              </div>
              <div style={{
                position: 'absolute', inset: -48, borderRadius: '50%',
                border: '1px solid rgba(6,182,212,0.25)',
                animation: 'counter-spin 14s linear infinite',
              }}>
                <div style={{
                  position: 'absolute', bottom: -4, left: '50%',
                  transform: 'translateX(-50%)',
                  width: 7, height: 7, borderRadius: '50%',
                  background: '#06b6d4', boxShadow: '0 0 12px #06b6d4',
                }} />
              </div>

              {/* Avatar circle */}
              <div style={{
                width: 130, height: 130, borderRadius: '50%',
                overflow: 'hidden',
                border: '2.5px solid rgba(139,92,246,0.7)',
                boxShadow: '0 0 50px rgba(139,92,246,0.5), 0 0 100px rgba(139,92,246,0.2)',
                position: 'relative', zIndex: 2,
                animation: 'pulse-glow 3s ease-in-out infinite',
              }}>
                <video
                  src="/avatar.mp4"
                  autoPlay muted loop playsInline
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </motion.div>

            {/* Name & tagline */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: phase === 'text' || phase === 'exit' ? 1 : 0, y: phase === 'text' || phase === 'exit' ? 0 : 24 }}
              transition={{ duration: 0.7 }}
              style={{ textAlign: 'center' }}
            >
              <h1 style={{
                fontFamily: 'Syne, sans-serif', fontWeight: 800,
                fontSize: 'clamp(2.4rem, 7vw, 4rem)',
                background: 'linear-gradient(135deg, #f0f0ff 20%, #c084fc 55%, #06b6d4 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                letterSpacing: '-0.03em', marginBottom: 10,
                textShadow: 'none',
              }}>
                Piyali Barman
              </h1>
              <p style={{
                fontFamily: 'Space Mono, monospace',
                fontSize: 'clamp(0.65rem, 2vw, 0.82rem)',
                color: 'rgba(192, 132, 252, 0.9)',
                letterSpacing: '0.2em', textTransform: 'uppercase',
              }}>
                Full Stack Developer · AI/ML Enthusiast
              </p>
            </motion.div>
          </div>

          {/* Audio hint */}
          {!audioUnlocked && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              style={{
                position: 'absolute', top: 24, right: 24,
                padding: '6px 14px',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: 50,
                fontFamily: 'Space Mono, monospace',
                fontSize: '0.65rem', color: 'rgba(255,255,255,0.4)',
                letterSpacing: '0.06em', zIndex: 3,
              }}
            >
              🔊 tap for audio
            </motion.div>
          )}

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{
              position: 'absolute', bottom: 40,
              width: 220, zIndex: 2,
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
            }}
          >
            <div style={{
              width: '100%', height: 2,
              background: 'rgba(255,255,255,0.06)',
              borderRadius: 1, overflow: 'hidden',
            }}>
              <div style={{
                height: '100%', width: `${progress}%`,
                background: 'linear-gradient(90deg, #8b5cf6, #06b6d4)',
                borderRadius: 1, transition: 'width 0.05s linear',
              }} />
            </div>
            <span style={{
              fontFamily: 'Space Mono, monospace',
              fontSize: '0.65rem', color: 'rgba(255,255,255,0.25)',
              letterSpacing: '0.12em',
            }}>
              ENTERING THE UNIVERSE...
            </span>
          </motion.div>

          {/* Floating particles */}
          {[...Array(14)].map((_, i) => (
            <div key={`p${i}`} style={{
              position: 'absolute',
              left: `${5 + Math.random() * 90}%`,
              top: `${5 + Math.random() * 90}%`,
              width: Math.random() * 3 + 1, height: Math.random() * 3 + 1,
              borderRadius: '50%',
              background: i % 2 === 0 ? '#8b5cf6' : '#06b6d4',
              opacity: Math.random() * 0.5 + 0.2,
              animation: `float-particle ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
              zIndex: 1,
            }} />
          ))}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default IntroScreen;
