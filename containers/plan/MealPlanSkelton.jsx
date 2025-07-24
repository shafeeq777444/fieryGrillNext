import React from "react";
import MealPlanCardSkeleton from "./MealPlanCardSkeleton";

const MealPlansSkeleton = () => {
    return (
        <div className="min-h-screen bg-white py-10 animate-pulse">
            <div className="container mx-auto px-4">
                {/* Section Heading */}
                <div className="text-center mb-12">
                    <div className="h-6 w-48 bg-gray-300 mx-auto rounded mb-3" />
                    <div className="h-4 w-80 bg-gray-200 mx-auto rounded" />
                </div>

                {/* Category Buttons */}
                <div className="flex justify-center mb-12">
                    <div className="bg-white p-1 rounded-lg shadow-md flex gap-2">
                        {[...Array(3)].map((_, i) => (
                            <div key={i} className="h-10 w-24 bg-gray-300 rounded-md" />
                        ))}
                    </div>
                </div>

                {/* Sub-section Title */}
                <div className="text-center mb-12">
                    <div className="h-5 w-40 bg-gray-300 mx-auto rounded mb-2" />
                    <div className="h-4 w-56 bg-gray-200 mx-auto rounded" />
                </div>

                {/* Skeleton Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {[...Array(3)].map((_, i) => (
                        <MealPlanCardSkeleton key={i} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MealPlansSkeleton;
