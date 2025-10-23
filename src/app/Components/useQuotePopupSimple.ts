'use client';
import { useState, useEffect } from 'react';

export const useQuotePopupSimple = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  useEffect(() => {
    // Don't show popup on admin pages
    if (window.location.pathname.startsWith('/admin')) {
      return;
    }

    console.log('Simple popup hook - setting timer for 5 seconds');
    
    // Show popup after 5 seconds on page load
    const timer = setTimeout(() => {
      console.log('Simple popup timer fired - showing popup');
      setIsOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return {
    isOpen,
    openPopup,
    closePopup
  };
};
