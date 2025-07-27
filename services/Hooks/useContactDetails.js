import { useQuery } from "@tanstack/react-query"
import { getContactDetails } from "../apis/contactDetails"

// getWeeklyMenus
export const useGetContactDetails=()=>{ 
    return useQuery({
       queryKey:["contactDetails"],
       queryFn:()=>getContactDetails(),
       staleTime:1000*60*5,
       cacheTime:1000*60*10,
       refetchOnWindowFocus:false,
       refetchOnMount:false,
       refetchOnReconnect:false,
       refetchIntervalInBackground:false,
    })
   }