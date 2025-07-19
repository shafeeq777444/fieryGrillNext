'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight } from 'lucide-react';

export default function DeliveryBrief() {
  const router = useRouter();

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 space-y-24">
      <div className="flex flex-col md:flex-row-reverse items-center gap-12">
        {/* Image Section */}
        <div className="w-full order-2 md:order-1 md:w-1/2">
          <img
            src="/assets/home/foodCover.png"
            alt="Delivery Coverage Map"
            className="rounded-lg w-full h-60 md:h-120 object-cover shadow-md"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 order-1 space-y-4 text-center md:text-left">
          <h2 className="text-3xl font-bold text-red-800">
            Delivery Available Across Major Locations
          </h2>
          <p className="text-gray-700 text-justify">
            We currently deliver Punjabi tiffin services in the Greater Toronto Area,
            including nearby suburbs and business hubs. Our delivery network ensures
            that hot and fresh tiffins reach your home, hostel, or office on time.
          </p>
          <button
            onClick={() => {
              router.push('/about');
              setTimeout(() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }, 100);
            }}
            className="bg-red-800 hover:bg-red-900 text-white font-bold px-6 py-3 rounded-full inline-flex items-center transition duration-300"
          >
            View Delivery Location Details <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
