import React from 'react'
import { Link } from 'react-router-dom'

const Cart = () => {
  return (
    <div className="cart">
        <h1>Cart</h1>
        <img src='https://res.cloudinary.com/sweta-agarwalla/image/upload/v1684057227/free-empty-cart-4085814-3385483_c7dwif.webp' alt='cart'/>
        <h2>your cart is empty!</h2>
        <p>Looks like you haven't added anything in your cart. Go ahead & explore top categories.</p>
        <Link to="/shop"><button>shop now</button></Link>
    </div>
  )
}

export default Cart