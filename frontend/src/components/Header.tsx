import React from 'react';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  return (
    <header className="main-header">
      <div className="logo-container">
        {/* Or use an <img> tag for the university logo */}
        <Link to="/">Temple Header</Link> 
      </div>
      <nav>
        <Link to="/">Home</Link>
        <a href="https://its.temple.edu">ITS</a>
        <a href="https://etc.temple.edu">Etc</a> {/* Example external link */}
      </nav>
    </header>
  );
};