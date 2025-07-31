import { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { FaUser } from "react-icons/fa";
import { NAVLINKS } from "./constants";
import BrandName from "../brandName";
import Search from "../search";
import Cart from "../cart";
import User from "../user";
import { AuthContext } from "../../../core/contexts/Authentication";

const Navigation = () => {
  const { logout } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const token = localStorage.getItem("authToken");
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoggedIn(!!token);
  }, [token]);

  const handleLogout = () => {
    logout();
    setDropdownOpen(false);
  };

  const handleProfile = () => {
    navigate("/user");
    setDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="bg-[#3e5f52] text-white px-6 py-4 shadow-md">
      <div className="flex items-center justify-between">
        <BrandName />
        <ul className="hidden md:flex space-x-10 items-center">
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
        <div className="hidden md:flex space-x-6 text-xl">
          <div className="flex items-center gap-2">
            <Search />
            <Cart />
          </div>
          {isLoggedIn ? (
            <div className="relative inline-block text-left">
              <div onClick={toggleDropdown} className="cursor-pointer">
                <FaUser className="text-2xl hover:text-gray-300" />
              </div>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded-md shadow-lg z-10">
                  <ul className="py-1">
                    <li>
                      <button
                        onClick={handleProfile}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                      >
                        My Profile
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <User />
          )}
        </div>
        <div className="md:hidden flex items-center space-x-4">
          <div className="flex items-center gap-2">
            <Search />
            <Cart />
          </div>
          {isLoggedIn ? (
            <div className="relative inline-block text-left">
              <div onClick={toggleDropdown} className="cursor-pointer">
                <FaUser className="text-2xl hover:text-gray-300" />
              </div>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded-md shadow-lg z-10">
                  <ul className="py-1">
                    <li>
                      <button
                        onClick={handleProfile}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                      >
                        My Profile
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <User />
          )}
          <button
            className="text-white text-3xl focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="mt-4 md:hidden flex flex-col space-y-4 text-lg">
          {NAVLINKS.map(({ path, label }) => (
            <NavLink
              key={label}
              to={path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block py-2 px-4 rounded-md ${
                  isActive ? "bg-yellow-400 text-black" : "text-gray-300"
                } hover:bg-yellow-300 hover:text-black transition`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
