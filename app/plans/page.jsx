"use client";
import React, { useEffect, useState } from "react";
import CallActions from "../../components/plans/CallActions";
import Faq from "../../components/plans/Faq";
import { ChevronDown } from "lucide-react";
import MealPlanContainer from "../../containers/plan/MealPlanContainer";
import MealPlanExtras from "../../components/plans/MealPlanExtras";
import ExtraFood from "../../components/plans/ExtraFood";

const Plans = () => {
    const [showArrow, setShowArrow] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const scrolledToBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 20;
            setShowArrow(!scrolledToBottom);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="relative bg-white">
            <>
                <div className="flex h-24  items-center justify-center bg-[#1C1C1C]"></div>
                <MealPlanContainer />
                <MealPlanExtras />
                <ExtraFood />
                <CallActions />
                <Faq />
            </>

            {/* Downward Arrow */}
            {showArrow && (
                <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce text-3xl rounded-full bg-black/60 text-white p-1 z-50">
                    <ChevronDown size={20} />
                </div>
            )}
        </div>
    );
};

export default Plans;
