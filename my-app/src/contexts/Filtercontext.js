import { createContext, useContext, useReducer } from "react";
import { Filterreducer } from "../reducers/Filterreducer";
import { useProducts } from "./Productcontext";


const Filtercontext=createContext()
export const Filterprovider=({children})=>{
    const {productState}=useProducts()
    const initialFilter={
        category:[],
        brand:[],
        sort:"featured",
        search:"",
        includeOutOfStock:false
    };
    const [filterState,filterDispatch]=useReducer(Filterreducer,initialFilter);
    let filterproduct=productState?.productData.filter((data)=>!data.outOfStock);

    if(filterState.includeOutOfStock)
    {
        filterproduct=productState?.productData;
    }
    if(filterState.category.length>0)
    {
        filterproduct=filterproduct.filter((data)=>filterState.category.includes(data.categoryName));
    }
    if(filterState.brand.length>0){
        filterproduct=filterproduct.filter((data)=>filterState.brand.includes(data.brand));

    }
    if(filterState.search.length>0){
         filterproduct=filterproduct.filter((data)=>data.title.toLowerCase.includes(filterState.search.toLowerCase)||data.title.toLowerCase.includes(filterState.search.toLowerCase));
    }
    if(filterState.sort==='high-to-low'){
    filterproduct = [...filterproduct].sort((a, b) => b.price - a.price);}
    else if(filterState.sort==='low-to-high'){
    filterproduct = [...filterproduct].sort((a, b) => a.price - b.price);}
    else if(filterState.sort==='featured'){
        filterproduct = [...filterproduct];
    }

    return(
        <Filtercontext.Provider value={{filterState,filterDispatch,filterproduct}}>
            {children}
        </Filtercontext.Provider>
    )

}
export const useFilter=()=>useContext(Filtercontext)