import React from 'react';

const Banner = () => {
  return (
    <div className="bg-gradient-to-b from-yellow-400 to-red-600 text-white text-center p-10 relative overflow-hidden">
      <div className="z-10 relative">
        <h1 className="text-4xl font-bold">Ghar Ka Khana, Har Din</h1>
        <p className="text-2xl mt-4">Order Now!</p>
        <button className="bg-green-600 text-white py-3 px-6 rounded-lg mt-6 hover:bg-green-500 transition duration-300">
          Get Tiffin
        </button>
      </div>
      <div className="flex justify-center mt-6">
        <img src="path/to/butter-chicken.jpg" alt="Butter Chicken" className="w-24 mx-2 rounded-lg" />
        <img src="path/to/rajma-chawal.jpg" alt="Rajma Chawal" className="w-24 mx-2 rounded-lg" />
        <img src="path/to/paneer-tikka.jpg" alt="Paneer Tikka" className="w-24 mx-2 rounded-lg" />
        <img src="path/to/paratha.jpg" alt="Paratha" className="w-24 mx-2 rounded-lg" />
      </div>
      <div className="mt-6">
        <img src="path/to/happy-people.jpg" alt="Happy People" className="w-full max-w-lg rounded-lg" />
      </div>
    </div>
  );
};

export default Banner;