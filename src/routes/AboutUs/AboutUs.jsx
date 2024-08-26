// src/routes/AboutUs/AboutUs.jsx
import React from 'react';
import './AboutUs.scss';

const AboutUs = () => {
  return (
    <div className="about-us">
      <h1>About GharKhoje</h1>
      <p>
        Welcome to <strong>GharKhoje</strong>, your trusted real estate platform for finding your dream home. We are two passionate individuals, Kamal Subedi and Gaurav Acharya, who have come together to create this platform as our final year project.
      </p>
      <p>
        Our goal is to simplify the process of finding and buying a home by providing a user-friendly platform that connects buyers with sellers. We understand that finding the perfect home can be a daunting task, and we’re here to make it easier for you.
      </p>
      <p>
        As computer science students, we have combined our technical skills and love for real estate to build a platform that is both functional and efficient. We are committed to delivering a seamless experience to our users and continuously improving our platform based on feedback.
      </p>
      <p>
        Thank you for choosing GharKhoje. We hope you find your dream home with us!
      </p>
      <div className="team">
        <h2>Our Team</h2>
        <ul>
          <li><strong>Kamal Subedi</strong> - Co-Founder & Developer</li>
          <li><strong>Gaurav Acharya</strong> - Co-Founder & Developer</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
