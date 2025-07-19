'use client';
import { useQuery } from '@tanstack/react-query';
import { getAllDishes, getWeeklyDishes } from '../apis/menuService';

// getAllDishes
 export const useGetAllDishes=({vendor,category})=>{ 
 return useQuery({
    queryKey:["dishes",vendor,category],
    queryFn:()=>getAllDishes({vendor,category})
 })
}

// getWeeklyMenus
export const useGetWeeklyMenu=(category)=>{ 
   return useQuery({
      queryKey:["weeklyMenu",category],
      queryFn:()=>getWeeklyDishes(category)
   })
  }