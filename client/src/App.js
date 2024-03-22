import React from "react";

import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Home from "./pages/Home";
import SignUp from "./pages/Signup";
import SignIn from "./pages/Login";
import ContactUs from "./pages/ContactUs";
import { motion } from "framer-motion";

import List from "./pages/List/List";
import SinglePage from "./pages/singlepage/SinglePage";
import AdminHeader from "./admin/Component/AdminHeader";
import AdminHome from "./admin/Pages/AdminHome";

import Adminlist from "./admin/Pages/List/Adminlist";
import SinglelistItem from "./admin/Pages/List/SinglelistItem";
import City from "./admin/Pages/City/City";
import MyList from "./pages/MyList";
import SavedList from "./pages/SavedList";
import SideBar from "./admin/Component/Sidebar/SideBar";
import SingleCity from "./admin/Pages/City/SingleCity";
import { GiVillage } from "react-icons/gi";
const Layout = () => {
  return (
    <>
      <Header />

      <div className="mt-16">
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

const AdminLayout = () => {
  return (
    <>
      {/* <AdminHeader /> */}

      <SideBar>
        <Outlet />
      </SideBar>
    </>
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
      {
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/my-list",
        element: <MyList />,
      },
      {
        path: "/saved-list",
        element: <SavedList />,
      },
      {
        path: "/list",
        element: <List />,
      },
      {
        path: "/list/:filters?",
        element: <List />,
      },
      {
        path: "/:id",
        element: <SinglePage />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "/admin",
        element: <AdminHome />,
      },

      {
        path: "/admin/list/:id",
        element: <SinglelistItem />,
      },

      {
        path: "/admin/city",
        element: <City />,
      },
      {
        path: "/admin/city/:id",
        element: <SingleCity />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
