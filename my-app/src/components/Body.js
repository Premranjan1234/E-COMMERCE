import {useEffect,useState} from 'react';
import { useProducts } from '../contexts/Productcontext';
import  {FewproductCards} from './Fewproductcards';
import {Fewcategories} from './Fewcategories'
import Footer from './Footer';


const Body=()=>{
    const {productState}=useProducts();
    const {productData}=productState;
    const {categoriesData}=productState;
    console.log(categoriesData);
    console.log(productData);
    let featuredData=[];
    if(productData.length>0)
    {
        featuredData=[productData[22],productData[18],productData[5],productData[29],productData[19]];
    }


    return(
        <div>
            <img
            className="shopping"
            src="https://img.freepik.com/free-psd/online-shopping-concept-banner-template_23-2148559463.jpg?w=1060&t=st=1689626750~exp=1689627350~hmac=c7ab3c3ad92ca76acc691d1d8530b7114734fe38bd10c988f86b82e7bef4e251"
             alt="image"/>
             <div>
                <h1>Brands✨</h1>
                <div className="brand-items">
                    <img className="brand-type" src="https://res.cloudinary.com/sweta-agarwalla/image/upload/v1683887347/h_m_q8hrlz.png" alt="H&M"/>
                    <img className="brand-type" src="https://res.cloudinary.com/sweta-agarwalla/image/upload/v1684138583/lx4hccsrkezpp9i87cpu.png" alt="brand"/>
                    <img className="brand-type" src="https://res.cloudinary.com/sweta-agarwalla/image/upload/v1683887309/levis_uhbuun.png" alt="Levis"/>
                    <img className="brand-type" src="https://res.cloudinary.com/sweta-agarwalla/image/upload/v1684138991/mhpqbc8xgvffrkym2mdp.png" alt="Urbanic"/>
                    <img className="brand-type" src="https://res.cloudinary.com/sweta-agarwalla/image/upload/v1683887744/UkabSwd9CX7buvuAztJG8J-320-80_m4lu48.jpg" alt="Zara"/>
                    <img className="brand-type" src="https://res.cloudinary.com/sweta-agarwalla/image/upload/v1683887321/dolce_msbiub.png" alt="D&G"/>

                </div>

             </div>
             <div className="description">
                <h3 className="description1">We provide best customer experience</h3>
                <p className="description2">we ensure that our customer have a best shopping experience</p>
             </div>
             <div className="product-listing">
                <h1>product you make like✨</h1>
                <div className="featured-data">{featuredData?.map((data)=>{
                    return(
                        <div>
                          <FewproductCards data={data}/>
                        </div>
                    );
                })}
                </div>
            </div>
            <div className="product-listing">
                <h1>currated pics✨</h1>
                <div className="featured-data">{categoriesData?.map((data)=>{
                    return(
                        <div>
                          <Fewcategories data={data}/>
                        </div>
                    );
                })}
                </div>
            </div>
            <Footer/>
            

        </div>
    );
};
export default Body;