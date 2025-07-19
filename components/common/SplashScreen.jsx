// src/components/SplashScreen.jsx
import { motion as Motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function SplashScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 2500); // total splash duration
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <Motion.div
          className="fixed inset-0 z-50 bg-gradient-radial from-white via-gray-100 to-white flex items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Left curtain */}
          <Motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            // exit={{ x: "-100%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-1/2 h-full bg-black z-40"
          />

          {/* Right curtain */}
          <Motion.div
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            // exit={{ x: "100%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute top-0 right-0 w-1/2 h-full bg-black z-40"
          />

          {/* Logo Reveal with soft glow */}
          <Motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="z-50"
          >
            <img
              src={'/assets/logo1.png'}
              alt="Company Logo"
              className="w-32 h-32  shadow-2xl "
            />
          </Motion.div>
        </Motion.div>
      )}
    </AnimatePresence>
  );
}
