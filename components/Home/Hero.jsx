'use client';
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { useGetContactDetails } from "@/services/Hooks/useContactDetails";

// Skeleton shimmer style
const SkeletonLoader = () => (
  <div className="absolute inset-0 z-10 bg-gray-200 animate-pulse overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-shimmer" />

    <div className="absolute top-1/2 right-6 transform -translate-y-1/2 hidden md:flex flex-col gap-6 z-10">
      <div className="w-10 h-10 rounded-full bg-gray-300" />
      <div className="w-10 h-10 rounded-full bg-gray-300" />
      <div className="w-10 h-10 rounded-full bg-gray-300" />
    </div>

    <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 text-center">
      <div className="w-64 h-12 bg-gray-300 rounded" />
      <div className="w-80 h-6 bg-gray-300 rounded" />
      <div className="w-56 h-10 bg-gray-300 rounded-full" />
    </div>
  </div>
);

const Hero = () => {
  const { data: contactDetails } = useGetContactDetails();
  const router = useRouter();
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <div className="relative w-full h-[100vh] overflow-hidden">
      {/* Background image */}
      <motion.img
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className={`w-full h-full object-cover transition-all duration-500 ${imgLoaded ? 'blur-xl scale-105' : 'blur-0 scale-100'}`}
        src="/assets/hero9.jpg"
        alt="Punjab food tiffin"
        onLoad={() => setImgLoaded(true)}
      />

      {/* Skeleton shimmer over image until it loads */}
      {/* {!imgLoaded && <SkeletonLoader />} */}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#00000088] bg-opacity-40 z-10"></div>

      {/* Social Icons */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute top-1/2 right-6 transform -translate-y-1/2 space-y-4 z-20 md:flex hidden flex-col gap-4"
      >
        <a href={contactDetails?.instagram} target="_blank" className="text-white text-2xl hover:text-[#EBB03F] transition">
          <FaInstagram />
        </a>
        <a href={contactDetails?.facebook} target="_blank" className="text-white text-2xl hover:text-[#EBB03F] transition">
          <FaFacebookF />
        </a>
        <a href={contactDetails?.tiktok} target="_blank" className="text-white text-2xl hover:text-[#EBB03F] transition">
          <FaTiktok />
        </a>
      </motion.div>

      {/* Text */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-6 text-center text-white z-20"
      >
        <h1 className="font-playfair text-8xl font-light">fiery Grills</h1>
        <p className="text-xl md:text-2xl font-semibold font-Galada drop-shadow-lg">
          Ghar jaisa Punjabi khana, ek click mein!
        </p>
      </motion.div>
    </div>
  );
};

export default Hero;
