'use client';
import { useState, useEffect } from 'react';

export const useQuotePopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  useEffect(() => {
    // Don't show popup on admin pages
    if (window.location.pathname.startsWith('/admin')) {
      return;
    }

    // Check if popup has already been shown in this session
    const hasShownPopup = sessionStorage.getItem('quotePopupShown');
    console.log('Popup check - hasShownPopup:', hasShownPopup);
    
    if (hasShownPopup) {
      setHasShown(true);
      return;
    }

    console.log('Setting timer for popup in 5 seconds...');
    
    // Show popup after 5 seconds on page load
    const timer = setTimeout(() => {
      console.log('Timer fired - showing popup');
      setIsOpen(true);
      setHasShown(true);
      sessionStorage.setItem('quotePopupShown', 'true');
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  // Alternative: Show popup on scroll (uncomment to use instead of timer)
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
  //     
  //     if (scrollPercentage > 30 && !hasShown) {
  //       setIsOpen(true);
  //       setHasShown(true);
  //       sessionStorage.setItem('quotePopupShown', 'true');
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, [hasShown]);

  return {
    isOpen,
    openPopup,
    closePopup,
    hasShown
  };
};
