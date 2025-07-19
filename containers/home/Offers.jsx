import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const offerImages = [
  "/offers/ddf0724a-547f-4af8-aad6-5d9add5821bb.jpg",
  "/offers/banner 3.jpg",
  "/offers/f0881fb3-6370-4a10-959d-1086e99519ad.jpg",
  "/offers/ddf0724a-547f-4af8-aad6-5d9add5821bb.jpg",
  "/offers/banner 3.jpg",
  "/offers/f0881fb3-6370-4a10-959d-1086e99519ad.jpg"
];

const Offers = () => {
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
        {offerImages.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">
              <img
                src={src}
                alt={`Offer ${index + 1}`}
                className="w-full h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72 object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Offers;
