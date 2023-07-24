import React from 'react'
import { useProducts } from '../contexts/Productcontext'
import { FewproductCards } from './Fewproductcards';
import { Link } from 'react-router-dom';
import { useFilter } from '../contexts/Filtercontext';

const Shop = () => {
  const {productState}=useProducts();
  const {productData}=productState;
  const {filterDispatch,filterState}=useFilter();
  const {filterproduct}=useFilter();
  console.log(productData);
    return (
    <div className="shop-page"> 
    
        <div className="Filters">
        <ul style={{display:'flex', listStyleType:'none',justifyContent:'space-between'}}>
        <li style={{marginLeft:2}}>Filters</li>
        <li><button onClick={() => {
              filterDispatch({ type: "clear_filter" });
            }}>Clear Filters</button></li>
       </ul>
             <h2>categories</h2>
             <ul>
                <li style={{listStyleType:'none'}}><input type="checkbox"checked={filterState?.category.includes("Tops")} onChange={() =>
                    filterDispatch({
                      type:"filter_by_categories",
                      payload: "Tops"})}/>Tops</li>
                <li style={{listStyleType:'none'}}><input type="checkbox"checked={filterState?.category.includes("Bottoms")} onChange={() =>
                    filterDispatch({
                      type:"filter_by_categories",
                      payload: "Bottoms"})}/>Bottoms</li>
                <li style={{listStyleType:'none'}}><input type="checkbox"checked={filterState?.category.includes("Dresses")} onChange={() =>
                    filterDispatch({
                      type:"filter_by_categories",
                      payload:"Dresses"})}/>Dresses</li>
                <li style={{listStyleType:'none'}}><input type="checkbox"checked={filterState?.category.includes("Ethnic")} onChange={() =>
                    filterDispatch({
                      type:"filter_by_categories",
                      payload:"Ethnic"})}/>Ethnic</li>
             </ul>
             <h2>Brands</h2>
             <ul>
                <li style={{listStyleType:'none'}}><input type="checkbox"checked={filterState?.brand.includes("H&M")} onChange={() =>
                    filterDispatch({
                      type:"filter_by_brands",
                      payload: "H&M"
                    })}/>H&M</li>
                <li style={{listStyleType:'none'}}><input type="checkbox"checked={filterState?.brand.includes("Sassafras")} onChange={() =>
                    filterDispatch({
                      type:"filter_by_brands",
                      payload: "Sassafras"})}/>Sassafras</li>
                <li style={{listStyleType:'none'}}><input type="checkbox"checked={filterState?.brand.includes("Levis")} onChange={() =>
                    filterDispatch({
                      type:"filter_by_brands",
                      payload: "Levis"})}/>Levis</li>
                <li style={{listStyleType:'none'}}><input type="checkbox"checked={filterState?.brand.includes("Urbanic")} onChange={() =>
                  filterDispatch({
                    type:"filter_by_brands",
                    payload: "Urbanic"})}/>Urbanic</li>
                <li style={{listStyleType:'none'}}><input type="checkbox"checked={filterState?.brand.includes("Zara")} onChange={() =>
                  filterDispatch({
                    type:"filter_by_brands",
                    payload: "Zara"})}/>Zara</li>
                <li style={{listStyleType:'none'}}><input type="checkbox"checked={filterState?.brand.includes("Roadster")} onChange={() =>
                  filterDispatch({
                    type:"filter_by_brands",
                    payload: "Roadster"})}/>Roadester</li>
                <li style={{listStyleType:'none'}}><input type="checkbox"checked={filterState?.brand.includes("Dolce & Gabbana")} onChange={() =>
                  filterDispatch({
                    type:"filter_by_brands",
                    payload: "Dolce & Gabbana"})}/>Dolce & Gabbana</li>
                <li style={{listStyleType:'none'}}><input type="checkbox"checked={filterState?.brand.includes("Tokyo Talkies")} onChange={() =>
                  filterDispatch({
                    type:"filter_by_brands",
                    payload: "Tokyo Talkies"})}/>Tokyo Talkies</li>
                <li style={{listStyleType:'none'}}><input type="checkbox"checked={filterState?.brand.includes("Indya")} onChange={() =>
                  filterDispatch({
                    type:"filter_by_brands",
                    payload: "Indya"})}/>Indya</li>
             </ul>
             <h2>Sort by price:</h2>
             <ul>
                <li style={{listStyleType:'none'}}><input type="checkbox"checked={filterState.sort === "high-to-low"}
              onChange={() =>
                filterDispatch({
                  type: "filter_by_sort",
                  payload: "high-to-low",
                })
              }/>high-to-low</li>
                <li style={{listStyleType:'none'}}><input type="checkbox"checked={filterState.sort === "low-to-high"}
              onChange={() =>
                filterDispatch({
                  type: "filter_by_sort",
                  payload: "low-to-high",
                })
              }/>low-to-high</li>
                <li style={{listStyleType:'none'}}><input type="checkbox"checked={filterState.sort === "featured"}
              onChange={() =>
                filterDispatch({
                  type: "filter_by_sort",
                  payload: "featured",
                })
              }/>featured</li>
            </ul>
            <h2>Availability</h2>
            <ul>
              <li style={{listStyleType:'none'}}><input type="checkbox"checked={filterState.includeOutOfStock}
              onChange={() =>
                filterDispatch({
                  type: "filter_by_availability",
                  payload: !filterState.includeOutOfStock,
                })
              }/>Incude out of stock</li>
            </ul>


        </div>
        <div className="shop-product">
            
              {filterproduct?.map((data)=>{
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