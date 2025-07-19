import { axiosInstance } from "../axiosInstance"
import { ENDPOINTS } from "../ENDPOINTS"

export const addSubscriber=async(addingdata)=>{
    const response= await axiosInstance.post(ENDPOINTS.SUBSCRIBERS.ADDSUBSCRIBER,addingdata)
    return response.data

}
