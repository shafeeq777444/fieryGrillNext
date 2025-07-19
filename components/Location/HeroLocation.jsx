'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

const LocationHero = () => {
  const router = useRouter();

  const handleMenuClick = (e) => {
    e.preventDefault();
    router.push('/menu');
    
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-20 relative overflow-hidden h-100 md:h-auto">
      <img
        src="/assets/location/location.jpg"
        className="absolute inset-0 z-0 object-cover object-center w-full h-full"
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'bottom',
          opacity: '0.9',
        }}
        alt="Location Background"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10" />

      <div className="container mx-auto px-4 py-20 md:py-32 relative z-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Available Service Areas
          </h1>
          <p className="text-sm md:text-md text-white mb-8">
            Serving authentic Punjabi tiffin across Greater Toronto Area
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={handleMenuClick}
              className="bg-primary text-white px-4 py-3 hover:bg-white hover:text-black rounded-sm transition-all shadow-md whitespace-nowrap duration-300 ease-out"
            >
              Our Menu
            </button>

            <a href="tel:+14373131390">
              <button className="bg-white text-primary px-4 py-3 !rounded-button hover:bg-primary hover:text-white transition-all whitespace-nowrap border-0">
                Contact Us
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationHero;
