import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // 1. Guarantee initial state defaults directly to true (Dark Theme)
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : true;
  });

  // 2. Sync theme classes directly to the root DOM element
  useEffect(() => {
    const bodyEl = window.document.body;
    if (isDark) {
      bodyEl.classList.add('theme-dark');
      bodyEl.classList.remove('theme-light');
      localStorage.setItem('theme', 'dark');
    } else {
      bodyEl.classList.add('theme-light');
      bodyEl.classList.remove('theme-dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);