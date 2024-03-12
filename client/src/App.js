import React from "react";

import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Home from "./pages/Home";
import SignUp from "./pages/Signup";
import SignIn from "./pages/Login";
import ContactUs from "./pages/ContactUs";
import List from "./pages/List/List";
import SinglePage from "./pages/singlepage/SinglePage";

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
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
