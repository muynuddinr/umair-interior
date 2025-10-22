'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import img1 from '../../../public/hero1.jpeg'
import img2 from '../../../public/hero2.jpg'

const CleanBentoGrid = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-22  bg-stone-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header with Previous Heading */}
        <div className="text-center mb-16">
          <div 
            className={`inline-block mb-4 ${
              isLoaded ? 'animate-fade-in' : 'opacity-0'
            }`}
          >
            <span className="text-sm font-light tracking-[0.3em] text-stone-600 uppercase">
              Interior Design Excellence
            </span>
          </div>
          <h2 
            className={`text-4xl md:text-5xl font-light tracking-wider text-stone-900 mb-4 ${
              isLoaded ? 'animate-fade-in-up' : 'opacity-0'
            }`}
          >
            Our Expertise
          </h2>
          <div 
            className={`w-16 h-px bg-stone-300 mx-auto ${
              isLoaded ? 'animate-scale-x' : 'scale-x-0'
            }`}
          ></div>
        </div>

        {/* Main Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Large Featured Project */}
          <div 
            className={`md:col-span-2 row-span-2 relative overflow-hidden rounded-sm group ${
              isLoaded ? 'animate-fade-in-up' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.1s' }}
          >
            <div className="relative h-96 md:h-full">
              <Image
                src={img1}
                alt="Modern Living Room"
                fill
                style={{ objectFit: 'cover' }}
                className="transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <span className="text-xs font-light tracking-wider uppercase opacity-80">Residential</span>
                  <h3 className="text-2xl font-light tracking-wide mt-1 mb-2">Modern Living Space</h3>
                  <p className="text-sm font-light opacity-90 mb-4">Clean lines and natural light create an inviting atmosphere</p>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      <span className="text-xs font-light tracking-wider opacity-70 bg-white/20 px-2 py-1 rounded">1,200 sq ft</span>
                      <span className="text-xs font-light tracking-wider opacity-70 bg-white/20 px-2 py-1 rounded">6 weeks</span>
                    </div>
                    <span className="text-xs font-light tracking-wider opacity-70 italic">Minimalist</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Stacked Items */}
          <div className="space-y-6">
            {/* Service Card */}
            <div 
              className={`bg-white p-6 rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300 ${
                isLoaded ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: '0.2s' }}
            >
              <div className="w-12 h-12 bg-stone-100 rounded-sm flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-stone-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-lg font-light tracking-wide text-stone-900 mb-2">Interior Design</h3>
              <p className="text-sm font-light text-stone-600">Complete design solutions from concept to completion</p>
            </div>

            {/* Small Project */}
            <div 
              className={`relative overflow-hidden rounded-sm group h-48 ${
                isLoaded ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: '0.3s' }}
            >
              <Image
                src={img2}
                alt="Master Bedroom"
                fill
                style={{ objectFit: 'cover' }}
                className="transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white">
                  <p className="text-sm font-light tracking-wide">Master Bedroom</p>
                  <p className="text-xs font-light text-stone-300">Contemporary Style</p>
                </div>
              </div>
            </div>

            {/* Stats Card */}
            <div 
              className={`bg-stone-900 p-6 rounded-sm text-white ${
                isLoaded ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: '0.4s' }}
            >
              <div className="text-3xl font-light tracking-wider mb-1">150+</div>
              <div className="text-sm font-light text-stone-300">Projects Completed</div>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {/* Process Steps */}
          <div 
            className={`bg-white p-6 rounded-sm shadow-sm ${
              isLoaded ? 'animate-fade-in-up' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.5s' }}
          >
            <h3 className="text-lg font-light tracking-wide text-stone-900 mb-4">Our Process</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-stone-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-xs font-light text-stone-600">1</span>
                </div>
                <span className="text-sm font-light text-stone-700">Consultation</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-stone-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-xs font-light text-stone-600">2</span>
                </div>
                <span className="text-sm font-light text-stone-700">Design Concept</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-stone-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-xs font-light text-stone-600">3</span>
                </div>
                <span className="text-sm font-light text-stone-700">Implementation</span>
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <div 
            className={`bg-stone-100 p-6 rounded-sm ${
              isLoaded ? 'animate-fade-in-up' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.6s' }}
          >
            <svg className="w-6 h-6 text-stone-400 mb-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-sm font-light text-stone-700 italic mb-3">"Exceptional design sensibility and attention to detail. They transformed our space beyond our expectations."</p>
            <p className="text-sm font-medium text-stone-900">Sarah Johnson</p>
          </div>

          {/* Materials */}
          <div 
            className={`bg-white p-6 rounded-sm shadow-sm ${
              isLoaded ? 'animate-fade-in-up' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.7s' }}
          >
            <h3 className="text-lg font-light tracking-wide text-stone-900 mb-4">Materials</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="text-center">
                <div className="w-12 h-12 bg-gray-200 rounded-sm mx-auto mb-2"></div>
                <p className="text-xs font-light text-stone-600">Marble</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-amber-100 rounded-sm mx-auto mb-2"></div>
                <p className="text-xs font-light text-stone-600">Oak Wood</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-100 rounded-sm mx-auto mb-2"></div>
                <p className="text-xs font-light text-stone-600">Brass</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-stone-100 rounded-sm mx-auto mb-2"></div>
                <p className="text-xs font-light text-stone-600">Linen</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div 
          className={`text-center mt-16 ${
            isLoaded ? 'animate-fade-in-up' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.8s' }}
        >
          <button className="px-10 py-4 bg-stone-900 text-white text-sm font-light tracking-wider rounded-sm hover:bg-stone-800 transition-colors duration-300">
            View All Projects
          </button>
        </div>

        {/* Custom Animation Styles */}
        <style jsx>{`
          @keyframes fade-in-up {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fade-in {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @keyframes scale-x {
            from {
              transform: scaleX(0);
            }
            to {
              transform: scaleX(1);
            }
          }

          .animate-fade-in-up {
            animation: fade-in-up 0.6s ease-out forwards;
            opacity: 0;
          }

          .animate-fade-in {
            animation: fade-in 0.6s ease-out forwards;
            opacity: 0;
          }

          .animate-scale-x {
            animation: scale-x 0.6s ease-out forwards;
            transform-origin: center;
          }
        `}</style>
      </div>
    </section>
  );
};

export default CleanBentoGrid;