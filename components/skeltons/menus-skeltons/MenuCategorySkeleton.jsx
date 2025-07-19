import React from "react";

const MenuCategorySkeleton = ({ imageFirst = true }) => {
  return (
    <div className="py-16 animate-pulse">
      <div className="max-w-6xl mx-auto px-8">
        <div className="h-8 bg-gray-300 w-2/3 mx-auto mb-12 rounded"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Mobile image */}
          <div className="flex justify-center md:hidden mt-8">
            <div className="rounded-lg overflow-hidden bg-gray-200 w-80 h-80"></div>
          </div>

          {/* Desktop image left */}
          {imageFirst && (
            <div className="md:flex justify-center hidden">
              <div className="rounded-lg overflow-hidden bg-gray-200 w-full h-80"></div>
            </div>
          )}

          {/* Dish list skeleton */}
          <div className="space-y-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="space-y-2">
                <div className="h-5 bg-gray-300 w-1/2 rounded"></div>
                <div className="h-4 bg-gray-200 w-full rounded"></div>
              </div>
            ))}
          </div>

          {/* Desktop image right */}
          {!imageFirst && (
            <div className="md:flex justify-center hidden">
              <div className="rounded-lg overflow-hidden bg-gray-200 w-full h-80"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuCategorySkeleton;
