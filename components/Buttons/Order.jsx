import React from "react";

const AnimatedButton = () => {
  return (
    <button
      className="group relative inline-flex items-center gap-3 rounded-md bg-black px-6 py-3 hover:scale-105 font-semibold text-white transition-all duration-300 hover:bg-red-800"
    >
      Order Now
      <span className="relative grid h-6 w-6 shrink-0 place-items-center overflow-hidden rounded-full bg-white transition-transform duration-300">
        <img
          src="/assets/deliveryBoy.png"
          alt="Delivery Icon"
          className="absolute h-[16px] w-[16px] transform transition-transform duration-300 ease-in-out group-hover:translate-x-[150%]"
        />
        <img
          src="/assets/man.png"
          alt="Delivery Icon Hover"
          className="absolute h-[16px] w-[16px] -translate-x-[150%] transform transition-transform duration-300 ease-in-out delay-100 group-hover:translate-x-0"
        />
      </span>
    </button>
  );
};

export default AnimatedButton;
