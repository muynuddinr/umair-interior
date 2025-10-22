'use client';
import React, { useState } from 'react';
import Hero from '../../../public/hero1.jpeg';
import Image from 'next/image';
import Navbar from '@/app/Components/Navbar';
import Footer from '@/app/Components/Footer';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitted(true);
    setIsSubmitting(false);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        budget: '',
        timeline: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Address",
      content: "123 Design Street, Suite 100",
      subContent: "New York, NY 10001",
      link: "https://maps.google.com/?q=123+Design+Street+New+York"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 00.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 001.21.502l4.493 1.498a1 1 0 00.684.949V19a2 2 0 01-2 2h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      title: "Phone",
      content: "+1 (555) 123-4567",
      subContent: "Mon-Fri 9am-6pm EST",
      link: "tel:+15551234567"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email",
      content: "hello@brightedgeinteriors.com",
      subContent: "We respond within 24 hours",
      link: "mailto:hello@brightedgeinteriors.com"
    }
  ];

  const socialLinks = [
    {
      name: "Instagram",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 4.849-4.919.058-1.265.073-1.644-1.874-1.874-4.919.149-3.225-1.694-4.771-4.919.058-1.266.057-1.644.073-4.849 0-4.849-4.919.058-1.265-4.243-4.243a4.822 4.822 0 00-.666 2.475c0-1.71.87-3.213-2.475-4.244-4.244a4.904 4.904 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
          <path d="M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/>
        </svg>
      ),
      href: "https://instagram.com/brightedgeinteriors"
    },
    {
      name: "Pinterest",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 4.849-4.919.058-1.265.073-1.644-1.874-1.874-4.919.149-3.225-1.694-4.771-4.919.058-1.266.057-1.644.073-4.849 0-4.849-4.919.058-1.265-4.243-4.243a4.822 4.822 0 00-.666 2.475c0-1.71.87-3.213-2.475-4.244-4.244a4.904 4.904 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
          <path d="M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/>
        </svg>
      ),
      href: "https://pinterest.com/brightedgeinteriors"
    },
    {
      name: "LinkedIn",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 014.267 2.37 4.919 4.919.058 1.265.069 1.645.069 4.849 0 4.849-4.919.058-1.265.073-1.644-1.874-1.874-4.919.149-3.225-1.694-4.771-4.919.058-1.266.057-1.644.073-4.849 0-4.849-4.919.058-1.265-4.243-4.243a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
          <path d="M5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063 2.063 0 1.14.925 2.063 2.063 2.063 0 1.139-.925 2.063-2.063z"/>
          <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
        </svg>
      ),
      href: "https://linkedin.com/company/brightedgeinteriors"
    }
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section with Background Image */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={Hero}
            alt="Contact Bright Edge Interiors"
            fill
            style={{ objectFit: 'cover' }}
            priority
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-stone-900/60 via-stone-900/70 to-stone-900/80"></div>
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <div className="overflow-hidden mb-6 animate-fade-in">
            <p className="text-sm md:text-base font-light tracking-[0.3em] text-stone-200 uppercase">
              Get In Touch
            </p>
          </div>

          <div className="overflow-hidden animate-fade-in-up delay-200">
            <h1 className="text-5xl md:text-7xl font-light tracking-wider leading-tight drop-shadow-lg">
              Let's Create
              <span className="font-medium block">Something Beautiful</span>
            </h1>
          </div>
          
          <div className="overflow-hidden max-w-2xl mx-auto animate-fade-in-up delay-400">
            <p className="text-lg md:text-xl font-light leading-relaxed text-stone-100 mt-8 drop-shadow-lg">
              Ready to transform your space? Our team is here to bring your vision to life with creativity, expertise, and passion.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <div 
                key={index}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {info.icon}
                </div>
                <h3 className="text-lg font-light tracking-wide text-stone-900 mb-2">{info.title}</h3>
                <a 
                  href={info.link}
                  className="text-stone-600 font-light leading-relaxed hover:text-stone-900 transition-colors duration-300"
                >
                  {info.content}
                </a>
                <p className="text-sm font-light text-stone-500 mt-1">{info.subContent}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-light tracking-wider text-stone-900 mb-4">
              Start Your
              <span className="font-medium block">Project</span>
            </h2>
            <p className="text-lg font-light text-stone-600">
              Tell us about your project and we'll get back to you within 24 hours
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-light tracking-wider text-stone-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-sm focus:outline-none focus:border-stone-400 focus:ring-1 focus:ring-stone-400 transition-colors duration-300"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-light tracking-wider text-stone-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-sm focus:outline-none focus:border-stone-400 focus:ring-1 focus:ring-stone-400 transition-colors duration-300"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-light tracking-wider text-stone-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-sm focus:outline-none focus:border-stone-400 focus:ring-1 focus:ring-stone-400 transition-colors duration-300"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
              <div>
                <label className="block text-sm font-light tracking-wider text-stone-700 mb-2">
                  Project Type
                </label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-sm focus:outline-none focus:border-stone-400 focus:ring-1 focus:ring-stone-400 transition-colors duration-300"
                >
                  <option value="">Select a project type</option>
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                  <option value="hospitality">Hospitality</option>
                  <option value="retail">Retail</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-light tracking-wider text-stone-700 mb-2">
                  Budget Range
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-sm focus:outline-none focus:border-stone-400 focus:ring-1 focus:ring-stone-400 transition-colors duration-300"
                >
                  <option value="">Select budget range</option>
                  <option value="under-25k">Under $25,000</option>
                  <option value="25k-50k">$25,000 - $50,000</option>
                  <option value="50k-100k">$50,000 - $100,000</option>
                  <option value="100k-250k">$100,000 - $250,000</option>
                  <option value="over-250k">Over $250,000</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-light tracking-wider text-stone-700 mb-2">
                  Timeline
                </label>
                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-sm focus:outline-none focus:border-stone-400 focus:ring-1 focus:ring-stone-400 transition-colors duration-300"
                >
                  <option value="">Select timeline</option>
                  <option value="asap">ASAP</option>
                  <option value="1-3-months">1-3 months</option>
                  <option value="3-6-months">3-6 months</option>
                  <option value="6-months-plus">6+ months</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-light tracking-wider text-stone-700 mb-2">
                Tell us about your project
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-sm focus:outline-none focus:border-stone-400 focus:ring-1 focus:ring-stone-400 transition-colors duration-300"
                placeholder="Describe your vision, goals, and any specific requirements..."
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-12 py-4 bg-stone-900 text-white text-sm font-light tracking-wider rounded-sm hover:bg-stone-800 transform transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Success Message */}
      {isSubmitted && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-6">
          <div className="bg-white p-8 rounded-sm max-w-md w-full animate-fade-in-up">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-light tracking-wide text-stone-900 mb-2">Thank You!</h3>
              <p className="text-stone-600 font-light">
                Your message has been sent successfully. We'll get back to you within 24 hours.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-6 px-6 py-2 bg-stone-900 text-white text-sm font-light tracking-wider rounded-sm hover:bg-stone-800 transition-colors duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FAQ Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light tracking-wider text-stone-900 mb-4">
              Frequently Asked
              <span className="font-medium block">Questions</span>
            </h2>
          </div>

          <div className="space-y-8 max-w-3xl mx-auto">
            <div className="bg-white p-6 rounded-sm shadow-sm">
              <h3 className="text-lg font-light tracking-wide text-stone-900 mb-2">
                How long does a typical project take?
              </h3>
              <p className="text-stone-600 font-light leading-relaxed">
                Project timelines vary depending on scope and complexity. Small room makeovers typically take 2-4 weeks, 
                while full home renovations can take 2-6 months. We'll provide a detailed timeline during our initial consultation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-sm shadow-sm">
              <h3 className="text-lg font-light tracking-wide text-stone-900 mb-2">
                Do you work outside of New York?
              </h3>
              <p className="text-stone-600 font-light leading-relaxed">
                Yes, we work on projects nationwide. For projects outside the NYC area, we offer virtual design services 
                and can travel for larger commercial projects.
              </p>
            </div>

            <div className="bg-white p-6 rounded-sm shadow-sm">
              <h3 className="text-lg font-light tracking-wide text-stone-900 mb-2">
                What's included in your design services?
              </h3>
              <p className="text-stone-600 font-light leading-relaxed">
                Our services include space planning, 3D renderings, material selection, furniture specification, 
                lighting design, and project coordination. We can also handle procurement and installation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-sm shadow-sm">
              <h3 className="text-lg font-light tracking-wide text-stone-900 mb-2">
                How do you determine project costs?
              </h3>
              <p className="text-stone-600 font-light leading-relaxed">
                Costs depend on scope, materials, and complexity. We provide detailed quotes after our initial consultation 
                and work within your budget to achieve the best possible results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-stone-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-light tracking-wider text-white mb-6">
            Ready to Transform
            <span className="font-medium block">Your Space?</span>
          </h2>
          
          <p className="text-lg font-light text-stone-300 mb-8">
            Let's schedule a consultation to discuss your project and explore how we can bring your vision to life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-12 py-4 bg-white text-stone-900 text-sm font-light tracking-wider rounded-sm hover:bg-stone-100 transform transition-all duration-300 hover:scale-105">
              SCHEDULE CONSULTATION
            </button>
            <button className="px-12 py-4 border border-stone-600 text-stone-100 text-sm font-light tracking-wider rounded-sm hover:bg-stone-800 hover:border-stone-500 transition-all duration-300">
              VIEW OUR WORK
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

export default ContactPage;