/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
"use client";
import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import Card from "../../components/weeklyMenus/WeeklyCard";
import { useGetWeeklyMenu } from "../../services/Hooks/useMenus";
import WeeklyMenuSkeletonCard from "@/components/skeltons/menus-skeltons/WeeklyMenuSkeletonCard";
import LazyImg from "@/components/common/LazyImg";

// Punjabi dish images
const punjabiImages = [
  "/weeklyMenuPhotos/1.jpg",
  "/weeklyMenuPhotos/2.jpg",
  "/weeklyMenuPhotos/3.jpg",
  "/weeklyMenuPhotos/4.jpg",
  "/weeklyMenuPhotos/5.jpg",
  "/weeklyMenuPhotos/6.jpg",
  "/weeklyMenuPhotos/7.jpg",
  "/weeklyMenuPhotos/8.jpg",
  "/weeklyMenuPhotos/9.jpg",
  "/weeklyMenuPhotos/10.jpg",
  "/weeklyMenuPhotos/11.jpg",
];

// Helper to get current week number
function getWeekNumber(date = new Date()) {
  const firstJan = new Date(date.getFullYear(), 0, 1);
  const days = Math.floor((date - firstJan) / (24 * 60 * 60 * 1000));
  return Math.ceil((date.getDay() + 1 + days) / 7);
}

// Deterministic random image for a given day/week
function getImageForDay(day, weekNum) {
  const hash = day.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0) + weekNum;
  return punjabiImages[hash % punjabiImages.length];
}

const HorizontalScrollCarousel = () => {
  const { data: weeklyMenu } = useGetWeeklyMenu();
  const weekNum = getWeekNumber();
  const [selectedDay, setSelectedDay] = useState(null);

  // Map the new data structure
  const menuArray = weeklyMenu?.menus
    ? weeklyMenu.menus.map((menuItem) => ({
        day: menuItem.dayName,
        date: menuItem.date,
        dayNumber: menuItem.dayNumber,
        products: menuItem.menu.products || [],
        image: getImageForDay(menuItem.dayName, weekNum),
        menuData: menuItem.menu, // Full menu data for modal
      }))
    : [];

  const targetRef = useRef(null);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  // Set `isLargeScreen` based on screen width (Tailwind md breakpoint - 768px)
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <section
        ref={targetRef}
        className="relative h-[100vh] md:h-[200vh] bg-gradient-to-br from-white via-red-50 to-amber-50"
      >
        <div className="sticky top-0 flex flex-col h-full md:h-[90vh] w-full">
          {/* Header */}
          <div className="flex flex-col items-center justify-center w-full pt-8 pb-4 px-4 md:pt-12 md:pb-8 text-center gap-4 z-30 relative">
            <div className="text-center mt-10 -mb-4">
              <h2 className="text-3xl md:text-5xl font-bold text-red-800 mb-2 drop-shadow-sm">
                Fiery Grills Weekly Tiffin Menu
              </h2>
              <p className="text-lg text-slate-600">
                Discover what's cooking throughout the week
              </p>
            </div>
          </div>

          {/* Carousel */}
          <div className="flex-1 flex items-center overflow-hidden mt-4">
            {isLargeScreen ? (
              <div className="w-full flex items-center justify-center px-4 md:px-8">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 w-full max-w-7xl">
                  {menuArray.length > 0
                    ? menuArray.map((menu) => (
                        <Card
                          key={menu.day}
                          menu={menu}
                          isMobile={false}
                          onClick={() => setSelectedDay(menu)}
                        />
                      ))
                    : Array.from({ length: 5 }).map((_, idx) => (
                        <WeeklyMenuSkeletonCard key={idx} isMobile={false} />
                      ))}
                </div>
              </div>
            ) : (
              <div className="w-full h-full flex items-center justify-center px-4 relative">
                <Swiper
                  effect="coverflow"
                  grabCursor={true}
                  modules={[EffectCoverflow, Pagination, Autoplay]}
                  className="w-full max-w-sm"
                  coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 50,
                    modifier: 1.5,
                    slideShadows: false,
                  }}
                  pagination={{
                    clickable: true,
                    dynamicBullets: true,
                    renderBullet: function (index, className) {
                      return `<span class="${className} bg-red-500 opacity-60 hover:opacity-100 transition-opacity duration-300"></span>`;
                    },
                  }}
                  autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                  loop={true}
                  speed={800}
                  initialSlide={0}
                  centeredSlides={true}
                  slidesPerView="auto"
                  spaceBetween={20}
                >
                  {menuArray.length > 0
                    ? menuArray.map((menu) => (
                        <SwiperSlide key={menu.day} className="w-auto">
                          <Card
                            menu={menu}
                            isMobile={true}
                            onClick={() => setSelectedDay(menu)}
                          />
                        </SwiperSlide>
                      ))
                    : Array.from({ length: 5 }).map((_, idx) => (
                        <SwiperSlide key={idx} className="w-auto">
                          <WeeklyMenuSkeletonCard isMobile={true} />
                        </SwiperSlide>
                      ))}
                </Swiper>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Normal Modal (No animation) */}
      {selectedDay && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedDay(null)}
        >
          <div
            className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative h-48 overflow-hidden rounded-t-3xl">
              <LazyImg
                src={selectedDay.image}
                alt={selectedDay.day}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h2 className="text-2xl font-bold">{selectedDay.day}</h2>
                <p className="text-sm opacity-90">{selectedDay.date}</p>
              </div>
              <button
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm text-white rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                onClick={() => setSelectedDay(null)}
              >
                ×
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto max-h-[60vh]">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Today's Menu
                </h3>
              </div>

              <div className="space-y-4">
                {selectedDay.products.map((product) => (
                  <div
                    key={product.productID}
                    className="bg-gradient-to-r from-red-50 to-amber-50 rounded-2xl p-4 border border-red-100"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-semibold text-gray-800">
                          {product.productName}
                        </h4>
                        <span className="inline-block bg-red-100 text-red-700 text-xs px-2 py-1 rounded-full font-medium mt-1">
                          {product.course}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {product.productDescription}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HorizontalScrollCarousel;
