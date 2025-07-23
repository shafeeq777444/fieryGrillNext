/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
"use client"
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Card from "../../components/weeklyMenus/WeeklyCard";
import { useGetWeeklyMenu } from "../../services/Hooks/useMenus";

// Punjabi dish images (add or adjust as needed)
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
    // Simple hash: day + weekNum
    const hash =
        day.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0) + weekNum;
    return punjabiImages[hash % punjabiImages.length];
}

const HorizontalScrollCarousel = () => {
    const { data: weeklyMenu } = useGetWeeklyMenu();
    const weekNum = getWeekNumber();

    // Transform weeklyMenu array to array of card data
    const menuArray = weeklyMenu
        ? weeklyMenu.map(({ day, items }) => ({
            day,

            sides: items,
            image: getImageForDay(day, weekNum)
        }))
        : [];
    
    const targetRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);
    // const [activeCategory, setActiveCategory] = useState("non-vegetarian");
    // const [weeklyMenu, setWeeklyMenu] = useState(nonVegWeeklyMenu||[]);
    // const categories = [
    //     { id: "vegetarian", name: "Vegetarian", menu: vegWeeklyMenu||[] },
    //     { id: "non-vegetarian", name: "Non-Vegetarian", menu: nonVegWeeklyMenu||[] },
    //     { id: "mixed", name: "Mixed", menu: mixedWeeklyMenu },
    // ];
    // Function to handle category change
    // const handleCategoryChange = (categoryId) => {
    //     setActiveCategory(categoryId);
    //     const selectedCategory = categories.find((cat) => cat.id === categoryId);
    //     setWeeklyMenu(selectedCategory.menu);
    // };
    // useEffect(() => {
    //     const selectedCategory = categories.find((cat) => cat.id === activeCategory);
    //     if (selectedCategory && selectedCategory.menu?.length > 0) {
    //         setWeeklyMenu(selectedCategory.menu);
    //     }
    // }, [vegWeeklyMenu, nonVegWeeklyMenu, mixedWeeklyMenu, activeCategory,]);

    // Check if device is mobile
    useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkIsMobile();
        window.addEventListener("resize", checkIsMobile);

        return () => {
            window.removeEventListener("resize", checkIsMobile);
        };
    }, []);
    

    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    // Adjust movement amount based on screen size
    const xRange = isMobile ? [0, 1] : [0, 1];

    // Adjusted to use the dynamic menuArray state
    const xOutput = isMobile ? ["0%", `-${menuArray?.length * 85 - 10}%`] : ["1%", `-${menuArray?.length + 24}%`];

    const x = useTransform(scrollYProgress, xRange, xOutput);

    return (
        <section ref={targetRef} className="relative h-[100vh] md:h-[200vh] bg-white">
            <div className="sticky top-0 flex  flex-col h-full md:h-[90vh] w-full">
                {/* Heading Section with Fixed z-index */}
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

                    {/* Category Toggle Buttons with improved mobile styling */}
                    {/* <div className="flex justify-center mb-6 md:mb-8 z-40">
                        <div className="bg-white p-1 rounded-lg shadow-md flex">
                            {categories.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => handleCategoryChange(category.id)}
                                    className={`relative px-4 md:px-6 py-2 md:py-3 rounded-md text-sm font-medium transition-all duration-300 min-w-16 md:min-w-24
                ${activeCategory === category.id ? "text-white" : "text-gray-700 hover:text-red-800"}`}
                                >
                                    {activeCategory === category.id && (
                                        <motion.div
                                            layoutId="activeCategory"
                                            className="absolute inset-0 bg-red-800 rounded-md"
                                            initial={false}
                                            transition={{ type: "spring", duration: 0.6 }}
                                        />
                                    )}
                                    <span className="relative z-10">{category.name}</span>
                                </button>
                            ))}
                        </div>
                    </div> */}
                </div>

                {/* Carousel Section with adjusted spacing for mobile */}
                <div className={`flex-1 flex items-center overflow-hidden ${isMobile ? 'mt-4' : 'mt-4'}`}>
                    {isMobile ? (
                        // Mobile view - swipeable horizontal scroll with better positioning
                        <div className="w-full overflow-x-auto px-4 pb-4 scrollbar-hide snap-x snap-mandatory scrollbar-hide-y">
                            <div className="flex gap-4">
                                {menuArray.map((menu) => (
                                    <div key={menu.day} className="snap-center">
                                        <Card menu={menu} isMobile={true} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        // Desktop view - framer motion controlled scroll
                        <motion.div
                            style={{ x }}
                            className="flex gap-6 px-8"
                            // key={activeCategory} // Key to force re-render when category changes
                        >
                            {menuArray.map((menu) => (
                                <Card key={menu.day} menu={menu} />
                            ))}
                        </motion.div>
                    )}
                </div>
                <div>
                    <div className="absolute bottom-6 w-full text-center">
                    </div>
                </div>
                   
            </div>
        </section>
    );
};

export default HorizontalScrollCarousel;