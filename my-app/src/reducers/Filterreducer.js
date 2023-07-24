export const Filterreducer=(state,action)=>{
    switch(action.type){
        case"filter_by_categories":
        return state.category.includes(action.payload)
             ?{...state,category:[...state.category].filter((item)=>item !==action.payload),}:
             {...state,category:[...state.category,action.payload],};
        case"filter_by_brands":
        return state.brand.includes(action.payload)
        ?{...state,brand:[...state.brand].filter((item)=>item !==action.payload),}:
             {...state,brand:[...state.brand,action.payload],};
        case"filter_by_sort":
        return {...state,sort:action.payload};
        case"filter_by_search":
        return {...state,search:action.payload};
        case"filter_by_availability":
        return {...state,includeOutOfStock:action.payload};
        case"clear_filter":
        return {
        category:[],
        brand:[],
        sort:"featured",
        search:"",
        includeOutofStock:false

        };

        default:
            return state;
    }
};