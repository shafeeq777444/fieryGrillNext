import React from "react";

export default function DeliveryLocationsSkeleton() {
  return (
    <div className="bg-gray-50 min-h-screen px-4 md:px-12 py-10 animate-pulse">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Map + Feature Section */}
        <div className="w-full lg:w-1/2 space-y-6">
          <div className="h-[300px] md:h-[400px] lg:h-[60vh] rounded-xl shadow-lg border border-gray-200 bg-gray-200" />
          <div className="hidden lg:block space-y-3">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-4 w-1/2 bg-gray-300 rounded" />
            ))}
          </div>
        </div>

        {/* Location List Section */}
        <div className="w-full lg:w-1/2 flex flex-col items-center">
          <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl border border-gray-100 p-0 sm:p-2 md:p-4">
            <div className="px-4 pt-4 pb-2 border-b border-gray-100 sticky top-0 bg-white z-10 rounded-t-2xl">
              <div className="h-6 w-1/3 bg-gray-300 rounded" />
            </div>

            <div className="max-h-[60vh] min-h-[200px] overflow-y-auto px-2 py-2 md:px-4 md:py-4 flex flex-col gap-3">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-full bg-gray-100 border border-gray-200 rounded-xl px-4 py-3 flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-gray-300" />
                  <div className="h-4 w-2/3 bg-gray-300 rounded" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
