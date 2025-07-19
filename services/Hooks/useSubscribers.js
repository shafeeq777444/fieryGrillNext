import { useMutation } from "@tanstack/react-query"
import { addSubscriber } from "../apis/subscribeServices"
import toast, { Toaster } from 'react-hot-toast';

export const useAddSubcriber=()=>{
    return useMutation({
        mutationFn:addSubscriber,
        // onSuccess: (data) => {
        //     toast.success(data.message || 'Subscriber added successfully!');
        //   },
          onError: (error) => {
            console.log(error)
            toast.error(error.response.data.message || 'Something went wrong');
          },
    })
}