'use client';
import React, { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-stone-900 text-stone-100 pt-24 pb-8 mt-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Newsletter Section */}
        <div className="bg-stone-800 p-8 md:p-12 rounded-sm mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-light tracking-wider mb-4">
              Stay Inspired
            </h3>
            <p className="text-stone-300 font-light mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for design tips, exclusive offers, and the latest trends in interior design.
            </p>
            
            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-5 py-3 bg-stone-700 border border-stone-600 rounded-sm text-stone-100 placeholder-stone-400 focus:outline-none focus:border-stone-500 transition-colors"
                  required
                />
                <button 
                  type="submit"
                  className="px-8 py-3 bg-white text-stone-900 text-sm font-light tracking-wider rounded-sm hover:bg-stone-100 transform transition-all duration-300 hover:scale-105"
                >
                  SUBSCRIBE
                </button>
              </form>
            ) : (
              <div className="text-stone-100 font-light">
                <p className="text-lg">Thank you for subscribing!</p>
                <p className="text-sm text-stone-300 mt-2">Check your email for a confirmation message.</p>
              </div>
            )}
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h4 className="text-xl font-light tracking-wider">BRIGHT EDGE</h4>
            <p className="text-stone-400 font-light text-sm leading-relaxed">
              Transforming houses into homes with thoughtful design, curated details, and a passion for timeless elegance.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-stone-400 hover:text-white transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-stone-400 hover:text-white transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="text-stone-400 hover:text-white transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                </svg>
              </a>
              <a href="#" className="text-stone-400 hover:text-white transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-light tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-stone-400 hover:text-white transition-colors duration-300 text-sm font-light">About Us</a></li>
              <li><a href="#" className="text-stone-400 hover:text-white transition-colors duration-300 text-sm font-light">Our Projects</a></li>
              <li><a href="#" className="text-stone-400 hover:text-white transition-colors duration-300 text-sm font-light">Services</a></li>
              <li><a href="#" className="text-stone-400 hover:text-white transition-colors duration-300 text-sm font-light">Design Process</a></li>
              <li><a href="#" className="text-stone-400 hover:text-white transition-colors duration-300 text-sm font-light">Testimonials</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-light tracking-wider mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-stone-400 hover:text-white transition-colors duration-300 text-sm font-light">Interior Design</a></li>
              <li><a href="#" className="text-stone-400 hover:text-white transition-colors duration-300 text-sm font-light">Space Planning</a></li>
              <li><a href="#" className="text-stone-400 hover:text-white transition-colors duration-300 text-sm font-light">Furniture Design</a></li>
              <li><a href="#" className="text-stone-400 hover:text-white transition-colors duration-300 text-sm font-light">Renovation</a></li>
              <li><a href="#" className="text-stone-400 hover:text-white transition-colors duration-300 text-sm font-light">Consultation</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-light tracking-wider mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-stone-400 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-stone-400 text-sm font-light">123 Design Street, New York, NY 10001</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-stone-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-stone-400 text-sm font-light">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-stone-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-stone-400 text-sm font-light">info@brightedgeinteriors.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-stone-500 text-sm font-light mb-4 md:mb-0">
            © {new Date().getFullYear()} Bright Edge Interiors. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-stone-500 hover:text-white transition-colors duration-300 text-sm font-light">Privacy Policy</a>
            <a href="#" className="text-stone-500 hover:text-white transition-colors duration-300 text-sm font-light">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;