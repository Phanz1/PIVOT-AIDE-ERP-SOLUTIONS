'use client';

import BlurIn from "@/components/magicui/blur-in";
import React, { useState } from 'react';
import CustomSlider from "@/app/CustomSlider"; // Adjust the import path as needed

const BlurInDemo: React.FC = () => {
  const [images] = useState([
    "/images/1.jpg",
    "/images/2.jpg",
    "/images/3.jpg",
    // Add more image paths as needed
  ]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-10 max-w-7xl mx-auto">
      <div>
      <BlurIn
        word="Unleashing Potential, Achieving Success"
        className="text-4xl font-bold text-black dark:text-white"
      />
      <br/>

      {/* Main Content */}
      <div className="space-y-6">
        {/* Header and Description */}
        <p className="text-black dark:text-white text-3xl space-y-2 flex-1">
          Pivot Aide Consulting was founded with a singular mission: to empower businesses to achieve their fullest potential. With a rich history of delivering excellence, we offer a diverse array of services designed to meet the evolving needs of our clients.
        </p>
        

      </div>
      </div>

      {/* Subheader and additional text below */}
      <div className="flex flex-col md:flex-row items-start space-y-8 md:space-y-0 md:space-x-8 mt-8">
        {/* Text Section */}
        <div className="flex-1 space-y-4">
          <h3 className="text-2xl font-bold text-black dark:text-white">
            Our Approach
          </h3>
          <p className="text-2xl text-black dark:text-white">
            At Pivot Aide Consulting, we believe in a client-centric approach. This means that we take the time to understand your business, your goals, and your challenges. Our team of seasoned professionals brings a wealth of experience and a passion for problem-solving to every project. We are dedicated to providing solutions that are not only effective but also innovative and forward-thinking.
          </p>
        </div>

        {/* Image Slider Section */}
        <div className="flex-1">
          <CustomSlider images={images} settings={settings} />
        </div>
      </div>
    </div>
  );
};

export default BlurInDemo;