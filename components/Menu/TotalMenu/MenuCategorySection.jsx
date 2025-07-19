const MenuCategorySection = ({ title, image, dishes, imageFirst = true }) => {
    return (
      <div className={`${title=="Our Non-Vegetarian Specialties"?"bg-gray-50":"bg-white"} py-16`}>
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-red-800 mb-12 text-center">{title}</h2>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
            {/* Mobile image on top if imageFirst is false */}
          {
            <div className="flex justify-center md:hidden mt-8">
              <div className="rounded-lg shadow-lg overflow-hidden h-full w-full">
                <img src={image} alt={title} className="object-cover w-80 h-80" />
              </div>
            </div>
          }

            {/* Image on left if imageFirst is true */}
            {imageFirst && (
              <div className="md:flex justify-center hidden">
                <div className="rounded-lg shadow-lg overflow-hidden h-full w-full">
                  <img src={image} alt={title} className="object-cover w-full h-full " />
                </div>
              </div>
            )}
  
            {/* Dishes */}
            <div>
              <ul className="space-y-6">
                {dishes.map((dish, index) => (
                  <li key={index} className="border-b border-amber-200 pb-4">
                    <h3 className="text-xl font-medium text-amber-900">{dish.name}</h3>
                    <p className="text-slate-600 mt-1">{dish.description}</p>
                  </li>
                ))}
              </ul>
            </div>
  
            {/* Image on right if imageFirst is false */}
            {!imageFirst && (
              <div className="md:flex justify-center hidden">
                <div className="rounded-lg shadow-lg overflow-hidden h-full w-full">
                  <img src={image} alt={title} className="object-cover w-full h-full" />
                </div>
              </div>
            )}
          </div>
  
          
        </div>
      </div>
    );
  };
  export default MenuCategorySection