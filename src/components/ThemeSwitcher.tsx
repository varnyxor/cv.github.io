import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Moon, Sun } from 'react-feather';

const ThemeSwitcher = () => {
  const { theme, toggleTheme, isAnimating } = useTheme();
  
  const handleClick = (event: React.MouseEvent) => {
    toggleTheme(event);
  };
  
  return (
    <button 
      onClick={handleClick} 
      disabled={isAnimating}
      style={{
        ...themeSwitcherStyle,
        opacity: isAnimating ? 0.5 : 1,
        cursor: isAnimating ? 'not-allowed' : 'pointer',
      }}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      aria-checked={theme === 'dark'}
      role="switch"
      title={`Currently in ${theme} mode. Click to switch to ${theme === 'light' ? 'dark' : 'light'} mode.`}
    >
      {theme === 'light' ? 
        <Moon size={18} aria-hidden="true" /> : 
        <Sun size={18} aria-hidden="true" />
      }
    </button>
  );
};

const themeSwitcherStyle: React.CSSProperties = {
    background: 'none',
    border: 'none',
    color: 'var(--link-color)',
    padding: '0',
    fontFamily: 'source-sans-pro, sans-serif',
    display: 'flex',
    alignItems: 'center',
    transition: 'opacity 0.2s ease',
};

export default ThemeSwitcher;
