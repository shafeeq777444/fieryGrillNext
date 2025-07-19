import React from "react";

const MenuGridSkeleton = ({ columns = 3 }) => {
  return (
    <div className="py-16 px-8 bg-gray-50 animate-pulse">
      <div className="max-w-6xl mx-auto">
        <div className="h-8 bg-gray-300 w-2/3 mx-auto mb-12 rounded"></div>
        <div className={`grid grid-cols-1 md:grid-cols-${columns} gap-8`}>
          {[...Array(columns * 2)].map((_, i) => (
            <div key={i} className="bg-white p-4 rounded-lg shadow">
              <div className="w-full h-32 bg-gray-200 rounded mb-4"></div>
              <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuGridSkeleton;
