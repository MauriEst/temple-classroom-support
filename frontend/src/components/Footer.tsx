import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <div className="footer-brand">
          <p>Temple University</p>
          {/* Social media icons */}
          <div className="social-icons">
            <a
              href="https://www.facebook.com/TempleUniversityITS/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Temple University ITS on Facebook"
              className="social-link"
            >
              {/* Facebook */}
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="social-svg">
                <path fill="currentColor" d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 5.02 3.66 9.18 8.44 9.95v-6.99H8.1v-2.9h2.34V9.41c0-2.31 1.38-3.58 3.5-3.58 1.01 0 2.07.18 2.07.18v2.28h-1.17c-1.15 0-1.51.72-1.51 1.46v1.75h2.57l-.41 2.9h-2.16V22c4.78-.77 8.44-4.93 8.44-9.93z" />
              </svg>
            </a>

            <a
              href="https://www.instagram.com/templeuniversityits/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Temple University ITS on Instagram"
              className="social-link"
            >
              {/* Instagram */}
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="social-svg">
                <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
              </svg>
            </a>

            <a
              href="https://twitter.com/TempleTech"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Temple Tech on X"
              className="social-link"
            >
              {/* X / Twitter */}
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="social-svg">
                <path d="M23 4.01c-.8.36-1.66.6-2.56.71.92-.56 1.62-1.44 1.95-2.5-.86.5-1.8.86-2.8 1.06a4.37 4.37 0 0 0-7.54 3c-3.64-.18-6.86-1.93-9.02-4.59-.38.66-.6 1.43-.6 2.25 0 1.55.79 2.92 1.99 3.72-.74-.02-1.44-.23-2.05-.56v.06c0 2.17 1.55 3.98 3.61 4.39-.38.1-.78.15-1.2.15-.29 0-.57-.03-.84-.08.57 1.8 2.22 3.11 4.17 3.15A8.73 8.73 0 0 1 2 19.54a12.3 12.3 0 0 0 6.66 1.95c7.98 0 12.36-6.62 12.36-12.36l-.01-.56A8.5 8.5 0 0 0 23 4.01z" fill="currentColor" />
              </svg>
            </a>
          </div>
          <p>Copyright 2025, Temple University. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};