import React from 'react'

const Shop = () => {
  return (
    <div className="shop-page"> 
    
        <div className="Filters">
        <ul style={{display:'flex', listStyleType:'none',justifyContent:'space-between'}}>
        <li style={{marginLeft:2}}>Filters</li>
        <li>Clear Filters</li>
       </ul>
             <h2>categories</h2>
             <ul>
                <li>Tops</li>
                <li>Bottoms</li>
                <li>Dresses</li>
                <li>Ethnic</li>
             </ul>
             <h2>Brands</h2>
             <ul>
                <li>H&M</li>
                <li>Sassfaras</li>
                <li>Levis</li>
                <li>Urbanic</li>
                <li>Zara</li>
                <li>Roadester</li>
                <li>Dolce&Gabana</li>
                <li>Tokyo talkies</li>
                <li>Indya</li>
             </ul>
             <h2>Sort by price:</h2>
             <ul>
                <li>high to low</li>
                <li>low to high</li>
                <li>featured</li>
            </ul>
            <h2>Availability</h2>
            <p>include out of stock</p>


        </div>
        <div className="shop-product">
            products

        </div>
    </div>
  )
}

export default Shop