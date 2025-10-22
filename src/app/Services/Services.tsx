// app/services/page.jsx
'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Hero from '../../../public/hero2.jpg'
import img1 from '../../../public/MASTER Bedroom front view. - Copy.jpg'
import img2 from '../../../public/MASTERE Bedroom  wardrobe view. - Copy.jpg'
import img3 from '../../../public/WhatsApp Image 2025-06-12 at 10.54.38 AM.jpeg'
import img4 from '../../../public/WhatsApp Image 2025-06-12 at 10.54.39 AM (1).jpeg'
import img5 from '../../../public/sitting area interior view.jpg'

const ServicesPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeService, setActiveService] = useState<number | null>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const services = [
    {
      id: 1,
      title: "Full Interior Design",
      subtitle: "Complete Transformation",
      description: "Comprehensive design solutions from concept to completion, creating cohesive, functional, and beautiful spaces that reflect your unique personality and lifestyle.",
      features: [
        "In-depth consultation & space analysis",
        "Custom furniture design & selection",
        "Lighting design & integration",
        "Material & finish specifications",
        "Art curation & accessory styling",
        "Project management & coordination"
      ],
      deliverables: ["Design Concept", "3D Renderings", "Technical Drawings", "Material Samples", "Shopping List"],
      image: img1,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      delay: "0.1s"
    },
    {
      id: 2,
      title: "Room Makeover",
      subtitle: "Focused Enhancement",
      description: "Transform individual spaces with strategic updates that maximize impact, functionality, and style while working within your existing framework.",
      features: [
        "Space optimization & layout redesign",
        "Color palette development",
        "Furniture rearrangement & selection",
        "Lighting improvements",
        "Decorative elements & styling",
        "Organization solutions"
      ],
      deliverables: ["Mood Board", "Layout Plan", "Color Scheme", "Shopping Guide", "Styling Instructions"],
      image: img2,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      delay: "0.2s"
    },
    {
      id: 3,
      title: "E-Design",
      subtitle: "Virtual Design Studio",
      description: "Professional design guidance delivered virtually, perfect for DIY enthusiasts or those outside our service area who want expert direction.",
      features: [
        "Virtual consultation via video",
        "Custom design concept development",
        "Digital mood boards & inspiration",
        "Room layout & furniture placement",
        "Product sourcing & shopping list",
        "Implementation guidance"
      ],
      deliverables: ["Design Board", "Floor Plan", "Shopping List", "Style Guide", "Email Support"],
      image: img3,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      delay: "0.3s"
    },
    {
      id: 4,
      title: "Design Consultation",
      subtitle: "Expert Guidance",
      description: "Professional advice and strategic planning for your design projects, perfect for gaining clarity and direction before making decisions.",
      features: [
        "Design assessment & evaluation",
        "Budget planning guidance",
        "Timeline development",
        "Material & finish recommendations",
        "Contractor selection guidance",
        "Design direction & next steps"
      ],
      deliverables: ["Design Assessment", "Recommendations", "Resource List", "Action Plan"],
      image: img4,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      delay: "0.4s"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery",
      description: "We begin with a comprehensive consultation to understand your vision, lifestyle, functional needs, and aesthetic preferences.",
      detail: "In-depth discussion about your daily routines, entertainment habits, storage needs, and design aspirations."
    },
    {
      step: "02",
      title: "Concept Development",
      description: "Our team creates initial design concepts, mood boards, and space planning proposals tailored to your vision.",
      detail: "Multiple design directions with visual inspiration, preliminary layouts, and material palette exploration."
    },
    {
      step: "03",
      title: "Design Refinement",
      description: "We refine the chosen concept with detailed drawings, material selections, and comprehensive specifications.",
      detail: "Technical drawings, custom furniture designs, lighting plans, and detailed material specifications."
    },
    {
      step: "04",
      title: "Implementation",
      description: "We oversee the entire implementation process, ensuring every detail is executed to perfection.",
      detail: "Project coordination, contractor management, quality control, and final styling and installation."
    }
  ];

  const specialties = [
    {
      title: "Residential",
      description: "Creating homes that reflect your personality and enhance your daily life",
      icon: "🏠"
    },
    {
      title: "Commercial",
      description: "Designing spaces that inspire productivity and leave lasting impressions",
      icon: "🏢"
    },
    {
      title: "Hospitality",
      description: "Crafting memorable experiences through thoughtful interior environments",
      icon: "🏨"
    },
    {
      title: "Retail",
      description: "Designing spaces that engage customers and drive business success",
      icon: "🏪"
    }
  ];

  return (
    <>
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={Hero}
            alt="Interior Design Services"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/60 via-stone-900/70 to-stone-900/80"></div>
        </div>

        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-6">
          <div 
            className={`overflow-hidden mb-6 ${
              isLoaded ? 'animate-fade-in' : 'opacity-0'
            }`}
          >
            <p className="text-sm md:text-base font-light tracking-[0.3em] text-stone-200 uppercase">
              Design Excellence
            </p>
          </div>

          <div 
            className={`overflow-hidden ${
              isLoaded ? 'animate-fade-in-up delay-200' : 'opacity-0'
            }`}
          >
            <h1 className="text-5xl md:text-8xl font-light tracking-wider leading-tight">
              Design
              <span className="font-medium block">Services</span>
            </h1>
          </div>
          
          <div 
            className={`overflow-hidden max-w-3xl mx-auto ${
              isLoaded ? 'animate-fade-in-up delay-400' : 'opacity-0'
            }`}
          >
            <p className="text-lg md:text-xl font-light leading-relaxed text-stone-100 mt-8">
              Transform your vision into reality with our comprehensive interior design services. 
              From concept to completion, we create spaces that inspire, function beautifully, and tell your unique story.
            </p>
          </div>

          <div 
            className={`flex flex-wrap justify-center gap-4 mt-12 ${
              isLoaded ? 'animate-fade-in-up delay-600' : 'opacity-0'
            }`}
          >
            {specialties.map((specialty, index) => (
              <div key={index} className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
                <span className="text-sm font-light tracking-wide">{specialty.icon} {specialty.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 lg:py-32 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 
              className={`text-4xl md:text-5xl font-light tracking-wider text-stone-900 mb-4 ${
                isLoaded ? 'animate-fade-in-up' : 'opacity-0'
              }`}
            >
              Our
              <span className="font-medium block">Services</span>
            </h2>
            <div 
              className={`w-16 h-px bg-stone-300 mx-auto ${
                isLoaded ? 'animate-scale-x' : 'scale-x-0'
              }`}
            ></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service) => (
              <div
                key={service.id}
                className={`bg-white rounded-sm shadow-sm hover:shadow-2xl transition-all duration-700 overflow-hidden group ${
                  isLoaded ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: service.delay }}
                onMouseEnter={() => setActiveService(service.id)}
                onMouseLeave={() => setActiveService(null)}
              >
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-sm flex items-center justify-center mb-4">
                        {service.icon}
                      </div>
                      <h3 className="text-3xl font-light tracking-wide mb-2">{service.title}</h3>
                      <p className="text-sm font-light tracking-wider text-stone-200 uppercase">{service.subtitle}</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <p className="text-stone-600 font-light leading-relaxed mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-medium tracking-wider text-stone-700 mb-4">WHAT'S INCLUDED:</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-start">
                          <svg className="w-4 h-4 text-stone-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm font-light text-stone-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="pt-6 border-t border-stone-200">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-sm font-medium tracking-wider text-stone-700">DELIVERABLES:</h4>
                      <svg className={`w-5 h-5 text-stone-400 transform transition-transform duration-300 ${
                        activeService === service.id ? 'rotate-180' : ''
                      }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                    <div className={`grid grid-cols-2 gap-2 transition-all duration-300 ${
                      activeService === service.id ? 'opacity-100 max-h-20' : 'opacity-0 max-h-0 overflow-hidden'
                    }`}>
                      {service.deliverables.map((deliverable, index) => (
                        <span key={index} className="text-xs font-light text-stone-500 bg-stone-100 px-3 py-1 rounded-full">
                          {deliverable}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 
              className={`text-4xl md:text-5xl font-light tracking-wider text-stone-900 mb-4 ${
                isLoaded ? 'animate-fade-in-up' : 'opacity-0'
              }`}
            >
              Our
              <span className="font-medium block">Process</span>
            </h2>
            <div 
              className={`w-16 h-px bg-stone-300 mx-auto ${
                isLoaded ? 'animate-scale-x' : 'scale-x-0'
              }`}
            ></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`relative group ${
                  isLoaded ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-stone-200 transition-colors duration-300">
                    <span className="text-2xl font-light tracking-wider text-stone-700">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-light tracking-wide text-stone-900 mb-3">{step.title}</h3>
                  <p className="text-sm font-light text-stone-600 leading-relaxed mb-3">{step.description}</p>
                  <p className="text-xs font-light text-stone-500 italic opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {step.detail}
                  </p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full">
                    <svg className="w-full h-px text-stone-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-32 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div 
              className={`space-y-8 ${
                isLoaded ? 'animate-fade-in-left' : 'opacity-0'
              }`}
            >
              <h2 className="text-4xl md:text-5xl font-light tracking-wider text-stone-900">
                Why Choose
                <span className="font-medium block">Bright Edge</span>
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start group">
                  <div className="w-16 h-16 bg-stone-200 rounded-sm flex items-center justify-center mr-6 flex-shrink-0 group-hover:bg-stone-300 transition-colors duration-300">
                    <svg className="w-8 h-8 text-stone-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-light tracking-wide text-stone-900 mb-2">Personalized Approach</h3>
                    <p className="text-sm font-light text-stone-600 leading-relaxed">
                      Every design is meticulously crafted to reflect your unique lifestyle, preferences, and aspirations. 
                      We take time to understand how you live and work to create spaces that truly serve you.
                    </p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-16 h-16 bg-stone-200 rounded-sm flex items-center justify-center mr-6 flex-shrink-0 group-hover:bg-stone-300 transition-colors duration-300">
                    <svg className="w-8 h-8 text-stone-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-light tracking-wide text-stone-900 mb-2">Timely Execution</h3>
                    <p className="text-sm font-light text-stone-600 leading-relaxed">
                      We respect your timeline and deliver projects within agreed schedules without compromising on quality. 
                      Our efficient process ensures smooth project progression from start to finish.
                    </p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-16 h-16 bg-stone-200 rounded-sm flex items-center justify-center mr-6 flex-shrink-0 group-hover:bg-stone-300 transition-colors duration-300">
                    <svg className="w-8 h-8 text-stone-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-light tracking-wide text-stone-900 mb-2">Quality Materials</h3>
                    <p className="text-sm font-light text-stone-600 leading-relaxed">
                      We source only the finest materials, furnishings, and finishes from trusted suppliers, 
                      ensuring lasting beauty and durability in every project we undertake.
                    </p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-16 h-16 bg-stone-200 rounded-sm flex items-center justify-center mr-6 flex-shrink-0 group-hover:bg-stone-300 transition-colors duration-300">
                    <svg className="w-8 h-8 text-stone-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-light tracking-wide text-stone-900 mb-2">Passionate Team</h3>
                    <p className="text-sm font-light text-stone-600 leading-relaxed">
                      Our talented designers bring creativity, expertise, and genuine passion to every project, 
                      ensuring exceptional results that exceed expectations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div 
              className={`relative h-[600px] rounded-sm overflow-hidden ${
                isLoaded ? 'animate-fade-in-right' : 'opacity-0'
              }`}
            >
              <Image
                src={img5}
                alt="Interior Design Studio"
                fill
                style={{ objectFit: 'cover' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 
              className={`text-4xl md:text-5xl font-light tracking-wider text-stone-900 mb-4 ${
                isLoaded ? 'animate-fade-in-up' : 'opacity-0'
              }`}
            >
              Client
              <span className="font-medium block">Experiences</span>
            </h2>
            <div 
              className={`w-16 h-px bg-stone-300 mx-auto ${
                isLoaded ? 'animate-scale-x' : 'scale-x-0'
              }`}
            ></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Bright Edge transformed our apartment into a dream home. Their attention to detail and understanding of our needs was exceptional.",
                author: "Emily & James Chen",
                project: "Full Home Renovation"
              },
              {
                quote: "Working with their team was an absolute pleasure. They brought our vision to life beyond our wildest expectations.",
                author: "Sarah Mitchell",
                project: "Living Room Design"
              },
              {
                quote: "Professional, creative, and reliable. They delivered our office redesign on time and within budget.",
                author: "David Park",
                project: "Commercial Space"
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                className={`bg-stone-50 p-8 rounded-sm ${
                  isLoaded ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <svg className="w-8 h-8 text-stone-300 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-stone-700 font-light leading-relaxed mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="text-stone-900 font-medium">{testimonial.author}</p>
                  <p className="text-sm font-light text-stone-500">{testimonial.project}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-stone-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 
            className={`text-4xl md:text-5xl font-light tracking-wider text-white mb-6 ${
              isLoaded ? 'animate-fade-in-up' : 'opacity-0'
            }`}
          >
            Ready to Transform
            <span className="font-medium block">Your Space?</span>
          </h2>
          
          <p 
            className={`text-lg font-light text-stone-300 mb-8 ${
              isLoaded ? 'animate-fade-in-up delay-200' : 'opacity-0'
            }`}
          >
            Let's discuss your project and create something extraordinary together. 
            Schedule a consultation to explore how we can bring your vision to life.
          </p>
          
          <div 
            className={`flex flex-col sm:flex-row gap-4 justify-center ${
              isLoaded ? 'animate-fade-in-up delay-400' : 'opacity-0'
            }`}
          >
            <button className="px-12 py-4 bg-white text-stone-900 text-sm font-light tracking-wider rounded-sm hover:bg-stone-100 transform transition-all duration-300 hover:scale-105">
              SCHEDULE CONSULTATION
            </button>
            <button className="px-12 py-4 border border-stone-600 text-stone-100 text-sm font-light tracking-wider rounded-sm hover:bg-stone-800 hover:border-stone-500 transition-all duration-300">
              VIEW PORTFOLIO
            </button>
          </div>
        </div>
      </section>

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

        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
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

        .animate-fade-in-left {
          animation: fade-in-left 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in-right {
          animation: fade-in-right 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-scale-x {
          animation: scale-x 0.8s ease-out forwards;
          transform-origin: center;
        }

        .delay-200 {
          animation-delay: 200ms;
        }

        .delay-400 {
          animation-delay: 400ms;
        }

        .delay-600 {
          animation-delay: 600ms;
        }
      `}</style>
    </>
  );
};

export default ServicesPage;