import React from 'react'

export const Fewcategories = ({data}) => {
    const{image,categoryName}=data;
  return (
    <div className="category-image">
        <img style={{width:200, padding:20}} src={image} alt={categoryName}/>
    </div>
  )
}
