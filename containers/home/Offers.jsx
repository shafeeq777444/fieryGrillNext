import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useGetAllOfferBanner } from "@/services/Hooks/useOfferBanner";


const Offers = () => {
  const { data: offerBanner = [], isLoading } = useGetAllOfferBanner("FG");
  const [selectedBanner, setSelectedBanner] = useState(null);

  // if (isLoading) return <p>Loading...</p>;

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
          320: { slidesPerView: 1.2 },
          480: { slidesPerView: 1.8 },
          640: { slidesPerView: 2.2 },
          768: { slidesPerView: 2.5 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        grabCursor={true}
      >
        {offerBanner.map((offer, index) => (
          <SwiperSlide key={offer._id || index}>
            <div 
              className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-[1.02] active:scale-98"
              onClick={() => setSelectedBanner(offer)}
              role="button"
              tabIndex={0}
            >
              <img
                src={offer.image}
                alt={offer.title}
                className="w-full h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72 object-cover"
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
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative"
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
            <img
              src={selectedBanner.image}
              alt={selectedBanner.title}
              className="rounded-lg w-full h-56 object-cover mb-4 shadow-md"
            />
            <h2 className="text-xl font-semibold mb-2 text-gray-800">
              {selectedBanner.title}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {selectedBanner.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Offers;
