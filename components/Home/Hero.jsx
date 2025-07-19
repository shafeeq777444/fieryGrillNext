'use client';
/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaFacebookF,  } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
// import AnimatedButton from "./Buttons/Order";
import { FaTiktok } from "react-icons/fa";

const Hero = () => {
  const router = useRouter();

  return (
    <div className="relative w-full h-[100vh] overflow-hidden">
      {/* Background image */}
      <motion.img
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full h-full object-cover"
        src="/assets/hero9.jpg"
        alt="Punjab food tiffin"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#00000088] bg-opacity-40"></div>

      {/* Social Media */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute top-1/2 right-6 transform -translate-y-1/2 space-y-4 z-10 md:flex hidden flex-col gap-4"
      >
        <a href="https://www.instagram.com/_fierygrillss/" target="_blank" className="text-white text-2xl hover:text-[#EBB03F] transition">
          <FaInstagram />
        </a>

        <a href="#" className="text-white text-2xl hover:text-[#EBB03F] transition">
          <FaFacebookF />
        </a>
        <a href="#" className="text-white text-2xl hover:text-[#EBB03F] transition">
        <FaTiktok />
        </a>
      </motion.div>

      {/* Text & Buttons */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-6 text-center text-white"
      >
        <h1 className="font-playfair text-8xl font-light">
          fiery Grills
        </h1>

        <p className="text-xl md:text-2xl font-semibold font-Galada drop-shadow-lg">
        Ghar jaisa Punjabi khana, ek click mein!
        </p>

        <button
          onClick={() => {
            router.push('/menu');
            setTimeout(() => {
              window.scrollTo({
                top: document.body.scrollHeight / 1.38,
                behavior: "smooth",
              });
            }, 100);
          }}
          className="bg-red-800 uppercase hover:bg-red-900 text-white font-bold px-6 py-3 rounded-full inline-flex items-center transition duration-300"
        >
          Menu for the Week <ArrowRight className="ml-2 h-5 w-5" />
        </button>
      </motion.div>
    </div>
  );
};

export default Hero;
