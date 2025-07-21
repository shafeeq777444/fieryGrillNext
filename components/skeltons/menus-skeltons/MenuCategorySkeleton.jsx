import React from "react";

const MenuCategorySkeleton = ({ imageFirst = true }) => {
  return (
    <div className="py-16 md:h-250 animate-pulse">
      <div className="max-w-6xl mx-auto px-8">
        {/* Title Skeleton */}
        <div className="h-8 bg-gray-300 w-2/3 mx-auto mb-12 rounded"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Mobile Image Skeleton (Top for small screens) */}
          <div className="flex justify-center md:hidden mt-8">
            <div className="rounded-lg overflow-hidden bg-gray-200 w-full h-60"></div>
          </div>

          {/* Desktop Left Image */}
          {imageFirst && (
            <div className="md:flex justify-center hidden">
              <div className="rounded-lg overflow-hidden bg-gray-200 w-full h-160"></div>
            </div>
          )}

          {/* Dish List Skeleton */}
          <div className="space-y-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="space-y-2 border-b border-gray-200 pb-4">
                <div className="h-5 bg-gray-300 w-1/2 rounded"></div>
                <div className="h-4 bg-gray-200 w-full rounded"></div>
              </div>
            ))}

            {/* Pagination Skeleton */}
            <div className="flex justify-center items-center gap-4 mt-6">
              <div className="w-10 h-10 rounded-full bg-gray-300"></div>
              <div className="hidden md:inline h-4 w-24 bg-gray-300 rounded"></div>
              <div className="w-10 h-10 rounded-full bg-gray-300"></div>
            </div>
          </div>

          {/* Desktop Right Image */}
          {!imageFirst && (
            <div className="md:flex justify-center hidden">
              <div className="rounded-lg overflow-hidden bg-gray-200 w-full h-160"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuCategorySkeleton;
