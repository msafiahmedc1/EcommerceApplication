import { Outlet } from "react-router-dom";
import UserSidebar from "../components/userDashboard/userSidebar";

const UserLayout = () => {
  return (
    <div className="flex min-h-screen bg-white">
      <UserSidebar />
      <main className="flex-1 p-6 bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
};

export default UserLayout;
