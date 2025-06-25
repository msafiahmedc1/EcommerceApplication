import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "../../components/header";
import Home from "../../components/home";
import Shop from "../../components/shop";
import AboutUs from "../../components/aboutUs";
import Services from "../../components/services";
import Blog from "../../components/blog";
import ContactUs from "../../components/contactUs";

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <Header />
          <Home />
        </div>
      ),
    },
    {
      path: "/shop",
      element: (
        <div>
          <Header />
          <Shop />
        </div>
      ),
    },
    {
      path: "/aboutus",
      element: (
        <div>
          <Header />
          <AboutUs />
        </div>
      ),
    },
    {
      path: "/services",
      element: (
        <div>
          <Header />
          <Services />
        </div>
      ),
    },
    {
      path: "/blog",
      element: (
        <div>
          <Header />
          <Blog />
        </div>
      ),
    },
    {
      path: "/contactus",
      element: (
        <div>
          <Header />
          <ContactUs />
        </div>
      ),
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default Routes;
