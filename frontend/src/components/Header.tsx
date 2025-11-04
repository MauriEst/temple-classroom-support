import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  // close the menu when clicking outside
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (open && menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [open]);

  return (
    <header className="main-header">
      <div className="logo-container">
        {/* Or use an <img> tag for the university logo */}
        <Link to="/">Temple Header</Link>
      </div>
    
      {/* Mobile: toggle button (three dots). Desktop: nav is visible. */}
      <div className="nav-controls" ref={menuRef}>
        <button
          className={`nav-toggle ${open ? 'open' : ''}`}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((s) => !s)}
        >
          {/* Hamburger icon: three stacked bars */}
          <span className="hamburger" aria-hidden>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>

        <nav className={`nav-menu ${open ? 'open' : ''}`} aria-hidden={!open}>
          <Link to="/" onClick={() => setOpen(false)} className="active">Home</Link>
          <a href="https://its.temple.edu" onClick={() => setOpen(false)}>ITS</a>
          <a href="https://etc.temple.edu" onClick={() => setOpen(false)}>Etc</a>
        </nav>
      </div>
    </header>
  );
};