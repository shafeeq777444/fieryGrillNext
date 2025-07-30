/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectCards, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import "swiper/css/effect-coverflow";
import Card from "../../components/weeklyMenus/WeeklyCard";
import { useGetWeeklyMenu } from "../../services/Hooks/useMenus";
import WeeklyMenuSkeletonCard from "@/components/skeltons/menus-skeltons/WeeklyMenuSkeletonCard";

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

  // Debug: Check if products have price data
  if (menuArray.length > 0 && menuArray[0].products.length > 0) {
    console.log("First product price:", menuArray[0].products[0].price);
  }

  const targetRef = useRef(null);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  // Set `isLargeScreen` based on screen width (Tailwind md breakpoint - 768px)
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768); // 768px = md (tablet and up)
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const xRange = [0, 1];
  const xOutput = isLargeScreen
    ? ["1%", `-${menuArray.length + 14}%`]
    : ["0%", "0%"]; // No transform on mobile

  const x = useTransform(scrollYProgress, xRange, xOutput);

  return (
    <>
      <section ref={targetRef} className="relative h-[100vh] md:h-[200vh] bg-gradient-to-br from-white via-red-50 to-amber-50">
        <div className="sticky top-0 flex flex-col h-full md:h-[90vh] w-full">
          {/* Header */}
          <div className="flex flex-col items-center justify-center w-full pt-8 pb-4 px-4 md:pt-12 md:pb-8 text-center gap-4 z-30 relative">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mt-10 -mb-4"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-red-800 mb-2 drop-shadow-sm">
                Fiery Grills Weekly Tiffin Menu
              </h2>
              <p className="text-lg text-slate-600">Discover what's cooking throughout the week</p>
            </motion.div>
          </div>

          {/* Carousel */}
          <div className="flex-1 flex items-center overflow-hidden mt-4">
            {isLargeScreen ? (
              // Desktop/Tablet (All cards displayed)
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
              // Mobile (Enhanced Swiper with better effects)
              <div className="w-full h-full flex items-center justify-center px-4 relative">
                {/* Background decorative elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <div className="absolute -top-10 -left-10 w-20 h-20 bg-red-200 rounded-full opacity-20 blur-xl"></div>
                  <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-amber-200 rounded-full opacity-20 blur-xl"></div>
                  <div className="absolute top-1/2 left-0 w-16 h-16 bg-red-100 rounded-full opacity-30 blur-lg"></div>
                  <div className="absolute top-1/3 right-0 w-12 h-12 bg-amber-100 rounded-full opacity-30 blur-lg"></div>
                </div>
                
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

      {/* Enhanced Modal */}
      {selectedDay && (
        <motion.div 
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedDay(null)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div 
            className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden"
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
              duration: 0.4,
              ease: "easeOut"
            }}
          >
            {/* Modal Header */}
            <div className="relative h-48 overflow-hidden rounded-t-3xl">
              <img
                src={selectedDay.image}
                alt={selectedDay.day}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h2 className="text-2xl font-bold">{selectedDay.day}</h2>
                <p className="text-sm opacity-90">{selectedDay.date}</p>
              </div>
              <motion.button
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm text-white rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                onClick={() => setSelectedDay(null)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                ×
              </motion.button>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto max-h-[60vh]">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Today's Menu</h3>
              </div>

              <div className="space-y-4">
                {selectedDay.products.map((product, index) => (
                  <motion.div
                    key={product.productID}
                    className="bg-gradient-to-r from-red-50 to-amber-50 rounded-2xl p-4 border border-red-100"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-semibold text-gray-800">{product.productName}</h4>
                        <span className="inline-block bg-red-100 text-red-700 text-xs px-2 py-1 rounded-full font-medium mt-1">
                          {product.course}
                        </span>
                      </div>
                      <span className="text-lg font-bold text-red-600">£{product.price}</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{product.productDescription}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default HorizontalScrollCarousel;
