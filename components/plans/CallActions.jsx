import React from 'react'
import LazyImg from '../common/LazyImg'

const checkIcon = (
  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
);

const CallActions = () => {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-14 shadow-md">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-0">
            {/* Text Content */}
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-10">
              <h2 className="text-3xl md:text-4xl font-extrabold text-primaryDark mb-4 leading-tight">
                Personalize Your Tiffin Plan
              </h2>
              <p className="text-gray-700 mb-7 text-lg">
                Everyone has unique tastes and needs. With our customization options, you can craft a meal plan that fits your lifestyle perfectly.
              </p>
              <ul className="mb-8 space-y-4">
                <li className="flex items-start gap-3">
                  <span className="mt-1">{checkIcon}</span>
                  <span className="text-gray-800 text-base font-medium">Select your favorite Punjabi dishes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1">{checkIcon}</span>
                  <span className="text-gray-800 text-base font-medium">Choose your preferred spice level</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1">{checkIcon}</span>
                  <span className="text-gray-800 text-base font-medium">Accommodate dietary needs & allergies</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1">{checkIcon}</span>
                  <span className="text-gray-800 text-base font-medium">Enjoy a rotating menu of your favorites</span>
                </li>
              </ul>
            
            </div>
            {/* Image */}
            <div className="md:w-1/2 flex justify-center">
              <LazyImg
                src="/assets/about/about-img4.jpg"
                alt="Customize Your Tiffin"
                className="w-full max-w-md h-auto rounded-xl shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallActions
