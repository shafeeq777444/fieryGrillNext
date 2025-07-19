import { axiosInstance } from "../axiosInstance";
import { ENDPOINTS } from "../ENDPOINTS";

export const getLocations = async () => {
    const response = await axiosInstance.get(ENDPOINTS.LOCATIONS.AVAILABLELOCATIONS("fieryGrills"));
    return response.data;
};
