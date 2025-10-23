'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/Services' },
    { name: 'About', href: '/About' },
    { name: 'Gallery', href: '/Gallery' },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-white/90 backdrop-blur-lg shadow-sm border-b border-gray-100/80' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex justify-between items-center h-20">
            {/* Logo/Brand Name */}
            <Link 
              href="/" 
              className="flex flex-col justify-center group"
            >
              <h1 className={`text-xl sm:text-2xl font-light tracking-wider transition-colors ${
                scrolled ? 'text-stone-900' : 'text-white'
              }`}>
                BRIGHT EDGE
                <span className="font-medium"> INTERIORS</span>
              </h1>
              <p className={`text-xs tracking-widest mt-1 transition-colors ${
                scrolled ? 'text-stone-500' : 'text-stone-200'
              }`}>
                Decorating homes beautifully
              </p>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative py-1 text-sm font-light tracking-wide transition-all duration-300 hover:text-stone-700 group ${
                    pathname === link.href 
                      ? scrolled ? 'text-stone-900' : 'text-white'
                      : scrolled 
                        ? 'text-stone-600' 
                        : 'text-stone-200'
                  }`}
                >
                  {link.name}
                  <span 
                    className={`absolute bottom-0 left-0 w-full h-px transform transition-transform duration-300 origin-left ${
                      pathname === link.href 
                        ? scrolled ? 'bg-stone-900' : 'bg-white'
                        : scrolled ? 'bg-stone-900' : 'bg-white'
                    } ${
                      pathname === link.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </Link>
              ))}
              
              {/* Icons */}
              <div className="flex items-center space-x-4 ml-2">
                <button 
                  onClick={() => setShowSearch(!showSearch)}
                  className={`p-2 rounded-full transition-colors duration-300 ${
                    scrolled ? 'hover:bg-stone-100' : 'hover:bg-white/20'
                  }`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transition-colors ${
                    scrolled ? 'text-stone-700' : 'text-white'
                  }`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
              
              {/* CTA Button */}
              <Link 
                href="/Contact"
                className="px-5 py-2.5 bg-stone-900 text-white text-sm font-light tracking-wider rounded-sm hover:bg-stone-800 transform transition-all duration-300 hover:scale-105"
              >
                CONTACT
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative w-8 h-8 flex flex-col justify-center items-center group"
              aria-label="Toggle mobile menu"
            >
              <span 
                className={`absolute w-6 h-px transform transition-all duration-300 ${
                  isOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
                } ${scrolled ? 'bg-stone-800' : 'bg-white'}`}
              />
              <span 
                className={`absolute w-6 h-px transition-all duration-300 ${
                  isOpen ? 'opacity-0' : 'opacity-100'
                } ${scrolled ? 'bg-stone-800' : 'bg-white'}`}
              />
              <span 
                className={`absolute w-6 h-px transform transition-all duration-300 ${
                  isOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
                } ${scrolled ? 'bg-stone-800' : 'bg-white'}`}
              />
            </button>
          </div>

          {/* Search Bar - Desktop */}
          <div 
            className={`hidden lg:block overflow-hidden transition-all duration-500 ${
              showSearch ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className={`py-4 border-t ${
              scrolled ? 'border-stone-100' : 'border-stone-200/30'
            }`}>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search for projects, services..."
                  className="w-full px-4 py-3 pr-12 bg-stone-50 border border-stone-200 rounded-sm focus:outline-none focus:border-stone-400 transition-colors duration-300"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-stone-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu */}
      <div 
        className={`fixed top-0 right-0 z-50 h-full w-4/5 max-w-sm bg-white shadow-xl transform transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } lg:hidden`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex justify-between items-center p-6 border-b border-stone-100">
            <h2 className="text-xl font-light text-stone-900">Menu</h2>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-full hover:bg-stone-100 transition-colors duration-300"
              aria-label="Close menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-stone-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Content */}
          <div className="flex-1 overflow-y-auto py-6 px-6">
            {/* Navigation Links */}
            <div className="space-y-2 mb-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-4 text-lg font-light tracking-wide transition-all duration-300 hover:bg-stone-50 hover:text-stone-700 rounded-sm ${
                    pathname === link.href 
                      ? 'text-stone-900 bg-stone-50' 
                      : 'text-stone-600'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Search Bar - Mobile */}
            <div className="mb-8">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search for projects, services..."
                  className="w-full px-4 py-3 pr-12 bg-stone-50 border border-stone-200 rounded-sm focus:outline-none focus:border-stone-400 transition-colors duration-300"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-stone-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Icons Section - Matching Desktop */}
            <div className="mb-8">
              <h3 className="text-sm font-medium text-stone-500 mb-4">Tools</h3>
              <div className="flex space-x-4">
                <button className="p-3 rounded-full bg-stone-100 hover:bg-stone-200 transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-stone-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Contact Button - Mobile */}
            <div className="mb-8">
              <Link 
                href="/Contact"
                onClick={() => setIsOpen(false)}
                className="w-full px-6 py-4 bg-stone-900 text-white text-sm font-light tracking-wider rounded-sm hover:bg-stone-800 transition-colors duration-300 flex items-center justify-center"
              >
                CONTACT
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;