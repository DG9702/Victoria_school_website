'use client';
import React from 'react';
import Header from '@/components/common/Header';

import Image from 'next/image';
import { InformationSection } from '@/components/Section/InformationSection';
import Footer from '@/components/common/Footer';
import {
  AboutUsSection,
  AboutVicSection,
  EducationProgramSection,
  HeroSection,
  InfoOverlaySection,
  SchoolTourSection,
} from '@/components/Section';
export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section with Slider */}
      <div className="relative">
        <Image
          src="/images/BANNER.png"
          alt="School Slider"
          width={1440}
          height={470}
          className="w-full h-[200px] sm:h-[280px] md:h-[350px] lg:h-[470px] object-cover"
        />
        <HeroSection />
      </div>
      {/* Infosection */}
      <InfoOverlaySection />

      {/* School Tour Section */}
      <SchoolTourSection />
      <AboutUsSection />

      {/* About Victoria Section */}
      <AboutVicSection />
      {/* Education Program Section */}
      <EducationProgramSection />

      {/* News Section */}
      <InformationSection />

      {/* Partners Section */}
      <div className="bg-white py-6 md:py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 lg:gap-32 justify-items-center px-4">
          <Image
            src="/images/img_partners4_1.png"
            alt="Partner 1"
            width={130}
            height={130}
            className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[130px] lg:h-[130px]"
          />
          <Image
            src="/images/img_partners4_1.png"
            alt="Partner 2"
            width={130}
            height={130}
            className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[130px] lg:h-[130px]"
          />
          <Image
            src="/images/img_partners4_1.png"
            alt="Partner 3"
            width={130}
            height={130}
            className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[130px] lg:h-[130px]"
          />
          <Image
            src="/images/img_partners4_1.png"
            alt="Partner 4"
            width={130}
            height={130}
            className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[130px] lg:h-[130px]"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
