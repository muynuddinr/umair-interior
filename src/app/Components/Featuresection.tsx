'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const FeaturesSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      title: "Residential Design",
      description: "Transforming living spaces into personalized sanctuaries that reflect your unique lifestyle and aesthetic preferences.",
      delay: "0.1s"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "Commercial Spaces",
      description: "Creating inspiring commercial environments that enhance productivity and leave lasting impressions on clients.",
      delay: "0.2s"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
      title: "Space Planning",
      description: "Optimizing layouts for maximum functionality and flow, ensuring every square foot serves a purpose.",
      delay: "0.3s"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      title: "Custom Furniture",
      description: "Designing bespoke furniture pieces that perfectly complement your space and meet your specific needs.",
      delay: "0.4s"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
      title: "Color Consultation",
      description: "Expert color palette selection that sets the perfect mood and enhances architectural features.",
      delay: "0.5s"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Project Management",
      description: "End-to-end project coordination ensuring timely completion and exceptional quality standards.",
      delay: "0.6s"
    }
  ];

  return (
    <section className="py-20 bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24">
          <div 
            className={`inline-block mb-4 ${
              isLoaded ? 'animate-fade-in' : 'opacity-0'
            }`}
          >
            <span className="text-sm font-light tracking-[0.3em] text-stone-600 uppercase">
              Our Services
            </span>
          </div>
          
          <h2 
            className={`text-4xl md:text-5xl font-light tracking-wider text-stone-900 mb-6 ${
              isLoaded ? 'animate-fade-in-up' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.1s' }}
          >
            What We
            <span className="font-medium block">Offer</span>
          </h2>
          
          <div 
            className={`w-24 h-px bg-stone-300 mx-auto ${
              isLoaded ? 'animate-scale-x' : 'scale-x-0'
            }`}
            style={{ animationDelay: '0.2s' }}
          ></div>
          
          <p 
            className={`mt-6 text-lg font-light text-stone-600 max-w-3xl mx-auto ${
              isLoaded ? 'animate-fade-in-up' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.3s' }}
          >
            From concept to completion, we offer comprehensive interior design services tailored to transform your vision into reality.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group bg-white p-8 rounded-sm shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
                isLoaded ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: feature.delay }}
            >
              {/* Icon Container */}
              <div className="w-16 h-16 bg-stone-100 rounded-sm flex items-center justify-center mb-6 group-hover:bg-stone-900 transition-colors duration-300">
                <div className="text-stone-600 group-hover:text-white transition-colors duration-300">
                  {feature.icon}
                </div>
              </div>

              {/* Feature Content */}
              <h3 className="text-xl font-light tracking-wide text-stone-900 mb-3 group-hover:text-stone-700 transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-stone-600 font-light leading-relaxed mb-4">
                {feature.description}
              </p>

              {/* Learn More Link */}
              <div className="flex items-center text-stone-500 group-hover:text-stone-700 transition-colors duration-300 cursor-pointer">
                <span className="text-sm font-light tracking-wide">Learn More</span>
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Animation Styles */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
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
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-scale-x {
          animation: scale-x 0.8s ease-out forwards;
          transform-origin: center;
        }
      `}</style>
    </section>
  );
};

export default FeaturesSection;