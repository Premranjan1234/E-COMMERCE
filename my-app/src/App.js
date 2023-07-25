import "./App.css";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Shop from "./components/Shop";
import {createBrowserRouter,Outlet} from 'react-router-dom'
import { Productcontext } from "./contexts/Productcontext";
import SingleProduct from "./components/SingleProduct";
import Error from "./components/Error";
import { Filterprovider } from "./contexts/Filtercontext";
import Cart from "./components/Cart";
import Wishlist from "./components/Wishlist";
import Profile from "./components/Profile";



function App() {
  return (
    <div className="App">
      <Productcontext>
      <Filterprovider>
      <Navbar/>
      <Outlet/>
      </Filterprovider>
      </Productcontext>
      
    </div>
  );
}
const Approuter=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<Error/>,
    children:[
      {
        path:"/",
        element:<Body/>,
      },
      {
         path:"/shop",
         element:<Shop/>,
      },
      {
        path:"/product/:id",
        element:<SingleProduct/>,
      },
       {
        path:"/cart",
        element:<Cart/>
       },
       {
        path:"/wishlist",
        element:<Wishlist/>
       },
       {
        path:"/profile",
        element:<Profile/>
       }

    ],

  },
]);

export default Approuter;
