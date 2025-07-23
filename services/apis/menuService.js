import axios from "axios";
import { axiosInstance, axiosInstance2 } from "../axiosInstance";
import { ENDPOINTS } from "../ENDPOINTS";
// Total menus
export const getAllDishes = async ({ vendor, category }) => {
    try {
        const response = await axiosInstance2.get(`/ItemDetail/GetByVendorID/FG`);
        
        const dishes = response.data.map((item) => {
            return {
                categoryName: item?.categoryName,
                productName: item?.productName,
                productDescription: item?.productDescription,
            };
        });
        const punjabiNonVegDishes = dishes?.filter((item) => item?.categoryName === "Non Veg");
        const punjabiVegDishes = dishes?.filter((item) => item?.categoryName === "Vegetarian");
        return {punjabiNonVegDishes,punjabiVegDishes};
    } catch (er) {
        console.log(er);
        return {punjabiNonVegDishes: [],punjabiVegDishes: []};
    }
};

// export const getWeeklyDishes = async () => {
//     console.log(category, "category");
//     const response = await axios.get("/GetMyMenu/GetWeekMenu?vendorCode=FG");
//     console.log(response.data, "response");
//     return response.data;
// };

// wekly menus
// export const GetWeeklyDishes = async ({ vendor }) => {
//     try {
//         const response = await axiosInstance2.get(`GetMyMenu/GetWeekMenu?vendorCode=FG`);
        
//         const dishes = response.data.map((item) => {
//             return {
//                 categoryName: item?.categoryName,
//                 productName: item?.productName,
//                 productDescription: item?.productDescription,
//             };
//         });
//         const punjabiNonVegDishes = dishes?.filter((item) => item?.categoryName === "Non Veg");
//         const punjabiVegDishes = dishes?.filter((item) => item?.categoryName === "Vegetarian");
//         return {punjabiNonVegDishes,punjabiVegDishes};
//     } catch (er) {
//         console.log(er);
//         return {punjabiNonVegDishes: [],punjabiVegDishes: []};
//     }
// };

export const getWeeklyDishes = async () => {
    const response = await axiosInstance2.get("/GetMyMenu/GetWeekMenu?vendorCode=FG");
    const menuData = response.data;
    const dayWiseArray = menuData.menus.map(day => ({
      day: day.dayName,
      items: day.menu.products.map(product => product.productName),
    }));
    console.log(dayWiseArray, "dayWiseArray");
    return dayWiseArray;
};