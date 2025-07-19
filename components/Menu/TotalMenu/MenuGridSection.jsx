// components/MenuGridSection.jsx
import React from "react";
import SaladCards from "./SaladCards.jsx";

const MenuGridSection = ({ title, data = [], columns = 3 }) => {
  return (
    <div  className="py-16 px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-red-800 mb-12 text-center">
          {title}
        </h2>
        <div
          className={`grid grid-cols-1 md:grid-cols-${columns} gap-8`}
        >
          {data.map((item, index) => <SaladCards index={index} salad={item}/>)}
        </div>
      </div>
    </div>
  );
};

export default MenuGridSection;
