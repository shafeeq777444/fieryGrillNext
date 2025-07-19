'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useMotionValue } from 'framer-motion';

export default function ScrollingReviewCards() {
  const [isHovering, setIsHovering] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const containerRef = useRef(null);
  const controls = useAnimation();
  const x = useMotionValue(0);

  const reviews = [
    {
      id: 1,
      rating: 5,
      text: "My grandmother brought me here as a child, and now I bring my grandchildren. The taste hasn't changed in 40 years - authentic, comforting, and absolutely delicious.",
      author: "Rajinder Singh",
      position: "Loyal customer since 1985"
    },
    {
      id: 2,
      rating: 5,
      text: "The aroma that greets you when you walk in is exactly like my mother's kitchen back in Punjab. Their dal makhani reminds me of home in ways I can't describe.",
      author: "Priya Sharma",
      position: "Food blogger"
    },
    {
      id: 3,
      rating: 4.5,
      text: "I've traveled across India sampling regional cuisines, and this place serves the most authentic Punjabi food I've had outside of a Punjabi home. Their attention to traditional methods is remarkable.",
      author: "Vikram Malhotra",
      position: "Food critic"
    },
    {
      id: 4,
      rating: 5,
      text: "The butter chicken here takes me back to my childhood in Amritsar. Perfectly balanced flavors that respect tradition while still feeling fresh.",
      author: "Anita Kaur",
      position: "Regular diner"
    },
    {
      id: 5,
      rating: 5,
      text: "As someone who grew up in a Punjabi household, I can confidently say these flavors are as authentic as they come. The recipes taste like they've been passed down for generations.",
      author: "Manpreet Singh",
      position: "First-time visitor"
    }
  ];

  // Duplicate the reviews to create a seamless loop
  const duplicatedReviews = [...reviews, ...reviews, ...reviews];

  // Safe window size
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
    }
  }, []);

  useEffect(() => {
    const startAutoScroll = () => {
      const containerWidth = containerRef.current?.scrollWidth || 0;
      const scrollDistance = containerWidth / 3;
      const currentPosition = x.get();

      controls.start({
        x: currentPosition - scrollDistance,
        transition: {
          duration: 30,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop"
        }
      });
    };

    if (!isHovering && !isDragging) {
      startAutoScroll();
    } else {
      controls.stop();
    }

    return () => controls.stop();
  }, [controls, isHovering, isDragging, x]);

  const handleAnimationComplete = () => {
    const containerWidth = containerRef.current?.scrollWidth || 0;
    const currentPosition = x.get();

    if (currentPosition < -(containerWidth / 3 * 2)) {
      const resetPosition = currentPosition + (containerWidth / 3);
      controls.set({ x: resetPosition });

      if (!isHovering && !isDragging) {
        controls.start({
          x: resetPosition - (containerWidth / 3),
          transition: {
            duration: 30,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop"
          }
        });
      }
    }
  };

  const StarRating = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    return (
      <div className="flex text-amber-500 mb-2">
        {[...Array(fullStars)].map((_, i) => (
          <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}

        {hasHalfStar && (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <defs>
              <linearGradient id="halfStar">
                <stop offset="50%" stopColor="currentColor" />
                <stop offset="50%" stopColor="#D1D5DB" />
              </linearGradient>
            </defs>
            <path fill="url(#halfStar)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        )}

        {[...Array(5 - Math.ceil(rating))].map((_, i) => (
          <svg key={i} className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div className="py-12 bg-gray-50">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Guests Say</h2>
          <p className="md:text-lg text-sm text-gray-600 max-w-3xl mx-auto">
            Hear from families who have been enjoying our authentic Punjabi cuisine for generations.
          </p>
        </div>

        <div
          className="relative overflow-hidden"
          ref={containerRef}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <motion.div
            className="flex gap-6"
            drag="x"
            dragConstraints={{
              left: -(duplicatedReviews.length * 320 - windowWidth),
              right: 0
            }}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={() => {
              setIsDragging(false);
              x.set(x.get());
            }}
            style={{ x }}
            animate={controls}
            onAnimationComplete={handleAnimationComplete}
          >
            {duplicatedReviews.map((review, index) => (
              <div
                key={`${review.id}-${index}`}
                className="bg-white rounded-lg scale-95 shadow-md p-6 flex flex-col min-w-[300px] max-w-sm flex-shrink-0"
              >
                <StarRating rating={review.rating} />
                <p className="text-gray-700 italic mb-6">"{review.text}"</p>
                <div className="mt-auto flex items-center">
                  <div>
                    <h4 className="font-bold text-gray-900">{review.author}</h4>
                    <p className="text-sm text-gray-500">{review.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
