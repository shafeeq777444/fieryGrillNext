import { getContactUs } from "../apis/contactUsForm";
import { useMutation } from "@tanstack/react-query";
import toast, { Toaster } from 'react-hot-toast';

export const useContactUs = () => {
    return useMutation({
        mutationFn:(formData)=> getContactUs(formData),
        onSuccess: (data) => {
            toast.success('Contact Us submitted successfully!');
          },
          onError: (error) => {
            console.log(error)
            toast.error(error.response.data.message || 'Something went wrong');
          },
    });
};
