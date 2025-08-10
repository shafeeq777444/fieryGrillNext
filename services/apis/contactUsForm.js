import { axiosInstance } from "../axiosInstance";

export const getContactUs = async (formData) => {
    const response = await axiosInstance.post("/contactUs/FG",formData);
    return response.data;
};
