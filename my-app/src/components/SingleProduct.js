import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getProduct } from '../Utils/getProduct';

const SingleProduct = () => {
    const [detailProduct,setDetailProduct]=useState({});
    const {id}=useParams();
    console.log(id);
    const singleproductdata=async()=>{
        try{
           const product= await getProduct(id);
           setDetailProduct(product?.product);
        }
        catch(e){
            console.log(e);
        }
    };
    useEffect(()=>{
        singleproductdata()
    },[])
    const{_id,
        image,
        title,
        brand,
        ratings,
        price,
        originalPrice,
        outOfStock,}=detailProduct;

  return (
    <div className="singleProduct">
        <img style={{width:222,margin:20}} src={image} alt={title}/>
        <div className="more-detail">
            <h1>{brand}</h1>
            <p>{title}</p>
            <hr/>
            <h2>rs{price}</h2>
            <p>{ratings?.value}⭐</p>
            {outOfStock?(<h2>availability-out of stock</h2>):(<h2>availability-In stock</h2>)}
             <button style={{backgroundColor:"pink"}}>Add to cart</button>
              
        </div>


    </div>
  )
}

export default SingleProduct