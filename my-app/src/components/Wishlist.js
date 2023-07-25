import React from 'react'
import { Link } from 'react-router-dom'

const Wishlist = () => {
  return (
    <div className="wishlist">
        <h1>Wishlist</h1>
        <h2>Nothing in the wishlist</h2>
        <p>Browse through products and add your favourites to wishlist.</p>
        <Link to="/shop"><button>Browse</button></Link>

    </div>
  )
}

export default Wishlist