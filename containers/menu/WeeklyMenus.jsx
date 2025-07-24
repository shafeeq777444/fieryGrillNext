/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useState, useEffect } from "react";
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

  const menuArray = weeklyMenu
    ? weeklyMenu.map(({ day, items }) => ({
        day,
        sides: items,
        image: getImageForDay(day, weekNum),
      }))
    : [];

  const targetRef = useRef(null);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  // Set `isLargeScreen` based on screen width (Tailwind lg breakpoint)
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // 1024px = lg
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
    <section ref={targetRef} className="relative h-[100vh] md:h-[200vh] bg-white">
      <div className="sticky top-0 flex flex-col h-full md:h-[90vh] w-full">
        {/* Header */}
        <div className="flex flex-col items-center justify-center w-full pt-8 pb-4 px-4 md:pt-12 md:pb-8 text-center gap-4 z-30 relative">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mt-10 -mb-4"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-red-800 mb-2">
              Fiery Grills Weekly Tiffin Menu
            </h2>
            <p className="text-lg text-slate-600">Discover what's cooking throughout the week</p>
          </motion.div>
        </div>

        {/* Carousel */}
        <div className="flex-1 flex items-center overflow-hidden mt-4">
          {isLargeScreen ? (
            // Desktop (Framer motion scroll)
            <motion.div style={{ x }} className="flex gap-6 px-8">
              {menuArray.length > 0
                ? menuArray.map((menu) => (
                    <Card key={menu.day} menu={menu} isMobile={false} />
                  ))
                : Array.from({ length: 5 }).map((_, idx) => (
                    <WeeklyMenuSkeletonCard key={idx} isMobile={false} />
                  ))}
            </motion.div>
          ) : (
            // Mobile (Native horizontal scroll)
            <div className="w-full overflow-x-auto px-4 pb-4 scrollbar-hide snap-x snap-mandatory scrollbar-hide-y">
              <div className="flex gap-4">
                {menuArray.length > 0
                  ? menuArray.map((menu) => (
                      <Card key={menu.day} menu={menu} isMobile={true} />
                    ))
                  : Array.from({ length: 5 }).map((_, idx) => (
                      <WeeklyMenuSkeletonCard key={idx} isMobile={true} />
                    ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HorizontalScrollCarousel;
