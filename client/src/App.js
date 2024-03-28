import React, { useEffect } from "react";

import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
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

import City from "./admin/Pages/City/City";
import MyList from "./pages/MyList";
import SavedList from "./pages/SavedList";
import SideBar from "./admin/Component/Sidebar/SideBar";
import SingleCity from "./admin/Pages/City/SingleCity";
import { GiVillage } from "react-icons/gi";

import { useSelector, UseSelector } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AdminUsers from "./admin/Pages/users/AdminUsers";
import AdminMessages from "./admin/Pages/Message/AdminMessages";
import SingleUserMessages from "./admin/Pages/Message/SingleUserMessages";

import SingleProperty from "./admin/Pages/Property/SingleProperty/SingleProperty";

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
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (!currentUser) return navigate("/");
  }, [currentUser]);
  return (
    currentUser && (
      <>
        {/* <AdminHeader /> */}

        <SideBar>
          <Outlet />
        </SideBar>
      </>
    )
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
        path: "/admin",
        element: <AdminHome />,
      },

      {
        path: "/admin/list/:id",
        element: <SingleProperty />,
      },

      {
        path: "/admin/city",
        element: <City />,
      },
      {
        path: "/admin/city/:id",
        element: <SingleCity />,
      },
      {
        path: "/admin/users",
        element: <AdminUsers />,
      },
      {
        path: "/admin/messages",
        element: <AdminMessages />,
      },
      {
        path: "/admin/messages/:id",
        element: <SingleUserMessages />,
      },
    ],
  },
]);
function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
