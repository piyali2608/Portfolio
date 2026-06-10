import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, X, Menu } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { navLinks } from '../../data/portfolioData';

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  return (
    <>
      <nav className="navbar" style={{
        boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.2)' : 'none',
      }}>
        <NavLink to="/" className="nav-logo">PB.</NavLink>

        <ul className="nav-links">
          {navLinks.map(link => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                end={link.path === '/'}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            style={{
              width: 40, height: 40, borderRadius: '50%',
              background: 'var(--bg-glass)',
              border: '1px solid var(--border)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'none', color: 'var(--accent)',
              transition: 'all 0.2s',
            }}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </motion.button>

          <button
            className="mobile-menu-btn"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-nav-overlay"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
          >
            <button
              onClick={() => setMobileOpen(false)}
              style={{
                position: 'absolute', top: 20, right: 20,
                background: 'var(--bg-glass)', border: '1px solid var(--border)',
                borderRadius: '50%', width: 44, height: 44,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--text-primary)', cursor: 'none',
              }}
            >
              <X size={20} />
            </button>

            {navLinks.map((link, i) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                <NavLink
                  to={link.path}
                  className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                  end={link.path === '/'}
                  style={{ fontSize: '1.4rem', fontFamily: 'Syne, sans-serif', fontWeight: 700 }}
                >
                  {link.label}
                </NavLink>
              </motion.div>
            ))}

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              onClick={toggleTheme}
              style={{
                marginTop: 16, padding: '10px 24px',
                background: 'var(--bg-glass)', border: '1px solid var(--border)',
                borderRadius: 50, display: 'flex', alignItems: 'center', gap: 8,
                color: 'var(--accent)', fontFamily: 'Syne, sans-serif',
                fontSize: '0.9rem', cursor: 'none',
              }}
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
              {isDark ? 'Light Mode' : 'Dark Mode'}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
