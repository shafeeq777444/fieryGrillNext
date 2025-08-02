import { axiosInstance } from "../axiosInstance";

export const getFaqs = async () => {
    const response = await axiosInstance.get("/faqs/FG");
    return response.data;
};
