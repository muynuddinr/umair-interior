'use client';
import React from 'react';
import Image from 'next/image';
import heroImage from '../../../public/hero5.jpg'; // Replace with your local image path

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      {/* Background Image with Enhanced Overlay */}
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="Minimalist and bright interior living space"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        {/* Darker, more effective overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/60 via-stone-900/70 to-stone-900/80"></div>
      </div>

      {/* Text Enhancement Container */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Hero Content with Enhanced Text Visibility */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto space-y-6">
        <h1 className="text-4xl md:text-6xl font-light tracking-wider leading-tight drop-shadow-lg">
          <span className="block">Crafting Spaces,</span>
          <span className="font-medium block">Elevating Life</span>
        </h1>
        
        <p className="text-lg md:text-xl font-light tracking-wide text-stone-100 max-w-2xl mx-auto drop-shadow-md">
          We transform houses into homes with thoughtful design, curated details, and a passion for timeless elegance. Let us bring your vision to life.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
          <button className="px-8 py-3.5 bg-stone-900 text-white text-sm font-light tracking-wider rounded-sm hover:bg-stone-800 transform transition-all duration-300 hover:scale-105 shadow-xl">
            VIEW OUR WORK
          </button>
          
          <button className="px-8 py-3.5 border border-stone-300 text-stone-100 text-sm font-light tracking-wider rounded-sm hover:bg-stone-800 hover:border-stone-800 hover:text-white transform transition-all duration-300 shadow-lg">
            GET IN TOUCH
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;