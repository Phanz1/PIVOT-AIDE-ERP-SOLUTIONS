'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface CustomSliderProps {
  images: string[];
  settings: {
    dots?: boolean;
    infinite?: boolean;
    speed?: number;
    autoplay?: boolean;
    autoplaySpeed?: number;
  };
}

const CustomSlider: React.FC<CustomSliderProps> = ({ images, settings }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (settings.autoplay) {
      const interval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
      }, settings.autoplaySpeed || 3000);

      return () => clearInterval(interval);
    }
  }, [images.length, settings.autoplay, settings.autoplaySpeed]);

  return (
    <div className="relative w-[700px] h-[400px]">
      {images.map((src, index) => (
        <div
          key={src}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-${settings.speed || 500} ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={src}
            alt={`Slide ${index + 1}`}
            layout="fill"
            objectFit="cover"
          />
        </div>
      ))}
      {settings.dots && (
        <div className="absolute bottom-4 left-0 right-0 flex justify-center">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full mx-1 ${
                index === currentSlide ? 'bg-white' : 'bg-gray-400'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSlider;