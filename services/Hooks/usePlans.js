import { useQuery } from '@tanstack/react-query';
import { getMealCategories, getMealSizes, getPlans } from '../apis/planService';

// getCategories
 export const useGetMealCategories=()=>{ 
 return useQuery({
    queryKey:["mealCategories"],
    queryFn:getMealCategories
 })
}

// getSizes
export const useGetMealSizes=(categories)=>{ 
   return useQuery({
      queryKey:["mealSizes",categories],
      queryFn:()=>getMealSizes(categories)
   })
  }

  // getDurations
export const useGetMealDurations=({category,size})=>{ 
   return useQuery({
      queryKey:["mealDuration",category,size],
      // queryFn:()=>getMealDuration({category,size})
   })
  }


// getPlans depend by fieryGrill
export const useGetPlans = (vendor) => {
    return useQuery({
        queryKey: ["plans", vendor],
        queryFn: ({ queryKey }) => {
            const [_key, vendor] = queryKey;
            return getPlans(vendor);
        },
        enabled: !!vendor,
    });
};
  
