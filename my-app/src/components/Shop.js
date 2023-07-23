import React from 'react'
import { useProducts } from '../contexts/Productcontext'
import { FewproductCards } from './Fewproductcards';
import { Link } from 'react-router-dom';

const Shop = () => {
  const {productState}=useProducts();
  const {productData}=productState;
  console.log(productData);
    return (
    <div className="shop-page"> 
    
        <div className="Filters">
        <ul style={{display:'flex', listStyleType:'none',justifyContent:'space-between'}}>
        <li style={{marginLeft:2}}>Filters</li>
        <li>Clear Filters</li>
       </ul>
             <h2>categories</h2>
             <ul>
                <li style={{listStyleType:'none'}}><input type="checkbox"/>Tops</li>
                <li style={{listStyleType:'none'}}><input type="checkbox"/>Bottoms</li>
                <li style={{listStyleType:'none'}}><input type="checkbox"/>Dresses</li>
                <li style={{listStyleType:'none'}}><input type="checkbox"/>Ethnic</li>
             </ul>
             <h2>Brands</h2>
             <ul>
                <li style={{listStyleType:'none'}}><input type="checkbox"/>H&M</li>
                <li style={{listStyleType:'none'}}><input type="checkbox"/>Sassfaras</li>
                <li style={{listStyleType:'none'}}><input type="checkbox"/>Levis</li>
                <li style={{listStyleType:'none'}}><input type="checkbox"/>Urbanic</li>
                <li style={{listStyleType:'none'}}><input type="checkbox"/>Zara</li>
                <li style={{listStyleType:'none'}}><input type="checkbox"/>Roadester</li>
                <li style={{listStyleType:'none'}}><input type="checkbox"/>Dolce&Gabana</li>
                <li style={{listStyleType:'none'}}><input type="checkbox"/>Tokyo talkies</li>
                <li style={{listStyleType:'none'}}><input type="checkbox"/>Indya</li>
             </ul>
             <h2>Sort by price:</h2>
             <ul>
                <li style={{listStyleType:'none'}}><input type="checkbox"/>high to low</li>
                <li style={{listStyleType:'none'}}><input type="checkbox"/>low to high</li>
                <li style={{listStyleType:'none'}}><input type="checkbox"/>featured</li>
            </ul>
            <h2>Availability</h2>
            <ul>
              <li style={{listStyleType:'none'}}><input type="checkbox"/>Incude out of stock</li>
            </ul>


        </div>
        <div className="shop-product">
            
              {productData?.map((data)=>{
                return(
                    <Link to={"/product/"+data._id} key={data._id}>
                    <div>
                      <FewproductCards data={data}/>
                    </div>
                    </Link>
                );
            })}
            

        </div>
    </div>
  )
}

export default Shop