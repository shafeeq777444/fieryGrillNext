import React from 'react'

const WhyChooseUs = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Why Choose Us
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Experience the difference that comes from our commitment to quality,
          tradition, and customer satisfaction.
        </p>
        <div className="w-20 h-1 bg-primary mx-auto mt-4" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-white rounded-lg shadow-md p-8 transition-transform hover:-translate-y-2 duration-300">
          <div className="w-16 h-16 flex items-center justify-center bg-primary/10 rounded-full mb-6 mx-auto">
            <i className="ri-home-heart-line ri-2x text-primary" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
            Homemade Taste
          </h3>
          <p className="text-gray-700 text-center">
            Every meal is prepared with the same care and attention as it would
            be in a loving home kitchen, using traditional methods and recipes.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-8 transition-transform hover:-translate-y-2 duration-300">
          <div className="w-16 h-16 flex items-center justify-center bg-primary/10 rounded-full mb-6 mx-auto">
            <i className="ri-leaf-line ri-2x text-primary" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
            Daily Fresh Ingredients
          </h3>
          <p className="text-gray-700 text-center">
            We source our ingredients from local farmers and markets every
            morning to ensure maximum freshness and flavor in each dish.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-8 transition-transform hover:-translate-y-2 duration-300">
          <div className="w-16 h-16 flex items-center justify-center bg-primary/10 rounded-full mb-6 mx-auto">
            <i className="ri-time-line ri-2x text-primary" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
            On-Time Delivery
          </h3>
          <p className="text-gray-700 text-center">
            Our dedicated delivery team ensures your meals arrive promptly
            during your chosen time slot, hot and ready to enjoy.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-8 transition-transform hover:-translate-y-2 duration-300">
          <div className="w-16 h-16 flex items-center justify-center bg-primary/10 rounded-full mb-6 mx-auto">
            <i className="ri-money-dollar-circle-line ri-2x text-primary" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
            Affordable Plans
          </h3>
          <p className="text-gray-700 text-center">
            Our subscription plans offer excellent value without compromising on
            quality, making healthy home-style meals accessible to everyone.
          </p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default WhyChooseUs
