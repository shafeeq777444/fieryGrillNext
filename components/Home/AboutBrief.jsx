'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

const AboutBrief = () => {
  const router = useRouter();

  return (
    <div>
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="grid grid-cols-2 gap-4">
                <div className="overflow-hidden rounded-lg shadow-md">
                  <img
                    src="/assets/home/food/z1.png"
                    alt="Punjabi Chef"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="overflow-hidden rounded-lg shadow-md">
                  <img
                    src="/assets/home/food/b2.png"
                    alt="Tiffin Boxes"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="overflow-hidden rounded-lg shadow-md">
                  <img
                    src="/assets/home/food/m2.png"
                    alt="Family Enjoying Meal"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="overflow-hidden rounded-lg shadow-md">
                  <img
                    src="/assets/home/food/p1.png"
                    alt="Punjabi Spices"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>

            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold text-red-800 mb-4">
                About Fiery Grills Punjabi Tiffin
              </h2>
              <p className="text-gray-700 mb-4">
                Founded with love and passion for authentic cooking, Fiery
                Grills Punjabi Tiffin is your go-to for homemade Punjabi meals
                in town. Our journey began in 2018 when our founder, Chef Arjun
                Singh, noticed the lack of authentic Punjabi food options for
                busy professionals and students.
              </p>
              <p className="text-gray-700 mb-4">
                What sets us apart is our commitment to authenticity. We use
                traditional recipes passed down through generations, locally
                sourced ingredients, and cooking techniques that preserve the
                true essence of Punjabi cuisine.
              </p>
              <p className="text-gray-700 mb-6">
                Our mission is to deliver the warmth and flavor of Punjabi
                kitchens, using locally sourced ingredients and traditional
                recipes. Experience the taste of Punjab, one tiffin at a time.
              </p>

              <div className="flex space-x-4 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-800">5000+</div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-800">25+</div>
                  <div className="text-sm text-gray-600">Authentic Dishes</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-800">7</div>
                  <div className="text-sm text-gray-600">Years of Service</div>
                </div>
              </div>

              <button
                onClick={() => {
                  router.push('/about');
                  setTimeout(() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }, 100);
                }}
                className="bg-red-800 hover:bg-red-900 text-white font-bold py-3 px-8 rounded-full transition duration-300 !rounded-button whitespace-nowrap cursor-pointer"
              >
                Learn More About Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutBrief;
