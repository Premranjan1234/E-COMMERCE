import "./App.css";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Shop from "./components/Shop";
import {createBrowserRouter,Outlet} from 'react-router-dom'
import { Productcontext } from "./contexts/Productcontext";



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
    children:[
      {
        path:"/",
        element:<Body/>,
      },
      {
         path:"/shop",
         element:<Shop/>,
      }

    ],

  },
]);

export default Approuter;
