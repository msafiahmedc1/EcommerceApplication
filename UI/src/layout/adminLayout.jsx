import { Outlet } from "react-router-dom";
import AdminSidebar from "../components/adminDashboard/adminSidebar";

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen bg-white">
      <AdminSidebar />
      <main className="flex-1 p-6 bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
