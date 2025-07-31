import { SIDEBARITEMS } from "./constants";
import Navbar from "../navbar";
import Sidebar from "../../sidebar";

const UserSidebar = () => {
  return (
    <div className="flex">
      <Navbar />
      <Sidebar
        title="User Panel"
        items={SIDEBARITEMS}
        footerText="© 2025 E-Shop Admin"
      />
    </div>
  );
};

export default UserSidebar;
