import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//import App from "./App";
import { makeServer } from "./server";
//import { Productcontext } from "./contexts/Productcontext";
import Approuter from "./App";
import { RouterProvider } from "react-router-dom";
//import { BrowserRouter } from "react-router-dom";

// Call make Server
makeServer();

{/*ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Productcontext>
    <Approuter/>
    </Productcontext>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);*/}
const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={Approuter}/>);
