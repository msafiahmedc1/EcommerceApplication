import { Link } from "react-router-dom";
import { SIDEBARITEMS } from "./constants.js";

const AdminSidebar = () => {
  return (
    <aside className="w-64 min-h-screen bg-[#3e5f52] text-white p-6 shadow-md flex flex-col">
      <div className="text-3xl font-bold mb-12 text-center tracking-wide">
        Admin Panel
      </div>
      <nav className="space-y-3">
        {SIDEBARITEMS.map(({ icon: Icon, label, path }) => (
          <Link
            to={path}
            key={label}
            className="flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-[#2e4a3e] transition-all duration-200 cursor-pointer group"
            aria-label={label}
          >
            <Icon className="w-5 h-5 text-[#c8e3d7] group-hover:text-white" />
            <span className="text-sm font-medium group-hover:text-white">
              {label}
            </span>
          </Link>
        ))}
      </nav>
      <div className="mt-auto pt-10 text-center text-xs text-[#c8e3d7] border-t border-[#4d6b60]">
        © 2025 E-Shop
      </div>
    </aside>
  );
};

export default AdminSidebar;
