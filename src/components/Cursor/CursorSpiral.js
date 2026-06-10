import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from '../../context/ThemeContext';

const SPIRAL_POINTS = 24;

const CursorSpiral = () => {
  const { isDark } = useTheme();
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const canvasRef = useRef(null);
  const trailRef = useRef([]);
  const animFrameRef = useRef(null);
  const mouseRef = useRef({ x: -200, y: -200 });
  const ringPosRef = useRef({ x: -200, y: -200 });
  const [isHovering, setIsHovering] = useState(false);

  // Guard theme context values against stale animation closures via active refs
  const isDarkRef = useRef(isDark);
  useEffect(() => {
    isDarkRef.current = isDark;
  }, [isDark]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const onMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      mouseRef.current = { x, y };
      trailRef.current.push({ x, y, age: 0 });
      if (trailRef.current.length > SPIRAL_POINTS) {
        trailRef.current.shift();
      }
    };

    const onHoverIn = (e) => {
      if (e.target.closest('a, button, input, textarea, [data-cursor="hover"]')) {
        setIsHovering(true);
      }
    };
    const onHoverOut = () => setIsHovering(false);

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onHoverIn);
    document.addEventListener('mouseout', onHoverOut);

    const render = () => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseRef.current.x}px, ${mouseRef.current.y}px, 0) translate(-50%, -50%)`;
      }

      ringPosRef.current.x += (mouseRef.current.x - ringPosRef.current.x) * 0.12;
      ringPosRef.current.y += (mouseRef.current.y - ringPosRef.current.y) * 0.12;
      
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPosRef.current.x}px, ${ringPosRef.current.y}px, 0) translate(-50%, -50%)`;
      }

      trailRef.current = trailRef.current.map(p => ({ ...p, age: p.age + 1 }));

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (trailRef.current.length > 2) {
        for (let i = 1; i < trailRef.current.length; i++) {
          const p = trailRef.current[i];
          const prev = trailRef.current[i - 1];
          const t = i / trailRef.current.length;
          const alpha = t * 0.6;
          const hue = 260 + t * 60;
          const width = t * 3;

          // DYNAMIC VISIBILITY PROFILE: Dark theme gets bright 70% light glows, light theme gets rich 45% contrast paths
          const lightness = isDarkRef.current ? '70%' : '45%';

          const angle = (i / SPIRAL_POINTS) * Math.PI * 4;
          const spiralRadius = (1 - t) * 12;
          const sx = p.x + Math.cos(angle) * spiralRadius;
          const sy = p.y + Math.sin(angle) * spiralRadius;
          const sx2 = prev.x + Math.cos(angle - 0.3) * spiralRadius;
          const sy2 = prev.y + Math.sin(angle - 0.3) * spiralRadius;

          ctx.beginPath();
          ctx.moveTo(sx2, sy2);
          ctx.lineTo(sx, sy);
          ctx.strokeStyle = `hsla(${hue}, 90%, ${lightness}, ${alpha})`;
          ctx.lineWidth = width;
          ctx.lineCap = 'round';
          ctx.shadowBlur = isDarkRef.current ? 8 : 2;
          ctx.shadowColor = `hsla(${hue}, 90%, ${lightness}, 0.4)`;
          ctx.stroke();
        }
      }

      animFrameRef.current = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onHoverIn);
      document.removeEventListener('mouseout', onHoverOut);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  // Compute blend configurations contextually
  const currentBlend = isDark ? 'screen' : 'normal';

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed', top: 0, left: 0,
          pointerEvents: 'none', zIndex: 9996,
          mixBlendMode: currentBlend,
        }}
      />
      <div
        ref={dotRef}
        className="cursor-dot"
        style={{
          width: isHovering ? '14px' : '8px',
          height: isHovering ? '14px' : '8px',
          background: isHovering ? 'var(--accent-2)' : 'var(--accent)',
          borderRadius: '50%',
          mixBlendMode: currentBlend,
          boxShadow: isHovering && isDark ? '0 0 20px var(--accent-2)' : 'none',
          transition: 'width 0.2s, height 0.2s, background 0.2s, box-shadow 0.2s',
        }}
      />
      <div
        ref={ringRef}
        className="cursor-ring"
        style={{
          width: isHovering ? '50px' : '36px',
          height: isHovering ? '50px' : '36px',
          border: `1.5px solid ${isHovering ? 'var(--accent-2)' : 'var(--accent)'}`,
          borderRadius: '50%',
          mixBlendMode: currentBlend,
          opacity: isDark ? 0.7 : 0.9,
        }}
      />
    </>
  );
};

export default CursorSpiral;