import React from 'react';
import { SupportInfo } from '../components/SupportInfo';
import { ActionButtons } from '../components/ActionButtons';

import classroomImageUrl from '../assets/Tuttleman 304 1.png'; 

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
        Classroom Technology Support (CTS) department is always available to assist with your classroom needs with both speed and intelligence.  We utilize our state-of-the-art technology to streamline and provide efficient support while enhancing the faculty and student experience to optimize the academic pedagogy.  So, whenever you need support within your classroom we provide it by phone, email, or easy to find help button within your learning space.  We are ready, skilled, and willing to quickly get your classes operating at a high level. 
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