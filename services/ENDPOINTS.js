export const ENDPOINTS={
    PLANS:{
        CATEGORIES:"/plans/categories",
        SIZES:(categories)=>`/plans/${categories}/sizes`
    },
    MENUS:{

        WEEKLYMENU:({vendor,category})=>`/menus/${vendor}/${category}/weeklymenu`
    },
    LOCATIONS:{
        AVAILABLELOCATIONS:(vendor)=>`/locations/${vendor}`
    },
    SUBSCRIBERS:{
        ADDSUBSCRIBER:'/subscribers/addSubscriber'
    },
    ORDERPARTICIPANT:{
        ADDPARTICIPANT:'/orderParticipant/add'
    }
}