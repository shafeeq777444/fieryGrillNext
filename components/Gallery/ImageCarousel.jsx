/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export const ImageCarousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const controls = useAnimation();
  
  // Auto-scroll animation
  useEffect(() => {
    const autoScroll = async () => {
      // Animate the transition out
      await controls.start({
        x: "-100%",
        opacity: 0,
        transition: { duration: 0.5, ease: "easeInOut" }
      });
      
      // Update the image index
      setCurrentImageIndex(prevIndex => 
        prevIndex >= images.length - 1 ? 0 : prevIndex + 1
      );
      
      // Reset position without animation
      controls.set({ x: "100%", opacity: 0 });
      
      // Animate back to center
      await controls.start({
        x: "0%",
        opacity: 1,
        transition: { duration: 0.5, ease: "easeInOut" }
      });
    };
    
    // Set up interval for auto-scrolling
    const interval = setInterval(autoScroll, 3000);
    
    // Clean up
    return () => clearInterval(interval);
  }, [controls, images.length]);
  
  return (
    <div className="bg-red-700 p-6">
      <motion.div
        className="relative pb-4"
        animate={controls}
        initial={{ x: 0, opacity: 1 }}
      >
        <img 
          src={images[currentImageIndex]} 
          alt="Food wrap" 
          className="w-full rounded-lg object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <div className="text-center px-6 py-4 bg-black bg-opacity-50 rounded-lg">
            <h2 className="text-4xl font-bold tracking-wider mb-1">I'M READY FOR A HUG</h2>
            <p className="text-xl font-medium">YOUR TONGUE'S INVITED!</p>
          </div>
        </div>
      </motion.div>
      
      {/* Image indicator dots */}
      {/* <ImageIndicators 
        totalImages={images.length} 
        currentIndex={currentImageIndex} 
      /> */}
    </div>
  );
};