import { useQuery } from "@tanstack/react-query";
import { getAllAddOns } from "../apis/addOnFood";

// 🟡 Get all add-ons for a vendor
export const useGetAddOns = (vendor) => {
    console.log(vendor,"--vendor")
    return useQuery({
      queryKey: ["addOns", vendor],
      queryFn: () => getAllAddOns(vendor),
      enabled: !!vendor,
    });
  };