import React, { createContext, useContext, useEffect ,useReducer} from 'react'
import axios from 'axios'
import { Productreducer } from '../reducers/Productreducer'
const productcontext= createContext();
export const Productcontext = ({children}) => {
    const initialState=
        {
            isProductLoading:false,
            isCategoryLoading:false,
            isDetailLoading:false,
            productData:[],
            categoriesData:[],
        };
        const [productState,productDispatch]=useReducer(Productreducer,initialState);
        
        const getData= async()=>{
            try{
                productDispatch({type:'products_loading', payload:true})
               const {status,data}= await axios({
                  method:"GET",
                  url:"api/products",
               });
               console.log(data.products);
               console.log(status);
               if(status===200)
               {
                productDispatch({type:'set_products',payload:data.products});
                productDispatch({type:'products_loading',payload:false})
               }
            }
            catch(e){
                console.log(e);

            }
        };
        const getCategories= async()=>{
            try{
                productDispatch({type:'categories_loading', payload:true})
               const {status,data}= await axios({
                  method:"GET",
                  url:"api/categories",
               });
               console.log(data);
               if(status===200)
               {
                productDispatch({type:'set_category',payload:data.categories});
                productDispatch({type:'categories_loading',payload:false})
               }
            }
            catch(e){
                console.log(e);

            }
        };
        useEffect(()=>{
            getData();
        },[]);
        useEffect(()=>{
            getCategories();
        },[]);

        
             
return (
    <productcontext.Provider value={{productState,productDispatch}}>
        {children}
    </productcontext.Provider>
  );
};

export const useProducts=()=> useContext(productcontext);


