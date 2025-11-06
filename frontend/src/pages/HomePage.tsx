import React from 'react';
import { SupportInfo } from '../components/SupportInfo';
import { ActionButtons } from '../components/ActionButtons';
import { ImageCarousel } from '../components/ImageCarousel';

import classroomImage1 from '../assets/Tuttleman 304 1.png';
import classroomImage2 from '../assets/SERC 108A.jpg';
import classroomImage3 from '../assets/Alter 602 edit.jpg';

// Array of classroom images to display in the carousel
const carouselImages = [
  { url: classroomImage1, alt: "Tuttleman 304 classroom view" },
  { url: classroomImage2, alt: "SERC 108A classroom view" },
  { url: classroomImage3, alt: "Alter 602 classroom view" },
];

export const HomePage: React.FC = () => {
  return (
    <div className="homepage-container">
      <h1>Classroom Technology Support</h1>
      <ImageCarousel 
        images={carouselImages}
        interval={5000} // every 5 seconds
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