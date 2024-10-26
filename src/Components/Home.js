import React from 'react'
import Navbar from './Navbar'
import BannerBackground from "../Assets/securityguard.png"
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
        <Navbar/> 
        <div className="home-banner-container"  style={{
          backgroundImage: `url(${BannerBackground})`,
          backgroundSize: 'cover', // This ensures the image covers the entire div
          backgroundPosition: 'center', // This centers the image in the div
          backgroundColor: 'rgb(25, 24, 35)', // Fallback color
          height: '100vh', // Optional: Set a height for the banner
         }}>
          <div className="home-text-section">
            <h1 className="primary-heading">
              GUARD ARMOR SECURITY
            </h1>
            <p className="primary-text">
            Your trusted partner in safeguarding assets and ensuring peace of mind.</p>
            <Link to="/getStarted" className="secondary-button">
              Lets Try <FiArrowRight/>
            </Link>
          </div>
        </div>
      </div>
  );
};

export default Home;