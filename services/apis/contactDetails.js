import { axiosInstance } from "../axiosInstance";

export const getContactDetails = async () => {
    const response = await axiosInstance.get("/contactDetails/get/FG");
    return response.data;
};
