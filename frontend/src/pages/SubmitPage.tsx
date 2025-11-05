import React from 'react';
import { SupportForm } from '../components/SupportForm'; // Import the new form

export const SubmitPage: React.FC = () => {
  return (
    <div className="submit-page-container">
      <h1>Submit a Classroom Technology Request</h1>
      <p>Please fill out this form to request help.</p>
      
      {/* This renders the form */}
      <SupportForm /> 
    </div>
  );
};