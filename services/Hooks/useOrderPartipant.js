import { useMutation } from "@tanstack/react-query"

import { addParticipant } from "../apis/orderParticipantService";

export const useOrderParticipant=()=>{
    return useMutation({
        mutationFn:addParticipant,
          
    })
}