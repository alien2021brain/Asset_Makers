import React from "react";

import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Home from "./pages/Home";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import About from "./pages/About";




const Layout = () => {
  return (
    // <>
    //   <Header />

    //   <Outlet />
    //   <Footer />
    // </>
    // 
    <About></About>
  
   
    
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
