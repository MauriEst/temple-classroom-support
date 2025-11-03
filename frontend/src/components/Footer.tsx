import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <div className="footer-brand">
          <p>Site name</p>
          {/* Social media icons would go here */}
        </div>
        <div className="footer-links">
          <div className="link-column">
            <h4>Topic</h4>
            <a href="#">Page</a>
            <a href="#">Page</a>
          </div>
          <div className="link-column">
            <h4>Topic</h4>
            <a href="#">Page</a>
            <a href="#">Page</a>
          </div>
          <div className="link-column">
            <h4>Topic</h4>
            <a href="#">Page</a>
            <a href="#">Page</a>
          </div>
        </div>
      </div>
    </footer>
  );
};