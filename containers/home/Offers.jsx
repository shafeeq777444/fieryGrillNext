import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useGetAllOfferBanner } from "@/services/Hooks/useOfferBanner";
import { motion, AnimatePresence } from "framer-motion";

const Offers = () => {
  const { data: offerBanner = [], isLoading } = useGetAllOfferBanner("FG");
  const [selectedBanner, setSelectedBanner] = useState(null);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="relative w-full bg-white py-6 px-4 sm:px-8 xl:px-4 mt-8 overflow-hidden">
      <Swiper
        loop={true}
        speed={8000}
        freeMode={true}
        allowTouchMove={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
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
      >
        {offerBanner.map((offer, index) => (
          <SwiperSlide key={offer._id || index}>
            <motion.div
              className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 cursor-pointer"
              onClick={() => setSelectedBanner(offer)}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <img
                src={offer.image}
                alt={offer.title}
                className="w-full h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72 object-cover"
              />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modal */}
      <AnimatePresence>
        {selectedBanner && (
          <motion.div 
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4"
            onClick={() => setSelectedBanner(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div 
              className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative"
              onClick={(e) => e.stopPropagation()}
              initial={{ 
                opacity: 0,
                scale: 0.9,
                y: 20
              }}
              animate={{ 
                opacity: 1,
                scale: 1,
                y: 0
              }}
              exit={{ 
                opacity: 0,
                scale: 0.9,
                y: 20
              }}
              transition={{ 
                duration: 0.3,
                ease: "easeOut"
              }}
            >
              <motion.button
                className="absolute -top-3 -right-3 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center shadow-lg"
                onClick={() => setSelectedBanner(null)}
                whileHover={{ 
                  scale: 1.1,
                  backgroundColor: "#dc2626"
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                ×
              </motion.button>
              <motion.img
                src={selectedBanner.image}
                alt={selectedBanner.title}
                className="rounded-lg w-full h-56 object-cover mb-4 shadow-md"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.3 }}
              />
              <motion.h2 
                className="text-xl font-semibold mb-2 text-gray-800"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.3 }}
              >
                {selectedBanner.title}
              </motion.h2>
              <motion.p 
                className="text-gray-700 leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
              >
                {selectedBanner.description}
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Offers;
