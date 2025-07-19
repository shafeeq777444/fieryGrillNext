import { useQuery } from "@tanstack/react-query"
import { getLocations } from "../apis/locationService"

// getWeeklyMenus
export const useGetLocations=()=>{ 
    return useQuery({
       queryKey:["locations"],
       queryFn:()=>getLocations()
    })
   }