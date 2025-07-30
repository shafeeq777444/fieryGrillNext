import { axiosInstance } from "../axiosInstance";

export const getAllOfferBanner = async ({ vendor }) => {
    const response = await axiosInstance.get(`/offerBanner/get/${vendor}`);
    return response.data; 
};