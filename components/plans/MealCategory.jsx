
// import { PiPottedPlantBold } from "react-icons/pi";
// import { GiChickenOven } from "react-icons/gi";
// import { GiForkKnifeSpoon } from "react-icons/gi";
// import { useGetMealCategories } from "../../services/Hooks/usePlans";
// import planStore from "../../store/planStore";


// const MealPlanSection = ({ title, description, categories }) => {
//   const { selectedCategory, setSelectedCategory } = planStore();
//   return (
//     <section className="py-16 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold text-gray-900 mb-4">
//             {title}
//           </h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             {description}
//           </p>
//         </div>
//         <div className="max-w-4xl mx-auto">
//           <div className="relative mb-8">
//             <div className="flex justify-between items-center w-full">
//               <div className="flex items-center">
//                 {/* Header area kept clean */}
//               </div>
//             </div>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {categories.map((category, index) => (
//               <div 
//                 key={index}
//                 className={`relative bg-white rounded-lg overflow-hidden transition-all duration-300 cursor-pointer border border-gray-100
//                   ${selectedCategory === category.id ? 
//                     'shadow-2xl transform scale-105  z-10' : 
//                     'shadow-lg hover:shadow-xl hover:scale-102'
//                   }`}
//                 onClick={() => setSelectedCategory(category.id)}
//               >
//                 {/* Black overlay for selected card */}
//                 {selectedCategory === category.id && (
//                   <div className="absolute inset-0  bg-opacity-5 rounded-lg z-0"></div>
//                 )}
//                 <div className={`h-48 ${category.bgColor} flex items-center justify-center relative`}>
//                   <img
//                     src={category.imageUrl || "/api/placeholder/600/400"}
//                     alt={category.title}
//                     className="w-full h-full object-cover object-top"
//                   />
//                   {/* Selection indicator */}
//                   {selectedCategory === category.id && (
//                     <div className="absolute top-4 right-4 w-6 h-6  bg-gray-900 rounded-full flex items-center justify-center">
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                       </svg>
//                     </div>
//                   )}
//                 </div>
//                 <div className="p-6">
//                   <div className="flex items-center mb-4">
//                     <div className={`w-10 h-10 ${category.iconBgColor} rounded-full flex items-center justify-center ${category.iconTextColor} mr-3`}>
//                       {/* {category.icon} */}
//                      {category.id=="veg"? <PiPottedPlantBold size={20} color="green"/>:category.id=="nonveg"?<GiChickenOven size={20} color="red"/>:<GiForkKnifeSpoon size={20} color="orange"/>}
//                     </div>
//                     <h3 className="text-xl font-semibold text-gray-900">
//                       {category.title}
//                     </h3>
//                   </div>
//                   <p className="text-gray-600 mb-4">
//                     {category.description}
//                   </p>
//                   <div className="flex justify-between items-center">
//                     <span className={`text-gray-900 font-medium ${selectedCategory === category.id ? 'text-black' : ''}`}>
//                     Starting at ${category.price}/meal
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// // Example usage with default props
// export default function MealPlanDemo() {
//   const { data, isLoading, error } =useGetMealCategories();

//   if (isLoading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error.message}</p>;

//   return (
//     <MealPlanSection 
//       title="Create Your Perfect Meal Plan"
//       description="Follow these simple steps to customize your perfect tiffin experience with authentic Punjabi flavors."
//       categories={data}
//     />
//   );
// }
