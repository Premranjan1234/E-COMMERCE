import "./App.css";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Shop from "./components/Shop";
import {createBrowserRouter,Outlet} from 'react-router-dom'
import { Productcontext } from "./contexts/Productcontext";
import SingleProduct from "./components/SingleProduct";
import Error from "./components/Error";



function App() {
  return (
    <div className="App">
      <Productcontext>
      <Navbar/>
      <Outlet/>
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
      }

    ],

  },
]);

export default Approuter;
