'use client';
import { useQuery } from '@tanstack/react-query';
import { getAllDishes, getWeeklyDishes } from '../apis/menuService';

// getAllDishes
 export const useGetAllDishes=({vendor})=>{ 
 return useQuery({
    queryKey:["dishes",vendor],
    queryFn:()=>getAllDishes({vendor})
 })
}

// getWeeklyMenus
export const useGetWeeklyMenu=()=>{ 
   return useQuery({
      queryKey:["weeklyMenu"],
      queryFn:()=>getWeeklyDishes()
   })
  }