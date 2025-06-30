import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../../components/home";
import Shop from "../../components/shop";
import AboutUs from "../../components/aboutUs";
import Services from "../../components/services";
import Blog from "../../components/blog";
import ContactUs from "../../components/contactUs";
import Layout from "../../layout";
import AddToCart from "../../components/addToCart";
import Checkout from "../../components/checkout";

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "shop", element: <Shop /> },
        { path: "aboutus", element: <AboutUs /> },
        { path: "services", element: <Services /> },
        { path: "blog", element: <Blog /> },
        { path: "contactus", element: <ContactUs /> },
        { path: "addtocart", element: <AddToCart /> },
        { path: "checkout", element: <Checkout /> },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default Routes;
