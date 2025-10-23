'use client';
import React from 'react';
import QuotePopup from './QuotePopup';
import { useQuotePopupSimple } from './useQuotePopupSimple';

const QuotePopupWrapperSimple: React.FC = () => {
  const { isOpen, closePopup } = useQuotePopupSimple();

  console.log('Simple QuotePopupWrapper - isOpen:', isOpen);

  return <QuotePopup isOpen={isOpen} onClose={closePopup} />;
};

export default QuotePopupWrapperSimple;
