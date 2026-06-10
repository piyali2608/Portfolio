import React, { useEffect, useRef } from 'react';
import { useTheme } from '../../context/ThemeContext';

const StarField = () => {
  const canvasRef = useRef(null);
  const { isDark } = useTheme();
  const animRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let W = window.innerWidth;
    let H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;

    const NUM_STARS = 180;
    const stars = Array.from({ length: NUM_STARS }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.8 + 0.2,
      speed: Math.random() * 0.15 + 0.02,
      opacity: Math.random() * 0.7 + 0.2,
      twinkle: Math.random() * Math.PI * 2,
      twinkleSpeed: Math.random() * 0.015 + 0.005,
    }));

    const resize = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W;
      canvas.height = H;
    };
    window.addEventListener('resize', resize);

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      stars.forEach(star => {
        star.twinkle += star.twinkleSpeed;
        const flicker = 0.5 + 0.5 * Math.sin(star.twinkle);
        const opacity = star.opacity * flicker * (isDark ? 1 : 0.4);

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fillStyle = isDark
          ? `rgba(200, 180, 255, ${opacity})`
          : `rgba(100, 50, 200, ${opacity})`;
        ctx.shadowBlur = star.r * 4;
        ctx.shadowColor = isDark
          ? `rgba(139, 92, 246, ${opacity * 0.6})`
          : `rgba(124, 58, 237, ${opacity * 0.4})`;
        ctx.fill();

        // Drift stars upward slowly
        star.y -= star.speed;
        if (star.y < -2) {
          star.y = H + 2;
          star.x = Math.random() * W;
        }
      });

      // Shooting stars occasionally
      if (Math.random() < 0.004) {
        const sx = Math.random() * W;
        const sy = Math.random() * H * 0.5;
        const len = 60 + Math.random() * 80;
        const grad = ctx.createLinearGradient(sx, sy, sx + len, sy + len * 0.4);
        grad.addColorStop(0, 'rgba(255,255,255,0)');
        grad.addColorStop(0.3, isDark ? 'rgba(139,92,246,0.8)' : 'rgba(124,58,237,0.6)');
        grad.addColorStop(1, 'rgba(255,255,255,0)');
        ctx.beginPath();
        ctx.moveTo(sx, sy);
        ctx.lineTo(sx + len, sy + len * 0.4);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      animRef.current = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animRef.current);
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed', top: 0, left: 0,
        width: '100vw', height: '100vh',
        pointerEvents: 'none', zIndex: 0,
        opacity: 0.9,
      }}
    />
  );
};

export default StarField;