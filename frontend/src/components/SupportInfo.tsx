import React from 'react';

export const SupportInfo: React.FC = () => {
  return (
    <div className="support-info-box">
      <h3>Classroom Tech Support</h3>
      <p>Support Hours:</p>
      <ul>
        <li>Monday - Thursday: 8 AM - 9 PM</li>
        <li>Friday: 8 AM - 5 PM</li>
        <li>Limited Support: 8:00PM - 10:00PM</li>
        <li>Saturdays - Sundays: 8:00AM - 5:00PM</li>
      </ul>
      <p>Email: ctshelp@temple.edu</p>
      <p>Phone: (215) 204-0797</p>
    </div>
  );
};