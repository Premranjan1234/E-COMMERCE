//import './Components.css'
export const FewproductCards=({data})=>{
  const{image,
    title,
    brand,
    price,
 ratings}=data;
  return(
  <div className="few-products">
    
    <img style={{width:200 ,padding:5}} src={image} alt={title}/>
    <h2 style={{height:20 , margin:5}}>{brand}</h2>
    <p>{title}</p>
    <h2>Rs {price} |  {ratings?.value}⭐</h2>
    
  </div>
  
  );
};
