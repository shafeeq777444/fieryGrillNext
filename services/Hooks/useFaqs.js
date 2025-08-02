import { useQuery } from "@tanstack/react-query";
import { getFaqs } from "../apis/faqServices";

export const useGetFaqs = () => {
    return useQuery({
      queryKey: ["faqs", "FG"], 
      queryFn: getFaqs
    });
  };