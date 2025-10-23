'use client';
import React from 'react';
import Image from 'next/image';
import { motion, cubicBezier } from 'framer-motion';
import heroImage from '../../../public/hero5.jpg'; // Replace with your local image path

const HeroSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      y: 100, 
      opacity: 0 
    },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: cubicBezier(0.43, 0.13, 0.23, 0.96)
      }
    }
  };

  const buttonVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: cubicBezier(0.22, 1, 0.36, 1)
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        repeat: Infinity,
        repeatType: "reverse" as const
      }
    }
  };

  // Using preset easings
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: cubicBezier(0.42, 0, 0.58, 1) // replaced string with cubicBezier
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Background Image with Enhanced Overlay */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8, ease: cubicBezier(0.22, 1, 0.36, 1) }} // replaced array
          className="absolute inset-0"
        >
          <Image
            src={heroImage}
            alt="Minimalist and bright interior living space"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </motion.div>
        {/* Darker, more effective overlay with animation */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-stone-900/60 via-stone-900/70 to-stone-900/80"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
        ></motion.div>
      </div>

      {/* Text Enhancement Container */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
      </motion.div>

      {/* Hero Content with Enhanced Text Visibility and Animations */}
      <motion.div 
        className="relative z-10 text-center text-white max-w-4xl mx-auto space-y-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="text-4xl md:text-6xl font-light tracking-wider leading-tight drop-shadow-lg"
          variants={itemVariants}
        >
          <span className="block">Crafting Spaces,</span>
          <span className="font-medium block">Elevating Life</span>
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl font-light tracking-wide text-stone-100 max-w-2xl mx-auto drop-shadow-md"
          variants={itemVariants}
        >
          We transform houses into homes with thoughtful design, curated details, and a passion for timeless elegance. Let us bring your vision to life.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center pt-6"
          variants={containerVariants}
        >
          <motion.button
            className="px-8 py-3.5 bg-stone-900 text-white text-sm font-light tracking-wider rounded-sm hover:bg-stone-800 transform transition-all duration-300 shadow-xl"
            variants={buttonVariants}
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "#1f2937",
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.98 }}
          >
            VIEW OUR WORK
          </motion.button>
          
          <motion.button
            className="px-8 py-3.5 border border-stone-300 text-stone-100 text-sm font-light tracking-wider rounded-sm hover:bg-stone-800 hover:border-stone-800 hover:text-white transform transition-all duration-300 shadow-lg"
            variants={buttonVariants}
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "#1f2937",
              borderColor: "#1f2937",
              color: "white",
              transition: { duration: 0.3, repeat: Infinity, repeatType: "reverse" as const }
            }}
            whileTap={{ scale: 0.98 }}
          >
            GET IN TOUCH
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;