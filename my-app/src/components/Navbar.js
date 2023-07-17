const Navbar=()=>{
    return(
        <div className="navbar">
            <img className="logo"src="https://res.cloudinary.com/sweta-agarwalla/image/upload/v1683874845/logo.png " alt="image"/>
            <div className="nav-items">
                <div className="home">Home</div>
                <div className="shop">Shop</div>
            </div>
            <div>
                <input className="searchbar" type="text" placeholder="Search"/>
            </div>
            <ul className="cart-wishlist-login">
                <li className="cart">🛒-0</li>
                <li className="wishlist">🖤-0</li>
                <li className="login-icon">
                    <img className="login" src="https://cdn1.iconfinder.com/data/icons/users-outline-1/40/24-256.png" alt="login"/>
                </li>
            </ul>

        </div>
    )
};
export default Navbar;