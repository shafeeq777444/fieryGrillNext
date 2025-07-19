import React from 'react'
import LazyImg from '../common/LazyImg'

const OurStory = () => {
  return (
    <section className="py-16 mt-6 md:py-24 bg-white  ">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl mt-5 font-bold text-gray-900 mb-4">
          Our Story
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto" />
      </div>
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
        <div className="md:w-3/5">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            From Grandmother's Kitchen to Your Doorstep
          </h3>
          <p className="text-gray-700 mb-6">
            Punjabi Grills Tiffin Mess began in 2018 when Harpreet Singh,
            inspired by his grandmother's cooking, decided to share the
            authentic flavors of Punjab with busy professionals who missed
            home-cooked meals.
          </p>
          <p className="text-gray-700 mb-8">
            What started as a small operation serving 15 customers has grown
            into a beloved tiffin service delivering over 200 fresh meals daily
            across the city, while still maintaining the same traditional
            recipes and cooking methods that made our food special from day one.
          </p>
          <div className="space-y-4 mb-8">
            <div className="flex items-start">
              <div className="w-8 h-8 flex items-center justify-center bg-primary/10 rounded-full mr-4 flex-shrink-0 mt-1">
                <i className="ri-check-line ri-lg text-primary" />
              </div>
              <p className="text-gray-700">
                Family recipes passed down through generations
              </p>
            </div>
            <div className="flex items-start">
              <div className="w-8 h-8 flex items-center justify-center bg-primary/10 rounded-full mr-4 flex-shrink-0 mt-1">
                <i className="ri-check-line ri-lg text-primary" />
              </div>
              <p className="text-gray-700">
                Fresh ingredients sourced from local farmers
              </p>
            </div>
            <div className="flex items-start">
              <div className="w-8 h-8 flex items-center justify-center bg-primary/10 rounded-full mr-4 flex-shrink-0 mt-1">
                <i className="ri-check-line ri-lg text-primary" />
              </div>
              <p className="text-gray-700">
                Traditional cooking methods for authentic taste
              </p>
            </div>
          </div>
        </div>
        <div className="md:w-2/5 grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="rounded-lg overflow-hidden shadow-md h-48 md:h-64">
              <LazyImg
                src="/assets/about/about-img1.jpg"
                alt="Traditional cooking"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md h-48 md:h-64">
              <LazyImg
                src="/assets/about/about-img2.jpg"
                alt="Making bread"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
          <div className="space-y-4 pt-8">
            <div className="rounded-lg overflow-hidden shadow-md h-48 md:h-64">
              <LazyImg
                src="/assets/about/about-img3.jpg"
                alt="Punjabi thali"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md h-48 md:h-64">
              <LazyImg
                src="/assets/about/about-img4.jpg"
                alt="Chef preparing food"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default OurStory
