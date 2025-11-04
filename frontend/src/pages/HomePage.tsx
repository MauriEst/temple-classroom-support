import React from 'react';
import { SupportInfo } from '../components/SupportInfo';
import { ActionButtons } from '../components/ActionButtons';

// Use an existing asset to avoid build error when the original image is missing
import classroomImageUrl from '../assets/react.svg'; 

export const HomePage: React.FC = () => {
  return (
    <div className="homepage-container">
      <h1>Classroom Technology Support</h1>
      <img 
        src={classroomImageUrl} 
        alt="University classroom" 
        className="hero-image" 
      />

      <section className="overview">
        <h2>Overview</h2>
        <p>
          Classroom Technology Support (CTS) is available to assist with classroom needs quickly and professionally. We use modern tools to provide efficient support and improve the experience for faculty and students. When you need help in a classroom, we are available by phone, email, or the help button in your learning space.
        </p>
      </section>

      {/* This section will hold the two-column layout */}
      <section className="support-grid">
        <SupportInfo />
        <ActionButtons />
      </section>
    </div>
  );
};