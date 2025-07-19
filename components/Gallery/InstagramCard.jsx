/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { MessageCircle, Bookmark } from "lucide-react";
import { motion, useAnimation } from "framer-motion";

export default function InstagramCard({ title, images = [], isActive }) {
  const [likes, setLikes] = useState(Math.floor(Math.random() * 5000) + 500);
  const [isLiked, setIsLiked] = useState(false);
  const [currentDate, setCurrentDate] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const now = new Date();
    const day = now.getDate();
    const month = now.toLocaleString("default", { month: "short" });
    setCurrentDate(`${day}${month}`);
  }, []);

  useEffect(() => {
    if (!isActive || images.length <= 1) return;

    const autoScroll = async () => {
      await controls.start({
        x: "-100%",
        opacity: 0,
        transition: { duration: 0.6, ease: "easeInOut" },
      });

      setCurrentImageIndex((prevIndex) =>
        prevIndex >= images.length - 1 ? 0 : prevIndex + 1
      );

      controls.set({ x: "100%", opacity: 0 });

      await controls.start({
        x: "0%",
        opacity: 1,
        transition: { duration: 0.6, ease: "easeInOut" },
      });
    };

    const interval = setInterval(autoScroll, 3000);
    return () => clearInterval(interval);
  }, [controls, images.length, isActive]);

  const handleLike = () => {
    setLikes((prev) => (isLiked ? prev - 1 : prev + 1));
    setIsLiked(!isLiked);
  };

  return (
    <div className="flex items-center justify-center w-full h-[60vh]">
      <div className="w-80 bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col justify-start">
        {/* Top section with image */}
        <div className="relative">
          <motion.div
            className="relative p-3"
            animate={controls}
            initial={{ x: 0, opacity: 1 }}
          >
            <img
              src={images[currentImageIndex]}
              alt="Food wrap"
              className="w-full h-80 rounded-2xl object-cover drop-shadow-2xl"
            />
          </motion.div>

          {/* Image dots */}
          <div className="flex justify-center mt-2 mb-2 space-x-2">
            {images.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-2 rounded-full ${
                  index === currentImageIndex
                    ? "bg-black/60"
                    : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Interaction buttons */}
        <div className="px-4 py-2 flex justify-between items-center">
          <div className="flex space-x-4">
            <button onClick={handleLike}>
              <img
                src={
                  isLiked ? "/assets/heart-filled.png" : "/assets/heart.png"
                }
                className="w-7 h-7"
                alt="like"
              />
            </button>
            <button>
              <MessageCircle className="w-6 h-6 text-gray-800" />
            </button>
          </div>
          <button>
            <Bookmark className="w-6 h-6 text-gray-800" />
          </button>
        </div>

        {/* Likes */}
        <div className="px-4 text-sm font-medium">
          {likes.toLocaleString()} Likes
        </div>

        {/* Caption */}
        <div className="px-4 pb-4 text-sm text-gray-800 flex flex-wrap items-start">
          <span className="font-medium">{title}</span>
          <span className="ml-2 text-blue-600">
            #{`picofthe${currentDate}`}
          </span>
          <span className="ml-2 text-blue-600">
            #socialmediapost #digitrickzefw
          </span>
        </div>
      </div>
    </div>
  );
}
