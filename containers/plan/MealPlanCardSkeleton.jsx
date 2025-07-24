// components/skeletons/MealPlanCardSkeleton.jsx
import React from "react";

const MealPlanCardSkeleton = () => {
    return (
        <div className="bg-white rounded-2xl border border-gray-200 animate-pulse p-6 shadow-sm flex flex-col justify-between h-full">
            {/* Top icon/title */}
            <div className="flex justify-center mb-4">
                <div className="h-16 w-16 bg-gray-300 rounded-full" />
            </div>

            {/* Plan name */}
            <div className="h-4 w-24 bg-gray-200 rounded mx-auto mb-2" />

            {/* Price */}
            <div className="h-6 w-32 bg-gray-300 rounded mx-auto mb-6" />

            {/* Features */}
            <div className="space-y-3 mb-8">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="h-3 bg-gray-200 rounded w-full" />
                ))}
            </div>

            {/* CTA Button */}
            <div className="h-10 bg-gray-300 rounded w-full" />
        </div>
    );
};

export default MealPlanCardSkeleton;
