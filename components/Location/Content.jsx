import React from 'react';

export default function TiffinServiceComponent() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-center">
      {/* Availability Section */}
      <div className="mb-8">
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-md transition duration-300 shadow-md">
          Check Availability in Your Area
        </button>
        <p className="text-gray-600 mt-3">
          Delivery times and availability may vary by location
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Fast Delivery */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-bold mb-3">Fast Delivery</h3>
          <p className="text-gray-600">Fresh tiffin delivered to your doorstep</p>
        </div>

        {/* Quality Assured */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-bold mb-3">Quality Assured</h3>
          <p className="text-gray-600">Authentic Punjabi cuisine made with love</p>
        </div>

        {/* Flexible Plans */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-bold mb-3">Flexible Plans</h3>
          <p className="text-gray-600">Daily, weekly, or monthly subscription options</p>
        </div>
      </div>
    </div>
  );
}