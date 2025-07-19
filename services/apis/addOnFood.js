import { axiosInstance } from "../axiosInstance";

// 🟡 Read all
export const getAllAddOns = async (vendor) => {
    console.log(vendor,"--vendor1")
    const response = await axiosInstance.get(`/plans/${vendor}/addOns`);
    console.log(response,"--response")
    return response.data;
  };