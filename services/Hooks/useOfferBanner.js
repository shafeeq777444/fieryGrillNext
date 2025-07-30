import { useQuery } from "@tanstack/react-query";
import { getAllOfferBanner } from "../apis/offerBanner.api";

// get ✅
export const useGetAllOfferBanner = (vendor) => {
    return useQuery({
      queryKey: ['offerBanners', vendor],
      queryFn: () => getAllOfferBanner({ vendor }),
      enabled: !!vendor, // only run if vendor is truthy
      
    });
  };