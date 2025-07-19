import React, { useState } from "react";

const MealPlanCard = ({ 
    getPlanTypeIcon, 
    plan, 
    formatPrice,
    onSelectPlan = (planId) => console.log(`Selected plan: ${planId}`),
    selectedPlan = null,
    isPopular = false,
    buttonText = "Order Now"
}) => {
    const PlanTypeIcon = getPlanTypeIcon(plan.planType);
    const isSelected = selectedPlan === plan._id;

    const handleSelectPlan = () => {
        onSelectPlan(plan._id);
    };

    return (
        <div className={`bg-white rounded-2xl border transition-all duration-300 relative overflow-hidden ${
            isPopular 
                ? 'border-primaryDark shadow-xl scale-105' 
                : 'border-gray-200 hover:border-gray-300 hover:shadow-lg'
        } ${isSelected ? 'ring-2 ring-blue-500' : ''}`}>
            
            {/* Popular Badge */}
            {isPopular && (
                <div className="absolute top-0 left-0 right-0 bg-primaryDark text-white text-center py-2 text-sm font-medium">
                    Most Popular
                </div>
            )}
            
            <div className={`p-8 ${isPopular ? 'pt-12' : ''}`}>
                {/* Plan Type */}
                <div className="text-center mb-2">
                    <h3 className="text-lg font-medium text-gray-700">
                        {plan.planType}
                    </h3>
                </div>

                {/* Price */}
                <div className="text-center mb-8">
                    <div className="text-5xl font-bold text-primaryDark mb-1">
                        {plan.price === 0 || plan.price === "Free" ? "Free" : `$${plan.price}`}
                    </div>
                    {plan.price !== 0 && plan.price !== "Free" && (
                        <div className="text-gray-500 text-sm">
                            /{plan.pricePer || 'week'}
                        </div>
                    )}
                </div>

                {/* Features List */}
                <div className="space-y-4 mb-8 h-50">
                    {plan.description.map((feature, index) => (
                        <div key={index} className="flex items-start gap-3">
                            <div className="w-5 h-5 bg-primaryDark rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <svg 
                                    className="w-3 h-3 text-white" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth={2} 
                                        d="M5 13l4 4L19 7" 
                                    />
                                </svg>
                            </div>
                            <span className="text-gray-700 text-sm leading-relaxed">
                                {feature}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Action Button */}
                <button 
                    onClick={handleSelectPlan}
                    className={`w-full py-3 px-6 rounded-xl font-medium transition-all duration-200 ${
                        isPopular 
                            ? 'bg-primaryDark text-white hover:bg-gray-800' 
                            : isSelected
                                ? 'bg-blue-600 text-white hover:bg-blue-700'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                >
                    {isSelected ? '✓ Selected' : buttonText}
                </button>
            </div>
        </div>
    );
};

// Parent component with billing toggle
const MealPlanSection = ({ 
    plans = [], 
    getPlanTypeIcon, 
    formatPrice,
    title = "Choose Your Meal Plan",
    description = "Discover our meal plans: Start organizing your meals efficiently today!"
}) => {
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [billingPeriod, setBillingPeriod] = useState('monthly'); // 'yearly' or 'monthly'

    return (
        <div className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-primaryDark mb-4">
                        {title}
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        {description}
                    </p>
                </div>

                {/* Billing Toggle */}
                <div className="flex justify-center items-center mb-12">
                    <div className="relative">
                        <div className="text-sm text-green-600 font-medium absolute -top-8 left-0 transform -rotate-12">
                            get 3 months free
                        </div>
                        <div className="flex items-center gap-4 bg-white rounded-full p-1 shadow-sm border border-gray-200">
                            <button
                                onClick={() => setBillingPeriod('yearly')}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                                    billingPeriod === 'yearly'
                                        ? 'bg-primaryDark text-white'
                                        : 'text-gray-600 hover:text-primaryDark'
                                }`}
                            >
                                Billed Yearly
                            </button>
                            <button
                                onClick={() => setBillingPeriod('monthly')}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                                    billingPeriod === 'monthly'
                                        ? 'bg-primaryDark text-white'
                                        : 'text-gray-600 hover:text-primaryDark'
                                }`}
                            >
                                Billed Monthly
                            </button>
                        </div>
                    </div>
                </div>

                {/* Plans Grid */}
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {plans.map((plan, index) => (
                            <MealPlanCard
                                key={plan._id}
                                plan={plan}
                                getPlanTypeIcon={getPlanTypeIcon}
                                formatPrice={formatPrice}
                                selectedPlan={selectedPlan}
                                onSelectPlan={setSelectedPlan}
                                isPopular={index === 1} // Make middle plan popular
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export { MealPlanCard, MealPlanSection };
export default MealPlanCard;