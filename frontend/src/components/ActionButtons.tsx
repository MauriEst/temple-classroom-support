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

        .action-button-primary,
        .action-button-secondary {
          display: flex;
          align-items: center;
          padding: 12px 20px;
          border-radius: 8px;
          transition: all 0.2s ease;
          text-decoration: none;
          width: 100%;
          margin-bottom: 12px;
        }

        .action-button-primary {
          background-color: #9E1B34; /* Temple Red */
          color: white;
          border: none;
        }

        .action-button-primary:hover {
          background-color: #A41926; /* Darker shade */
          transform: translateY(-1px);
        }

        .action-button-secondary {
          background-color: transparent;
          color: #9E1B34;
          border: 2px solid #9E1B34;
        }

        .action-button-secondary .circle-arrow-icon {
          color: #9E1B34;
        }

        .action-button-secondary:hover {
          background-color: rgba(190, 30, 45, 0.1);
        }

        .action-buttons-container {
          display: flex;
          flex-direction: column;
          gap: 12px;
          width: 100%;
          max-width: 600px;
        }
      `}</style>
    </div>
  );
};