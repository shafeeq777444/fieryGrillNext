import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import LazyImg from "../common/LazyImg";
import { useGetAddOns } from "@/services/Hooks/useAddOns";
import AddExtraFoodSkelton from "../skeltons/Plans/AddExtraFoodSkelton";



const ExtraFood = () => {
  const { data: addOns, isLoading, error } = useGetAddOns("FG");

  if (isLoading) return <AddExtraFoodSkelton />;
  return (
    <div className="max-w-7xl mx-auto py-14 px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-primaryDark">
          Add-On Food Charges
        </h2>
        <p className="mt-3 text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
          Choose from a variety of delicious extras to customize your meal plan. 
          Additional charges apply based on your selection.
        </p>
      </div>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={2}
        slidesPerView={1}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {addOns?.map((charge, index) => (
          <SwiperSlide key={index}>
            <div className="p-4">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-[1.02]">
                <div className="relative h-56">
                  <LazyImg
                    src={charge?.img}
                    alt={charge?.item}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent px-4 py-3">
                    <h3 className="text-white text-lg font-semibold">
                      {charge.item}
                    </h3>
                    <p className="text-gray-200 text-sm">
                      ${charge?.price} per month
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ExtraFood;
