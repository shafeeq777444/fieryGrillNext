import { axiosInstance } from "../axiosInstance";
import { ENDPOINTS } from "../ENDPOINTS";

export const getAllDishes = async ({ vendor, category }) => {
  try {
    const response = await axiosInstance.get(`/menus/${vendor}/${category}/dishes`);
    const availableDishes = response.data.dishes.filter(dish => dish.isAvailable === true);
    return availableDishes;
  } catch (er) {
    console.log(er);
  }
};

export const getWeeklyDishes = async (category) => {
    console.log(category, "category");
    const response = await axiosInstance.get(ENDPOINTS.MENUS.WEEKLYMENU({ vendor: "fieryGrills", category }));
    console.log(response.data, "response");
    return response.data;
};
