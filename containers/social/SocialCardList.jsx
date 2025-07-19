import { useState, useRef, useEffect } from "react";
import InstagramCard from "../../components/Gallery/InstagramCard";

export default function CardList() {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const containerRef = useRef(null);
  const cardRefs = useRef([]);
  const autoScrollIntervalRef = useRef(null);
  const isManualScrollRef = useRef(false);

  const cards = [
    { title: "Fiery Grills", images: ["/assets/tuesday.png", "/assets/thursday.png"] },
    { title: "Spicy Tandoor", images: ["/assets/thursday.png", "/assets/tuesday.png"] },
    { title: "Dessert Delight", images: ["/assets/tuesday.png", "/assets/thursday.png"] },
    { title: "Fiery Grills", images: ["/assets/tuesday.png", "/assets/thursday.png"] },
    { title: "Spicy Tandoor", images: ["/assets/thursday.png", "/assets/tuesday.png"] },
    { title: "Dessert Delight", images: ["/assets/tuesday.png", "/assets/thursday.png"] },
  ];

  const scrollToCard = (index) => {
    if (!containerRef.current || !cardRefs.current[index]) return;

    const container = containerRef.current;
    const card = cardRefs.current[index];
    const containerWidth = container.offsetWidth;
    const cardWidth = card.offsetWidth;

    const scrollPosition = card.offsetLeft - (containerWidth / 2) + (cardWidth / 2);

    container.scrollTo({
      left: scrollPosition,
      behavior: 'smooth'
    });
  };

  const handleScroll = () => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const containerCenter = container.scrollLeft + container.offsetWidth / 2;

    let closestIndex = 0;
    let minDistance = Infinity;

    cardRefs.current.forEach((ref, index) => {
      if (ref) {
        const cardCenter = ref.offsetLeft + ref.offsetWidth / 2;
        const distance = Math.abs(containerCenter - cardCenter);
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      }
    });

    if (activeCardIndex !== closestIndex) {
      setActiveCardIndex(closestIndex);
    }
  };

  // Auto scroll setup
  useEffect(() => {
    const startAutoScroll = () => {
      if (autoScrollIntervalRef.current) return;

      autoScrollIntervalRef.current = setInterval(() => {
        if (isManualScrollRef.current) return;

        setActiveCardIndex((prevIndex) => {
          const nextIndex = prevIndex + 1 < cards.length ? prevIndex + 1 : prevIndex;
          scrollToCard(nextIndex);
          return nextIndex;
        });
      }, 3000);
    };

    startAutoScroll();

    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
        autoScrollIntervalRef.current = null;
      }
    };
  }, [cards.length]);

  // Manual scroll detection
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener("scroll", handleScroll);

    const handleTouchStart = () => {
      isManualScrollRef.current = true;
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
        autoScrollIntervalRef.current = null;
      }
    };

    const handleTouchEnd = () => {
      setTimeout(() => {
        isManualScrollRef.current = false;
        if (!autoScrollIntervalRef.current && activeCardIndex < cards.length - 1) {
          autoScrollIntervalRef.current = setInterval(() => {
            if (!isManualScrollRef.current) {
              setActiveCardIndex((prevIndex) => {
                const nextIndex = prevIndex + 1 < cards.length ? prevIndex + 1 : prevIndex;
                scrollToCard(nextIndex);
                return nextIndex;
              });
            }
          }, 3000);
        }
      }, 3000);
    };

    container.addEventListener("touchstart", handleTouchStart);
    container.addEventListener("mousedown", handleTouchStart);
    container.addEventListener("touchend", handleTouchEnd);
    container.addEventListener("mouseup", handleTouchEnd);

    setTimeout(() => scrollToCard(0), 100);

    return () => {
      container.removeEventListener("scroll", handleScroll);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("mousedown", handleTouchStart);
      container.removeEventListener("touchend", handleTouchEnd);
      container.removeEventListener("mouseup", handleTouchEnd);
    };
  }, [activeCardIndex, cards.length]);

  // Scroll to active card if it changes programmatically
  useEffect(() => {
    scrollToCard(activeCardIndex);
  }, [activeCardIndex]);

  return (
    <div className="w-full overflow-x-scroll relative no-scrollbar" ref={containerRef}>
      <div className="flex gap-4 px-4 py-2">
        {cards.map((card, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className="flex-shrink-0 w-80 transition-transform duration-300"
            style={{
              transform: `scale(${index === activeCardIndex ? 1.1 : 1})`,
              zIndex: index === activeCardIndex ? 10 : 1
            }}
          >
            <InstagramCard
              title={card.title}
              images={card.images}
              isActive={index === activeCardIndex}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
