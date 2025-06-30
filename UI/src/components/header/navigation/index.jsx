import { NavLink } from "react-router-dom";
import { NAVLINKS } from "./constants";
import BrandName from "../brandName";
import Search from "../search";
import Cart from "../cart";

const Navigation = () => {
  return (
    <nav className="bg-[#3e5f52] text-white px-8 py-4 flex justify-between items-center shadow-md">
      <BrandName />
      <ul className="flex space-x-10 items-center ml-[25%]">
        {NAVLINKS.map(({ path, label }) => (
          <li key={label} className="relative">
            <NavLink
              to={path}
              className={({ isActive }) =>
                `font-semibold ${
                  isActive ? "text-white" : "text-gray-300"
                } hover:text-white transition duration-200`
              }
            >
              {({ isActive }) => (
                <>
                  {label}
                  {isActive && (
                    <span className="absolute left-0 -bottom-1 w-full h-1 bg-yellow-400 rounded-sm"></span>
                  )}
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="flex space-x-15 text-white text-xl mr-[5%]">
        <Search />
        <Cart />
      </div>
    </nav>
  );
};

export default Navigation;
