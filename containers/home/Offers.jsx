import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useGetAllOfferBanner } from "@/services/Hooks/useOfferBanner";

const Offers = () => {
  const { data: offerBanner = [], isLoading } = useGetAllOfferBanner("FG");
  const [selectedBanner, setSelectedBanner] = useState(null);

  // Function to parse description string
  const parseDescription = (desc) => {
    if (!desc) return null;

    // Example format: /*Main Heading/Point1/Point2
    const cleaned = desc.replace(/^\/\*/, "").trim();
    const parts = cleaned.split("/-").map((p) => p.trim()).filter(Boolean);

    if (parts.length === 0) return null;

    const heading = parts[0];
    const points = parts.slice(1);

    return { heading, points };
  };

  return (
    <div className="relative w-full bg-white py-6 px-4 sm:px-8 xl:px-4 mt-8 overflow-hidden">
      <Swiper
        loop={true}
        speed={2500} // transition duration (ms)
        autoplay={{
          delay: 3000, // wait time before next slide (ms)
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        spaceBetween={16}
        modules={[Autoplay]}
        breakpoints={{
          320: { slidesPerView: 1.5 },
          480: { slidesPerView: 2.2 },
          640: { slidesPerView: 3 },
          768: { slidesPerView: 3.5 },
          1024: { slidesPerView: 4.5 },
          1280: { slidesPerView: 5.5 },
        }}
        grabCursor={true}
      >
        {offerBanner.map((offer, index) => (
          <SwiperSlide key={offer._id || index}>
            <div
              className="rounded-2xl m-2 overflow-hidden shadow-md hover:shadow-xl transition-all  duration-300 cursor-pointer hover:scale-[1.02] active:scale-98"
              onClick={() => setSelectedBanner(offer)}
              role="button"
              tabIndex={0}
            >
              <img
                src={offer.image}
                alt={offer.title}
                className="w-full aspect-[4/5] object-cover "
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modal */}
      {selectedBanner && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4 transition-opacity duration-200"
          onClick={() => setSelectedBanner(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative "
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute -top-3 -right-3 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-red-600 hover:scale-105 active:scale-95 transition-all duration-200"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedBanner(null);
              }}
            >
              ×
            </button>
<div className="max-h-[72vh] overflow-auto scrollbar-hide-y">
  
              <img
                src={selectedBanner.image}
                alt={selectedBanner.title}
                className="rounded-lg w-full aspect-[4/5] object-cover mb-4 shadow-md"
              />
              <h2 className="text-xl font-semibold mb-2 text-gray-800">
                {selectedBanner.title}
              </h2>
  
              {/* Description parsing */}
              {(() => {
                const parsed = parseDescription(selectedBanner.description);
                if (!parsed) return null;
  
                return (
                  <div>
                    <h3 className="text-lg font-medium text-gray-700 mb-2 ">
                      {parsed.heading}
                    </h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {parsed.points.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  </div>
                );
              })()}
</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Offers;
