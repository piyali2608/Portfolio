import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import { ThemeProvider } from './context/ThemeContext';
import './styles/globals.css';

import CursorSpiral from './components/Cursor/CursorSpiral';
import StarField from './components/StarField/StarField';
import Navbar from './components/Navbar/Navbar';
import ScrollProgress from './components/ScrollProgress/ScrollProgress';
import IntroScreen from './components/Intro/IntroScreen';
import Chatbot from './components/Chatbot/Chatbot';
import CosmicSmoke from './components/Background/CosmicSmoke';

import Hero from './pages/Hero';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Contact from './pages/Contact';

const PageTransition = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -16 }}
    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Hero /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/skills" element={<PageTransition><Skills /></PageTransition>} />
        <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
        <Route path="/experience" element={<PageTransition><Experience /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        <Route path="*" element={<PageTransition><Hero /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

function AppInner() {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <>
      {/* High-fidelity custom trailing cursor */}
      <CursorSpiral />
      
      {/* Dynamic Intro Welcome Sequencer */}
      {!introComplete && <IntroScreen onComplete={() => setIntroComplete(true)} />}
      
      {/* Main Portfolio Shell */}
      {introComplete && (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5 }}
        >
          {/* Interstellar background elements & organic floating smoke engine */}
          <StarField />
          <CosmicSmoke />
          
          <ScrollProgress />
          <Navbar />
          
          {/* Main Content Router Framework */}
          <main style={{ paddingTop: 70, position: 'relative', zIndex: 1 }}>
            <AnimatedRoutes />
          </main>
          
          <Chatbot />
          
          {/* Global Sticky Footer Layout */}
          <footer style={{
            borderTop: '1px solid var(--border)',
            padding: '32px 24px', 
            textAlign: 'center',
            position: 'relative', 
            zIndex: 1,
          }}>
            <p style={{
              fontFamily: 'Space Mono, monospace',
              fontSize: '0.75rem', 
              color: 'var(--text-muted)', 
              letterSpacing: '0.06em',
            }}>
              Created by <span style={{ color: 'var(--accent)' }}>Piyali Barman</span>
              {' '}· {new Date().getFullYear()} · Built with React & Framer Motion
            </p>
          </footer>
        </motion.div>
      )}
    </>
  );
}

function App() {
  return (
    <Router>
      <ThemeProvider>
        <AppInner />
      </ThemeProvider>
    </Router>
  );
}

export default App;