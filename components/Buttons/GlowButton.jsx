import React from 'react';
import './GlowButton.css';

const GlowButton = () => {
  return (
    <div className="flex h-20 items-center justify-center  ">
      <button className="glow-on-hover text-white text-sm font-semibold py-3 px-8 rounded-lg relative z-10">
        Call Now
      </button>
    </div>
  );
};

export default GlowButton;
