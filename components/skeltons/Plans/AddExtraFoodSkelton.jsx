import React from "react";

const AddExtraFoodSkelton = () => {
  const skeletonItems = Array(3).fill(null);

  return (
    <div className="max-w-7xl mx-auto py-14 px-4 animate-pulse">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="h-8 w-48 bg-gray-300 mx-auto rounded" />
        <div className="mt-3 h-4 w-3/4 md:w-1/2 bg-gray-200 mx-auto rounded" />
      </div>

      {/* Skeleton Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skeletonItems.map((_, index) => (
          <div
            key={index}
            className="p-4"
          >
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="relative h-56 bg-gray-200 rounded-t-2xl" />
              <div className="p-4 bg-gray-50">
                <div className="h-4 w-2/3 bg-gray-300 rounded mb-2" />
                <div className="h-3 w-1/3 bg-gray-200 rounded" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddExtraFoodSkelton;
