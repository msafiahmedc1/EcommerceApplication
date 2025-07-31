import { useState } from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "../components/adminDashboard/adminSidebar";
import UserSidebar from "../components/userDashboard/userSidebar";

const DashboardLayout = ({ role }) => {
  const [products, setProducts] = useState([]);

  return (
    <div className="flex min-h-screen bg-white">
      {role === "admin" ? <AdminSidebar /> : <UserSidebar />}
      <main className="flex-1 p-6 bg-gray-100">
        <Outlet context={{ products, setProducts }} />
      </main>
    </div>
  );
};

export default DashboardLayout;
