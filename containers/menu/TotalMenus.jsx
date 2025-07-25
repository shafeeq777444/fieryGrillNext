"use client";
import React from "react";
import { useGetAllDishes } from "../../services/Hooks/useMenus";
import AnimatedOnScroll from "../../components/common/AnimatedScrollerOnWraaper";
import MenuCategorySection from "../../components/Menu/TotalMenu/MenuCategorySection";
// import MenuGridSection from "@/components/Menu/TotalMenu/MenuGridSection";
import MenuCategorySkeleton from "@/components/skeltons/menus-skeltons/MenuCategorySkeleton";
import MenuGridSkeleton from "@/components/skeltons/menus-skeltons/MenuGridSkeleton";

const TotalMenus = () => {
    const {
        data: { punjabiNonVegDishes, punjabiVegDishes } = { punjabiNonVegDishes: [], punjabiVegDishes: [] },
        isLoading,
        isError,
    } = useGetAllDishes({ vendor: "fieryGrills" });
    console.log(punjabiNonVegDishes, punjabiVegDishes, "data");
    if (isLoading) {
        return (
            <>
                <MenuCategorySkeleton imageFirst={true} />
                <MenuCategorySkeleton imageFirst={false} />
                <MenuGridSkeleton />
            </>
        );
    }
    if (isError) {
        return <div>Have error</div>;
    }

    return (
        <div className="min-h-screen bg-white text-slate-800">
            <AnimatedOnScroll>
                <MenuCategorySection
                    title="Our Vegetarian Specialties"
                    image="/assets/veg1.jpeg"
                    dishes={punjabiVegDishes}
                    imageFirst={true}
                />
            </AnimatedOnScroll>
            <AnimatedOnScroll>
                <MenuCategorySection
                    title="Our Non-Vegetarian Specialties"
                    image="/assets/nonveg.jpeg"
                    dishes={punjabiNonVegDishes}
                    imageFirst={false}
                />
            </AnimatedOnScroll>

            {/* Salads Section */}
            {/* <AnimatedOnScroll>
                <MenuGridSection title="Fresh Punjabi Salads & Accompaniments" data={punjabiSalads} columns={3} />
            </AnimatedOnScroll> */}
        </div>
    );
};

export default TotalMenus;
