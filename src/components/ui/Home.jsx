import React from 'react';
import HowItWorks from './HowItWorks';
import WhereWeAre from './WhereWeAre';
import Benefits from './Benefits';
import StreamlineHiring from './StreamlineHiring';
import GuardTypes from './GuardTypes';
import Pricing from './Pricing';
import About from './About';
import ThreeImages from './ThreeImages';
import LogoGrid from './LogoGrid';
import image1 from '@/assets/car-guard.jpg';
import image2 from '@/assets/two-guards.jpg';
import image3 from '@/assets/guardback.jpg';
import rafih from '@/assets/rafih-logo-hd.jpg';
import remax from '@/assets/remax.png';
import scotlynn from '@/assets/scotlynn.png';
import metroscg from '@/assets/metroscg.jpg';
import mikhaiellogistics from '@/assets/mikhaiellogistics.jpeg';
import myyellow from '@/assets/myyellow.jpg';
import suretrack from '@/assets/suretrack.jpg';
import BannerBackground from "@/assets/securityguard.png";
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="relative w-full">
      <Navbar />
      <div
        className="relative h-[50vh] bg-[rgb(25,24,35)] bg-center bg-cover"
        style={{
          backgroundImage: `url(${BannerBackground})`
        }}
      >
        <div className="px-4 py-12 md:px-8">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-8">
            Find Security Guards the Easy Way.
          </h1>
         
          <div className="flex flex-wrap justify-center sm:justify-start sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-20 mb-4">
            {/* Companies Start Here Button */}
            <Link
              to="/companies-for-hire"
              target="_blank"
              className="inline-block px-8 py-4 text-xl font-bold text-white bg-[#2A69EF] rounded-lg text-center  hover:bg-gray-900 transition-colors duration-300 w-full sm:w-80 sm:mx-2"
              >
              Companies Start Here
            </Link>
            {/* Security Guards Start Here Button */}
            <Link
              to="/security-guard-register"
              target="_blank"
              className="inline-block px-8 py-4 text-xl font-bold text-white bg-[#2A69EF] rounded-lg text-center  hover:bg-gray-900 transition-colors duration-300 w-full sm:w-80 sm:mx-2"
              >
              Security Guards Start Here
            </Link>
          </div>
        </div>
      </div>
      {/* Selling/Marketing Pitch */}
      {/* Sections */}
      <div id="how-it-works">
        <HowItWorks />
      </div>
      <div id="where-we-are">
        <WhereWeAre />
      </div>
      <div id="benefits">
        <Benefits />
      </div>
      <div id="streamline-hiring">
        <StreamlineHiring />
      </div>
      <div id="guard-types">
        <GuardTypes />
      </div>
      {/* Three Images Component */}
      <ThreeImages image1={image3} image2={image2} image3={image1} />
     
      <div id="pricing">
        <Pricing />
      </div>

      <div id="logo-grid">
        <LogoGrid
          title="Our Trusted Partners"
          logos={[
            { src: rafih, alt: "Rafih" },
            { src: remax, alt: "Remax" },
            { src: metroscg, alt: "Metro SCG" },
            { src: scotlynn, alt: "Scotlynn" },
            { src: mikhaiellogistics, alt: "Mikhaiel Logistics" },
            { src: myyellow, alt: "My Yellow" },
            { src: suretrack, alt: "Suretrack" },
          ]}
        />
      </div>

      <div id="about">
        <About />
      </div>
    </div>
  );
};

export default Home;