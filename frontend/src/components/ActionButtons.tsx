import React from 'react';
import { Link } from 'react-router-dom';

export const ActionButtons: React.FC = () => {
  return (
    <div className="action-buttons-container">
      <Link to="/submit" className="action-button-primary">
        {/* You can add an icon library later to add the icon */}
        <span>Submit a Classroom Technology Request</span>
      </Link>
      
      <a href="#" className="action-button-secondary">
        110 Service Level Agreement
      </a>
    </div>
  );
};