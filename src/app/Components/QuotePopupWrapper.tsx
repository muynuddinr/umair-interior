'use client';
import React from 'react';
import QuotePopup from './QuotePopup';
import { useQuotePopup } from './useQuotePopup';

const QuotePopupWrapper: React.FC = () => {
  const { isOpen, closePopup } = useQuotePopup();

  console.log('QuotePopupWrapper - isOpen:', isOpen);

  return <QuotePopup isOpen={isOpen} onClose={closePopup} />;
};

export default QuotePopupWrapper;
