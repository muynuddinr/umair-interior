// app/gallery/page.jsx
'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Heroimage from '../../../public/hero3.jpg'

const GalleryPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [viewMode, setViewMode] = useState('grid');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Modern Minimalist Living",
      category: "residential",
      type: "Living Room",
      description: "Clean lines and neutral tones create a serene living space",
      images: ["/gallery/project1-1.jpg", "/gallery/project1-2.jpg", "/gallery/project1-3.jpg"],
      year: "2024",
      location: "Manhattan, NY",
      features: ["Minimalist Design", "Natural Light", "Open Layout"],
      materials: ["Oak Wood", "Marble", "Linen"],
      color: "from-stone-100 to-stone-200"
    },
    {
      id: 2,
      title: "Luxury Kitchen Renovation",
      category: "residential",
      type: "Kitchen",
      description: "High-end materials and smart storage solutions",
      images: ["/gallery/project2-1.jpg", "/gallery/project2-2.jpg", "/gallery/project2-3.jpg"],
      year: "2024",
      location: "Brooklyn, NY",
      features: ["Custom Cabinetry", "Island Design", "Smart Appliances"],
      materials: ["Quartz", "Brass", "Walnut"],
      color: "from-amber-50 to-orange-100"
    },
    {
      id: 3,
      title: "Corporate Office Space",
      category: "commercial",
      type: "Office",
      description: "Productive workspace with collaborative zones",
      images: ["/gallery/project3-1.jpg", "/gallery/project3-2.jpg", "/gallery/project3-3.jpg"],
      year: "2023",
      location: "Financial District, NY",
      features: ["Open Plan", "Meeting Rooms", "Breakout Areas"],
      materials: ["Glass", "Steel", "Concrete"],
      color: "from-blue-50 to-indigo-100"
    },
    {
      id: 4,
      title: "Master Bedroom Sanctuary",
      category: "residential",
      type: "Bedroom",
      description: "Tranquil retreat with spa-like atmosphere",
      images: ["/gallery/project4-1.jpg", "/gallery/project4-2.jpg", "/gallery/project4-3.jpg"],
      year: "2024",
      location: "Upper East Side, NY",
      features: ["Walk-in Closet", "En-suite Bath", "Reading Nook"],
      materials: ["Velvet", "Brass", "Marble"],
      color: "from-purple-50 to-pink-100"
    },
    {
      id: 5,
      title: "Boutique Hotel Lobby",
      category: "hospitality",
      type: "Lobby",
      description: "First impressions with sophisticated design",
      images: ["/gallery/project5-1.jpg", "/gallery/project5-2.jpg", "/gallery/project5-3.jpg"],
      year: "2023",
      location: "SoHo, NY",
      features: ["Reception Desk", "Lounge Area", "Art Installation"],
      materials: ["Terrazzo", "Brass", "Leather"],
      color: "from-green-50 to-emerald-100"
    },
    {
      id: 6,
      title: "Scandinavian Dining Room",
      category: "residential",
      type: "Dining Room",
      description: "Cozy yet sophisticated dining space",
      images: ["/gallery/project6-1.jpg", "/gallery/project6-2.jpg", "/gallery/project6-3.jpg"],
      year: "2024",
      location: "West Village, NY",
      features: ["Built-in Banquette", "Pendant Lighting", "Built-in Storage"],
      materials: ["Pine", "Wool", "Ceramic"],
      color: "from-cyan-50 to-blue-100"
    },
    {
      id: 7,
      title: "Modern Bathroom Design",
      category: "residential",
      type: "Bathroom",
      description: "Spa-like bathroom with luxury finishes",
      images: ["/gallery/project7-1.jpg", "/gallery/project7-2.jpg", "/gallery/project7-3.jpg"],
      year: "2023",
      location: "Tribeca, NY",
      features: ["Freestanding Tub", "Double Vanity", "Steam Shower"],
      materials: ["Marble", "Chrome", "Glass"],
      color: "from-gray-50 to-slate-100"
    },
    {
      id: 8,
      title: "Retail Store Design",
      category: "retail",
      type: "Retail",
      description: "Engaging retail space that drives sales",
      images: ["/gallery/project8-1.jpg", "/gallery/project8-2.jpg", "/gallery/project8-3.jpg"],
      year: "2023",
      location: "Madison Avenue, NY",
      features: ["Display Walls", "Fitting Rooms", "Cash Wrap"],
      materials: ["Concrete", "Steel", "Wood"],
      color: "from-rose-50 to-pink-100"
    },
    {
      id: 9,
      title: "Home Office Design",
      category: "residential",
      type: "Office",
      description: "Productive home workspace with style",
      images: ["/gallery/project9-1.jpg", "/gallery/project9-2.jpg", "/gallery/project9-3.jpg"],
      year: "2024",
      location: "Chelsea, NY",
      features: ["Built-in Desk", "Storage Solutions", "Good Lighting"],
      materials: ["Maple", "Leather", "Metal"],
      color: "from-emerald-50 to-green-100"
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'residential', label: 'Residential', count: projects.filter(p => p.category === 'residential').length },
    { id: 'commercial', label: 'Commercial', count: projects.filter(p => p.category === 'commercial').length },
    { id: 'hospitality', label: 'Hospitality', count: projects.filter(p => p.category === 'hospitality').length },
    { id: 'retail', label: 'Retail', count: projects.filter(p => p.category === 'retail').length }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <>
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={Heroimage}
            alt="Interior Design Gallery"
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
              Our Portfolio
            </p>
          </div>

          <div 
            className={`overflow-hidden ${
              isLoaded ? 'animate-fade-in-up delay-200' : 'opacity-0'
            }`}
          >
            <h1 className="text-5xl md:text-8xl font-light tracking-wider leading-tight">
              Design
              <span className="font-medium block">Gallery</span>
            </h1>
          </div>
          
          <div 
            className={`overflow-hidden max-w-2xl mx-auto ${
              isLoaded ? 'animate-fade-in-up delay-400' : 'opacity-0'
            }`}
          >
            <p className="text-lg md:text-xl font-light leading-relaxed text-stone-100 mt-8">
              Explore our collection of transformative interior design projects. 
              Each space tells a unique story of collaboration, creativity, and attention to detail.
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced Filter Section */}
      <section className="py-6 bg-stone-50 sticky top-24 z-40 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Desktop View */}
          <div className="hidden lg:flex items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-6 py-2 rounded-full font-light tracking-wide transition-all duration-300 ${
                    activeFilter === filter.id
                      ? 'bg-stone-900 text-white shadow-lg'
                      : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
                  }`}
                >
                  {filter.label} ({filter.count})
                </button>
              ))}
            </div>
            
            <div className="flex items-center gap-2 bg-white rounded-sm border border-stone-200 p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded transition-colors duration-300 ${
                  viewMode === 'grid' ? 'bg-stone-100 text-stone-900' : 'text-stone-500 hover:text-stone-700'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
              <button
                onClick={() => setViewMode('masonry')}
                className={`p-2 rounded transition-colors duration-300 ${
                  viewMode === 'masonry' ? 'bg-stone-100 text-stone-900' : 'text-stone-500 hover:text-stone-700'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile View */}
          <div className="lg:hidden">
            {/* Mobile Filter Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className="flex items-center gap-2 px-4 py-2 bg-white border border-stone-200 rounded-sm hover:bg-stone-50 transition-colors duration-300"
                >
                  <svg className="w-5 h-5 text-stone-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17a1 1 0 01-1 1H4a1 1 0 01-1-1v-2.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                  </svg>
                  <span className="text-sm font-light text-stone-700">
                    {filters.find(f => f.id === activeFilter)?.label || 'All Projects'}
                  </span>
                  <svg 
                    className={`w-4 h-4 text-stone-600 transform transition-transform duration-300 ${
                      isFilterOpen ? 'rotate-180' : ''
                    }`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <span className="text-xs font-light text-stone-500">
                  ({filteredProjects.length} projects)
                </span>
              </div>

              {/* Mobile View Mode Toggle */}
              <div className="flex items-center gap-2 bg-white rounded-sm border border-stone-200 p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded transition-colors duration-300 ${
                    viewMode === 'grid' ? 'bg-stone-100 text-stone-900' : 'text-stone-500 hover:text-stone-700'
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </button>
                <button
                  onClick={() => setViewMode('masonry')}
                  className={`p-2 rounded transition-colors duration-300 ${
                    viewMode === 'masonry' ? 'bg-stone-100 text-stone-900' : 'text-stone-500 hover:text-stone-700'
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Mobile Filter Dropdown */}
            <div 
              className={`overflow-hidden transition-all duration-300 ${
                isFilterOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="py-4 space-y-2">
                {filters.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => {
                      setActiveFilter(filter.id);
                      setIsFilterOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 rounded-sm font-light tracking-wide transition-all duration-300 ${
                      activeFilter === filter.id
                        ? 'bg-stone-900 text-white'
                        : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{filter.label}</span>
                      <span className="text-xs bg-stone-100 px-2 py-1 rounded-full">
                        {filter.count}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {viewMode === 'grid' ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className={`group cursor-pointer ${
                    isLoaded ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative overflow-hidden rounded-sm mb-4">
                    <div className={`h-80 bg-gradient-to-br ${project.color}`}>
                      <Image
                        src={project.images[0]}
                        alt={project.title}
                        fill
                        style={{ objectFit: 'cover' }}
                        className="transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <p className="text-xs font-light tracking-wider uppercase mb-1">{project.type}</p>
                        <h3 className="text-lg font-light tracking-wide">{project.title}</h3>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-light tracking-wide text-stone-900">{project.title}</h3>
                      <span className="text-sm font-light text-stone-500">{project.year}</span>
                    </div>
                    <p className="text-sm font-light text-stone-600">{project.description}</p>
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-xs font-light tracking-wider text-stone-500 uppercase">{project.location}</span>
                      <button className="text-sm font-light tracking-wider text-stone-700 hover:text-stone-900 transition-colors duration-300">
                        View Project →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-8 space-y-8">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className={`break-inside-avoid group cursor-pointer ${
                    isLoaded ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative overflow-hidden rounded-sm">
                    <div className={`${project.id % 3 === 0 ? 'h-64' : project.id % 3 === 1 ? 'h-80' : 'h-96'} bg-gradient-to-br ${project.color}`}>
                      <Image
                        src={project.images[0]}
                        alt={project.title}
                        fill
                        style={{ objectFit: 'cover' }}
                        className="transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <p className="text-xs font-light tracking-wider uppercase mb-1">{project.type}</p>
                        <h3 className="text-lg font-light tracking-wide">{project.title}</h3>
                        <p className="text-xs font-light text-stone-200 mt-1">{project.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Simple Image Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute -top-12 right-0 z-10 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Single Image Display */}
            <div className="relative h-[70vh] max-h-[800px] rounded-sm overflow-hidden">
              <Image
                src={selectedProject.images[0]}
                alt={selectedProject.title}
                fill
                style={{ objectFit: 'contain' }}
                className="bg-black"
              />
            </div>

            {/* Minimal Project Info */}
            <div className="mt-6 text-center">
              <h2 className="text-2xl font-light tracking-wide text-white mb-2">{selectedProject.title}</h2>
              <p className="text-sm font-light text-stone-300">{selectedProject.location} • {selectedProject.year}</p>
            </div>
          </div>
        </div>
      )}

      {/* Stats Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-light tracking-wider text-stone-900 mb-2">150+</div>
              <div className="text-sm font-light tracking-wider text-stone-500 uppercase">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-light tracking-wider text-stone-900 mb-2">10</div>
              <div className="text-sm font-light tracking-wider text-stone-500 uppercase">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-light tracking-wider text-stone-900 mb-2">25</div>
              <div className="text-sm font-light tracking-wider text-stone-500 uppercase">Design Awards</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-light tracking-wider text-stone-900 mb-2">100%</div>
              <div className="text-sm font-light tracking-wider text-stone-500 uppercase">Client Satisfaction</div>
            </div>
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
            Ready to Start
            <span className="font-medium block">Your Project?</span>
          </h2>
          
          <p 
            className={`text-lg font-light text-stone-300 mb-8 ${
              isLoaded ? 'animate-fade-in-up delay-200' : 'opacity-0'
            }`}
          >
            Inspired by what you see? Let's discuss how we can bring your vision to life with the same level of excellence and attention to detail.
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
              SCHEDULE CONSULTATION
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

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
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

export default GalleryPage;