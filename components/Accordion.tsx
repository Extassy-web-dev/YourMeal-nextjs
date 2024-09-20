"use client"
import Link from 'next/link';
import React, { useState } from 'react';

const Accordion: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="absolute top-[20px] right-[20px]">
      <div className="border border-gray-300 rounded-lg overflow-hidden">
        <button
          onClick={toggleAccordion}
          className="w-full text-left bg-gray-200 px-4 py-2 text-lg font-semibold transition-colors hover:bg-gray-300"
        >
          Language
        </button>
        {isOpen && (
          <div className="bg-white border-t border-gray-200 px-4 py-2">
            <Link href="/ru" className="block py-1 text-[#ffab08] font-[600] text-[18px] hover:underline">ru</Link>
            <Link href="/en" className="block py-1 text-[#ffab08] font-[600] text-[18px] hover:underline">en</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
