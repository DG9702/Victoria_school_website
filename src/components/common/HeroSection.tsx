'use client';

import React from 'react';
import Image from 'next/image';

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  backgroundImage,
  className = ''
}) => {
  return (
    <section className={`relative ${className}`}>
      {backgroundImage && (
        <Image 
          src={backgroundImage} 
          alt="Hero Background" 
          width={1440} 
          height={470} 
          className="w-full h-[470px] object-cover"
        />
      )}
      {(title || subtitle) && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            {title && <h1 className="text-4xl font-bold mb-4">{title}</h1>}
            {subtitle && <p className="text-xl">{subtitle}</p>}
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;