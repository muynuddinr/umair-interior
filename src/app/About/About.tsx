// app/about/page.jsx
'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Navbar from '@/app/Components/Navbar';
import Footer from '@/app/Components/Footer';

const AboutPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const team = [
    {
      name: "Sarah Mitchell",
      role: "Founder & Lead Designer",
      bio: "With over 15 years of experience in interior design, Sarah brings a unique blend of creativity and technical expertise to every project.",
      image: "/team/sarah.jpg",
      expertise: ["Residential Design", "Space Planning", "Color Theory"]
    },
    {
      name: "James Chen",
      role: "Senior Designer",
      bio: "James specializes in commercial spaces and brings a modern, functional approach to every design challenge.",
      image: "/team/james.jpg",
      expertise: ["Commercial Design", "3D Visualization", "Project Management"]
    },
    {
      name: "Emily Rodriguez",
      role: "Design Director",
      bio: "Emily's passion for sustainable design and attention to detail has earned her recognition in the industry.",
      image: "/team/emily.jpg",
      expertise: ["Sustainable Design", "Material Sourcing", "Styling"]
    },
    {
      name: "David Park",
      role: "Architectural Consultant",
      bio: "David bridges the gap between architecture and interior design, ensuring cohesive and structurally sound solutions.",
      image: "/team/david.jpg",
      expertise: ["Architectural Design", "Technical Drawings", "Renovation"]
    }
  ];

  const values = [
    {
      title: "Design Excellence",
      description: "We pursue perfection in every detail, creating spaces that are both beautiful and functional.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Client Collaboration",
      description: "We believe the best designs come from true partnership with our clients throughout the process.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Sustainability",
      description: "We prioritize eco-friendly materials and practices to create spaces that are good for people and the planet.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      )
    },
    {
      title: "Innovation",
      description: "We stay ahead of design trends and technologies to bring fresh, innovative solutions to every project.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ];

  const milestones = [
    {
      year: "2014",
      title: "Founded",
      description: "Bright Edge Interiors was established with a vision to transform spaces"
    },
    {
      year: "2016",
      title: "First Award",
      description: "Received 'Emerging Designer of the Year' award"
    },
    {
      year: "2018",
      title: "Team Expansion",
      description: "Grew to a team of 10 talented designers"
    },
    {
      year: "2020",
      title: "International Recognition",
      description: "Featured in Architectural Digest and Elle Decor"
    },
    {
      year: "2022",
      title: "Sustainability Focus",
      description: "Launched eco-friendly design initiative"
    },
    {
      year: "2024",
      title: "Decade of Excellence",
      description: "Celebrating 10 years of transforming spaces"
    }
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/about-hero.jpg"
            alt="About Bright Edge Interiors"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/60 via-stone-900/70 to-stone-900/80"></div>
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <div 
            className={`overflow-hidden mb-6 ${
              isLoaded ? 'animate-fade-in' : 'opacity-0'
            }`}
          >
            <p className="text-sm md:text-base font-light tracking-[0.3em] text-stone-200 uppercase">
              Our Story
            </p>
          </div>

          <div 
            className={`overflow-hidden ${
              isLoaded ? 'animate-fade-in-up delay-200' : 'opacity-0'
            }`}
          >
            <h1 className="text-5xl md:text-7xl font-light tracking-wider leading-tight">
              Crafting
              <span className="font-medium block">Excellence</span>
            </h1>
          </div>
          
          <div 
            className={`overflow-hidden max-w-2xl mx-auto ${
              isLoaded ? 'animate-fade-in-up delay-400' : 'opacity-0'
            }`}
          >
            <p className="text-lg md:text-xl font-light leading-relaxed text-stone-100 mt-8">
              For over a decade, Bright Edge Interiors has been transforming spaces into 
              extraordinary experiences. We believe great design is not just about aesthetics—it's about creating environments that enhance lives.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 lg:py-32 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div 
              className={`space-y-6 ${
                isLoaded ? 'animate-fade-in-left' : 'opacity-0'
              }`}
            >
              <h2 className="text-4xl md:text-5xl font-light tracking-wider text-stone-900">
                Our
                <span className="font-medium block">Philosophy</span>
              </h2>
              
              <p className="text-stone-600 font-light leading-relaxed text-lg">
                At Bright Edge Interiors, we believe that exceptional design is born from the perfect balance 
                of creativity, functionality, and personal expression. Our approach is rooted in the understanding 
                that every space has a story to tell, and our role is to help you write yours.
              </p>
              
              <p className="text-stone-600 font-light leading-relaxed text-lg">
                We don't just follow trends—we create timeless spaces that reflect your unique personality and 
                enhance your daily life. From the initial concept to the final styling, every decision is made 
                with intention and purpose.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-8">
                <div>
                  <div className="text-3xl font-light tracking-wider text-stone-900 mb-2">150+</div>
                  <div className="text-sm font-light tracking-wider text-stone-500 uppercase">Projects Completed</div>
                </div>
                <div>
                  <div className="text-3xl font-light tracking-wider text-stone-900 mb-2">10</div>
                  <div className="text-sm font-light tracking-wider text-stone-500 uppercase">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-light tracking-wider text-stone-900 mb-2">15</div>
                  <div className="text-sm font-light tracking-wider text-stone-500 uppercase">Design Awards</div>
                </div>
                <div>
                  <div className="text-3xl font-light tracking-wider text-stone-900 mb-2">98%</div>
                  <div className="text-sm font-light tracking-wider text-stone-500 uppercase">Client Satisfaction</div>
                </div>
              </div>
            </div>

            <div 
              className={`relative h-[600px] rounded-sm overflow-hidden ${
                isLoaded ? 'animate-fade-in-right' : 'opacity-0'
              }`}
            >
              <Image
                src="/our-philosophy.jpg"
                alt="Our Design Philosophy"
                fill
                style={{ objectFit: 'cover' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 
              className={`text-4xl md:text-5xl font-light tracking-wider text-stone-900 mb-4 ${
                isLoaded ? 'animate-fade-in-up' : 'opacity-0'
              }`}
            >
              Our
              <span className="font-medium block">Values</span>
            </h2>
            <div 
              className={`w-16 h-px bg-stone-300 mx-auto ${
                isLoaded ? 'animate-scale-x' : 'scale-x-0'
              }`}
            ></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className={`text-center group ${
                  isLoaded ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <div className="w-20 h-20 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-stone-200 transition-colors duration-300">
                  <div className="text-stone-600 group-hover:text-stone-700 transition-colors duration-300">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-light tracking-wide text-stone-900 mb-3">{value.title}</h3>
                <p className="text-sm font-light text-stone-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 lg:py-32 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 
              className={`text-4xl md:text-5xl font-light tracking-wider text-stone-900 mb-4 ${
                isLoaded ? 'animate-fade-in-up' : 'opacity-0'
              }`}
            >
              Our
              <span className="font-medium block">Journey</span>
            </h2>
            <div 
              className={`w-16 h-px bg-stone-300 mx-auto ${
                isLoaded ? 'animate-scale-x' : 'scale-x-0'
              }`}
            ></div>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-stone-300"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } ${
                    isLoaded ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                >
                  <div className="md:w-1/2"></div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-stone-900 rounded-full flex items-center justify-center">
                    <span className="text-xs font-light text-white">{milestone.year}</span>
                  </div>
                  
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                    <div className="bg-white p-6 rounded-sm shadow-sm">
                      <h3 className="text-xl font-light tracking-wide text-stone-900 mb-2">{milestone.title}</h3>
                      <p className="text-sm font-light text-stone-600">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 
              className={`text-4xl md:text-5xl font-light tracking-wider text-stone-900 mb-4 ${
                isLoaded ? 'animate-fade-in-up' : 'opacity-0'
              }`}
            >
              Meet Our
              <span className="font-medium block">Team</span>
            </h2>
            <div 
              className={`w-16 h-px bg-stone-300 mx-auto ${
                isLoaded ? 'animate-scale-x' : 'scale-x-0'
              }`}
            ></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className={`group text-center ${
                  isLoaded ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <div className="relative mb-6 overflow-hidden rounded-sm">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <h3 className="text-xl font-light tracking-wide text-stone-900 mb-1">{member.name}</h3>
                <p className="text-sm font-light tracking-wider text-stone-500 uppercase mb-3">{member.role}</p>
                <p className="text-sm font-light text-stone-600 leading-relaxed mb-4">{member.bio}</p>
                
                <div className="flex flex-wrap justify-center gap-2">
                  {member.expertise.map((skill, skillIndex) => (
                    <span key={skillIndex} className="px-3 py-1 bg-stone-100 text-xs font-light tracking-wide text-stone-700 rounded-full">
                      {skill}
                    </span>
                  ))}
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
            Let's Create
            <span className="font-medium block">Something Beautiful</span>
          </h2>
          
          <p 
            className={`text-lg font-light text-stone-300 mb-8 ${
              isLoaded ? 'animate-fade-in-up delay-200' : 'opacity-0'
            }`}
          >
            Ready to start your design journey? Our team is here to bring your vision to life with creativity, expertise, and passion.
          </p>
          
          <div 
            className={`flex flex-col sm:flex-row gap-4 justify-center ${
              isLoaded ? 'animate-fade-in-up delay-400' : 'opacity-0'
            }`}
          >
            <button className="px-12 py-4 bg-white text-stone-900 text-sm font-light tracking-wider rounded-sm hover:bg-stone-100 transform transition-all duration-300 hover:scale-105">
              START YOUR PROJECT
            </button>
            <button className="px-12 py-4 border border-stone-600 text-stone-100 text-sm font-light tracking-wider rounded-sm hover:bg-stone-800 hover:border-stone-500 transition-all duration-300">
              MEET THE TEAM
            </button>
          </div>
        </div>
      </section>

      <Footer />

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
      `}</style>
    </>
  );
};

export default AboutPage;