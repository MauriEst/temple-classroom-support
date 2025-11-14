import React from 'react';
import { Link } from 'react-router-dom';

const CircleArrowIcon = () => (
  <svg 
    className="circle-arrow-icon" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="2"/>
    <path 
      d="M12 7L16 11.5L12 16M16 11.5H8" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

export const ActionButtons: React.FC = () => {
  return (
    <div className="action-buttons-container">
      <Link to="/submit" className="action-button-primary">
        <CircleArrowIcon />
        <span>Submit a Classroom Technology Request</span>
      </Link>
      <Link to="/#" className="action-button-primary">
        <CircleArrowIcon />
        <span>Support is available for classrooms listed on this site</span>
      </Link>
      
      <a href="#" className="action-button-secondary">
        110 Service Level Agreement
      </a>

      <style>{`
        .circle-arrow-icon {
          color: white;
          margin-right: 8px;
          flex-shrink: 0;
        }
      `}</style>
    </div>
  );
};