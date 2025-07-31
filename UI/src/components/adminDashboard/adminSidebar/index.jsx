import { SIDEBARITEMS } from "./constants.js";
import Navbar from "../navbar/index.jsx";
import Sidebar from "../../sidebar/index.jsx";

const AdminSidebar = () => {
  return (
    <div className="flex">
      <Navbar />
      <Sidebar
        title="Admin Panel"
        items={SIDEBARITEMS}
        footerText="© 2025 E-Shop Admin"
      />
    </div>
  );
};

export default AdminSidebar;
