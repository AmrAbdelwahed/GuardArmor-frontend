import React from 'react';
import Navbar from './Navbar';
import BannerBackground from "../Assets/securityguard.png";
import { Link } from 'react-router-dom';
import WhatWeDo from './WhatWeDo';
import WhereWeAre from './WhereWeAre';
import WhoWeServe from './WhoWeServe';
import About from './About';

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div
        className="home-banner-container"
        style={{
          backgroundImage: `url(${BannerBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: 'rgb(25, 24, 35)', // Fallback color
          height: '50vh',
        }}
      >
        <div className="home-text-section">
          <p style={{ color: 'white', fontSize: '45px', fontWeight: 'bold' }}>
            Find Security Guards the Easy Way.
          </p>
          <div style={{ marginTop: '30px' }}>
            <a
              href="/companies-for-hire"
              target="_blank"
              className="button-primary"
              style={{
                padding: '15px 30px',
                fontSize: '18px',
                fontWeight: 'bold',
                backgroundColor: '#2A69EF',
                color: '#fff',
                textDecoration: 'none',
                borderRadius: '8px',
              }}
            >
              Companies Start Here
            </a>

            <a
              href="/security-guard-register"
              target="_blank"
              className="button-primary w-button button-hover"
              style={{
                marginLeft: '15px',
                padding: '15px 30px',
                fontSize: '18px',
                fontWeight: 'bold',
                backgroundColor: '#2A69EF',
                color: '#fff',
                textDecoration: 'none',
                borderRadius: '8px',
              }}
            >
              SecurityGuards Start Here
            </a>
          </div>
        </div>
      </div>

      {/* Selling/Marketing Pitch */}
      <div style={{ padding: '20px', textAlign: 'center', backgroundColor: '#f9f9f9' }}>
        <p style={{ fontSize: '18px', color: '#333' }}>
          <strong>Guard Armor</strong> is driven by a commitment to the success of both security guards and companies. 
          Our Security Guard staffing services help our Security Guards industry customers staff their staffing with 
          qualified, experienced Guards, and they can help Security Guards find jobs quickly and easily.
        </p>
      </div>

      {/* Sections */}
      <div id="what-we-do">
        <WhatWeDo />
      </div>
      <div id="who-we-serve">
        <WhoWeServe />
      </div>
      <div id="about">
        <About />
      </div>
    </div>
  );
};

export default Home;
