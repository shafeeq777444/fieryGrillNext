/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Heart, Utensils, User, Users } from "lucide-react";
import { useGetPlans } from "../../services/Hooks/usePlans";
import MealPlanCard from "../../components/plans/MealPlanCard";
import { motion } from "framer-motion";
import MealPlansSkeleton from "./MealPlanSkelton";



const MealPlansUI = () => {
    const [selectedCategory, setSelectedCategory] = useState("veg");
    const { data: sampleData,isLoading } = useGetPlans("fieryGrillss");

    // Define categories
    const categories = [
        {
            id: "veg",
            title: "Vegetarian",
            description: "Delicious vegetarian meals prepared with fresh vegetables, paneer, and authentic  spices.",
            price: "15",
            bgColor: "bg-green-100",
            iconBgColor: "bg-green-100",
            iconTextColor: "text-green-600",
            imageUrl: "/mealPlan/types/vegTiffin.jpg",
        },
        {
            id: "non-veg",
            title: "Non-Vegetarian",
            description: "Protein-rich meals with lean meats, fresh fish, and balanced nutrition for meat lovers.",
            price: "25",
            bgColor: "bg-red-100",
            iconBgColor: "bg-red-100",
            iconTextColor: "text-red-600",
            imageUrl: "/mealPlan/types/nonVegTiffin.jpg",
        },
        {
            id: "mixed",
            title: "Mixed",
            description: "Perfect combination of vegetarian and non-vegetarian dishes for varied taste preferences.",
            price: "20",
            bgColor: "bg-orange-100",
            iconBgColor: "bg-orange-100",
            iconTextColor: "text-orange-600",
            imageUrl: "/mealPlan/types/mixedTiffin.jpg",
        },
    ];

    // Get filtered plans based on selected category
    const filteredPlans = sampleData?.filter((plan) => plan.mealType === selectedCategory);

 

    // Get plan type icon
    const getPlanTypeIcon = (planType) => {
        switch (planType) {
            case "Single Plan":
                return User;
            case "Couple Plan":
                return Users;
            case "Family Plan":
                return Users;
            default:
                return User;
        }
    };

    // Format price
    const formatPrice = (price, period) => {
        return `$${price.toLocaleString("en-IN")}/${period}`;
    };
    
    if (isLoading) {
        return <MealPlansSkeleton />;
    }
    
    

    return (
        <div className=" bg-white ">
            {/* Category Selection Section */}
            <section className="pt-10 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-primaryDark mb-4">Create Your Perfect Meal Plan</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Follow these simple steps to customize your perfect tiffin experience with authentic flavors.
                        </p>
                    </div>

                    <div className="flex justify-center mb-6 md:mb-8 z-40">
                        <div className="bg-white p-1 rounded-lg shadow-md flex">
                            {categories.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => setSelectedCategory(category.id)}
                                    className={`relative px-4 md:px-6 py-2 md:py-3 rounded-md text-sm font-medium transition-all duration-300 min-w-16 md:min-w-24
                    ${selectedCategory === category.id ? "text-white" : "text-gray-700 hover:text-red-800"}`}
                                >
                                    {selectedCategory === category.id && (
                                        <motion.div
                                            layoutId="activeCategory"
                                            className="absolute inset-0 bg-primaryDark rounded-md"
                                            initial={false}
                                            transition={{ type: "spring", duration: 0.6 }}
                                        />
                                    )}
                                    <span className="relative z-10">{category.title}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Selected Category Plans */}
            <section className=" bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h3 className="text-2xl  font-bold text-primaryDark mb-4">
                            {categories.find((cat) => cat.id === selectedCategory)?.title} Plans
                        </h3>
                        <p className="text-gray-600">Choose the perfect plan size for your needs</p>
                    </div>

                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {filteredPlans?.map((plan) => (
                                <MealPlanCard
                                    formatPrice={formatPrice}
                                    getPlanTypeIcon={getPlanTypeIcon}
                                    plan={plan}
                                    key={plan._id}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MealPlansUI;
