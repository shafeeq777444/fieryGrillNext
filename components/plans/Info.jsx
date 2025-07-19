import React from 'react';
import { Phone, Instagram } from 'lucide-react';

const Info = () => {
  return (
    <div className="bg-gray-50 px-6 py-10 md:py-14">
      <div className="max-w-2xl mx-auto text-center space-y-5">
        <div className="flex items-center justify-center gap-3 text-gray-800 text-sm md:text-base font-medium">
          <Phone className="w-5 h-5 text-blue-600" />
          <span>
            Questions about our plans?&nbsp;
            <a href="tel:4373131390" className="text-blue-600 underline hover:text-blue-800 transition">
              (437) 313 1390
            </a>
          </span>
        </div>
        <div className="flex items-center justify-center gap-3 text-gray-800 text-sm md:text-base font-medium">
          <Instagram className="w-5 h-5 text-pink-600" />
          <span>
            Follow us on Instagram&nbsp;
            <a
              href="https://www.instagram.com/_fierygrillss"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 underline hover:text-pink-800 transition"
            >
              @_fierygrillss
            </a>{' '}
            for daily updates
          </span>
        </div>
      </div>
    </div>
  );
};

export default Info;
