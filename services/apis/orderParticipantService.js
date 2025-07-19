import { axiosInstance } from "../axiosInstance"
import { ENDPOINTS } from "../ENDPOINTS"

export const addParticipant=async(data)=>{
   const response= await axiosInstance.post(ENDPOINTS.ORDERPARTICIPANT.ADDPARTICIPANT,data)
    return response.data
}