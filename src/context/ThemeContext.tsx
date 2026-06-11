import React, { createContext, useState, useContext, ReactNode, useEffect, useRef } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: (event?: React.MouseEvent) => void;
  isAnimating: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('light');
  const [isAnimating, setIsAnimating] = useState(false);
  const isAnimatingRef = useRef(false);
  
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as Theme;
    if (storedTheme && (storedTheme === 'light' || storedTheme === 'dark')) {
      setTheme(storedTheme);
      document.documentElement.setAttribute('data-theme', storedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = (event?: React.MouseEvent) => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    setIsAnimating(true);
    
    const newTheme = theme === 'light' ? 'dark' : 'light';
    
    // Get click position
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    
    if (event) {
      const rect = event.currentTarget.getBoundingClientRect();
      x = rect.left + rect.width / 2;
      y = rect.top + rect.height / 2;
    }

    // Create a new layer with the new theme colors
    const overlay = document.createElement('div');
    overlay.className = 'theme-reveal-overlay';
    
    // Apply the new theme colors to the overlay
    const newBgColor = newTheme === 'dark' ? '#1e1e1e' : '#ffffff';
    const newTextColor = newTheme === 'dark' ? '#e0e0e0' : '#212529';
    
    overlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: ${newBgColor};
      color: ${newTextColor};
      z-index: 9998;
      pointer-events: none;
      clip-path: circle(0px at ${x}px ${y}px);
      transition: clip-path 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    `;

    // Clone the entire page content into the overlay
    const contentClone = document.body.cloneNode(true) as HTMLElement;
    
    // Apply new theme to the cloned content
    contentClone.setAttribute('data-theme', newTheme);
    contentClone.style.cssText = `
      background: ${newBgColor};
      color: ${newTextColor};
      margin: 0;
      padding: 0;
    `;
    
    overlay.appendChild(contentClone);
    document.body.appendChild(overlay);

    // Start the reveal animation
    requestAnimationFrame(() => {
      overlay.style.clipPath = `circle(150vmax at ${x}px ${y}px)`;
    });

    // Change the actual theme partway through
    setTimeout(() => {
      setTheme(newTheme);
    }, 400);

    let cleanupTimeout: number | undefined;
    let cleaned = false;
    const cleanup = () => {
      if (cleaned) return;
      cleaned = true;
      if (cleanupTimeout) {
        window.clearTimeout(cleanupTimeout);
      }
      if (overlay.parentNode) {
        overlay.parentNode.removeChild(overlay);
      }
      isAnimatingRef.current = false;
      setIsAnimating(false);
    };

    overlay.addEventListener('transitionend', cleanup, { once: true });
    cleanupTimeout = window.setTimeout(cleanup, 900);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isAnimating }}> {/* ADD isAnimating HERE */}
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
