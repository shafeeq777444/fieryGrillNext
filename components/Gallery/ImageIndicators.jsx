export const ImageIndicators = ({ totalImages, currentIndex }) => {
    return (
      <div className="flex justify-center mt-2 space-x-2">
        {Array.from({ length: totalImages }).map((_, index) => (
          <div 
            key={index} 
            className={`h-2 w-2 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-white bg-opacity-50"
            }`}
          />
        ))}
      </div>
    );
  };