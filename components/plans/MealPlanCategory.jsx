import { Check } from 'lucide-react'
import React from 'react'

const MealPlanCategory = ({selectedCategory,category,setSelectedCategory,getCategoryIcon}) => {
  return (
    <div 
    key={category.id}
    className={`
      relative bg-white rounded-2xl overflow-hidden  transition-all duration-300 cursor-pointer
      ${selectedCategory === category.id 
        ? 'shadow-2xl scale-105 border-gray-300 z-10' 
        : 'shadow-md hover:shadow-xl hover:scale-105'}
    `}
    onClick={() => setSelectedCategory(category.id)}
  >
    {/* Image Section with Overlay and Text */}
    <div className={`h-64 ${category.bgColor} relative`}>
      <img
        src={category.imageUrl}
        alt={category.title}
        className="w-full h-full object-cover object-center"
      />

      {/* Dark gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />

      {/* Text over image */}
      <div className="absolute bottom-0 left-0 right-0 p-4 z-20 text-white">
        <div className="flex items-center gap-3 mb-2">
          <div className={`w-10 h-10 ${category.iconBgColor} rounded-full flex items-center justify-center ${category.iconTextColor}`}>
            {getCategoryIcon(category.id)}
          </div>
          <h3 className="text-lg font-semibold">{category.title}</h3>
        </div>
        <p className="text-sm opacity-90 mb-1">{category.description}</p>
      </div>

      {/* Selection indicator */}
      {selectedCategory === category.id && (
        <div className="absolute top-4 right-4 w-7 h-7 bg-white/90 rounded-full flex items-center justify-center z-30">
          <Check className="h-4 w-4 text-black" />
        </div>
      )}
    </div>
  </div>
  )
}

export default MealPlanCategory
