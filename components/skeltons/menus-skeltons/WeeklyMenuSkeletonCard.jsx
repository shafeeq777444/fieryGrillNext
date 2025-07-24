import React from "react";

const WeeklyMenuSkeletonCard = ({ isMobile }) => {
  return (
    <div
      className={`animate-pulse rounded-2xl bg-gray-100 border border-gray-200 shadow-inner ${
        isMobile ? "w-[250px] flex-shrink-0" : "w-[320px]"
      }`}
    >
      <div className="h-56 md:h-64 bg-gray-300 rounded-t-2xl" />
      <div className="p-4 md:p-5 space-y-3">
        <div className="w-24 h-4 bg-gray-300 rounded" />
        <div className="w-3/4 h-4 bg-gray-300 rounded" />
        <div className="w-1/2 h-4 bg-gray-300 rounded" />
      </div>
    </div>
  );
};

export default WeeklyMenuSkeletonCard;
