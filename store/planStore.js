import { create } from "zustand";


const planStore = create((set) => ({
    selectedCategory: "vegetarian",
    setSelectedCategory: (category) => set(() => ({ selectedCategory: category })),
    selectedPlan:"couple",
    setSelectedPlan:(plan)=>set(()=>({selectedPlan:plan}))
}));

export default planStore;
