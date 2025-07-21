import React, { useState, useEffect, useRef } from "react";
const FADE_DURATION = 400; // ms

const MenuCategorySection = ({ title, image, dishes, imageFirst = true, pageSize = 6 }) => {
  const [page, setPage] = useState(1);
  const [isFading, setIsFading] = useState(false);
  const totalPages = Math.ceil(dishes.length / pageSize);
  const startIdx = (page - 1) * pageSize;
  const endIdx = startIdx + pageSize;
  const visibleDishes = dishes.slice(startIdx, endIdx);
  const timeoutRef = useRef();

  const changePageWithFade = (newPage) => {
    setIsFading(true);
    timeoutRef.current = setTimeout(() => {
      setPage(newPage);
      setIsFading(false);
    }, FADE_DURATION);
  };

  const handlePrev = () => {
    if (page > 1) changePageWithFade(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages) changePageWithFade(page + 1);
  };

  useEffect(() => {
    if (totalPages <= 1) return;
    const interval = setInterval(() => {
      changePageWithFade(page === totalPages ? 1 : page + 1);
    }, 3000 + FADE_DURATION);
    return () => clearInterval(interval);
  }, [totalPages, page]);

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  return (
    <div className={`${title === "Our Non-Vegetarian Specialties" ? "bg-gray-50" : "bg-white"} py-16 md:h-250`}>
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-3xl font-bold text-red-800 mb-12 text-center">{title}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Mobile image (top) if imageFirst is false */}
          <div className="flex justify-center md:hidden mt-8">
            <div className="rounded-lg shadow-lg overflow-hidden h-60  w-full">
              <img src={image} alt={title} className="object-cover w-full h-full" />
            </div>
          </div>

          {/* Left image (desktop only) if imageFirst */}
          {imageFirst && (
            <div className="md:flex justify-center hidden">
              <div className="rounded-lg shadow-lg overflow-hidden h-160 w-full">
                <img src={image} alt={title} className="object-cover w-full h-full" />
              </div>
            </div>
          )}

          {/* Dishes section */}
          <div>
            <ul
              className={`space-y-6 transition-opacity duration-[${FADE_DURATION}ms] ${isFading ? "opacity-0" : "opacity-100"}`}
              style={{ transition: `opacity ${FADE_DURATION}ms` }}
            >
              {visibleDishes.map((dish, index) => (
                <li key={index} className="border-b border-amber-200 pb-4">
                  <h3 className="text-xl font-medium text-amber-900">{dish?.productName}</h3>
                  <p className="text-slate-600 mt-1">{dish?.productDescription}</p>
                </li>
              ))}
            </ul>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-4 mt-6">
                <button
                  onClick={handlePrev}
                  disabled={page === 1 || isFading}
                  className="w-10 h-10 flex items-center justify-center bg-amber-200 text-amber-900 rounded-full disabled:opacity-40 hover:bg-amber-300 transition"
                  aria-label="Previous"
                >
                  ‹
                </button>

                {/* Hide page number text on small screens */}
                <span className="hidden md:inline text-slate-700">
                  Page {page} of {totalPages}
                </span>

                <button
                  onClick={handleNext}
                  disabled={page === totalPages || isFading}
                  className="w-10 h-10 flex items-center justify-center bg-amber-200 text-amber-900 rounded-full disabled:opacity-40 hover:bg-amber-300 transition"
                  aria-label="Next"
                >
                  ›
                </button>
              </div>
            )}
          </div>

          {/* Right image (desktop only) if !imageFirst */}
          {!imageFirst && (
            <div className="md:flex justify-center hidden">
              <div className="rounded-lg shadow-lg overflow-hidden h-160 w-full">
                <img src={image} alt={title} className="object-cover w-full h-full" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuCategorySection;
