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
import ProductDetails from "../../components/productDetails";
import Login from "../../components/auth/login";
import Register from "../../components/auth/register";
import StatsCard from "../../components/adminDashboard/statsCard";
import PaymentSummary from "../../components/adminDashboard/paymentSummary";
import OrdersManagement from "../../components/adminDashboard/orderManagement";
import ManageProducts from "../../components/adminDashboard/product";
import AddProduct from "../../components/adminDashboard/product/addProduct";
import DashboardLayout from "../../layout/dashboardLayout";

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
        { path: "/product/:id", element: <ProductDetails /> },
      ],
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "register",
      element: <Register />,
    },
    {
      path: "admin",
      element: <DashboardLayout role="admin" />,
      children: [
        { path: "index", element: <ManageProducts /> },
        { path: "addproduct", element: <AddProduct /> },
        { path: "statistics", element: <StatsCard /> },
        { path: "payments", element: <PaymentSummary /> },
        { path: "orders", element: <OrdersManagement /> },
      ],
    },
    {
      path: "user",
      element: <DashboardLayout />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default Routes;
