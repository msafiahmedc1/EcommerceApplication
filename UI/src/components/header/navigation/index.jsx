import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { NAVLINKS } from "./constants";
import BrandName from "../brandName";
import Search from "../search";
import Cart from "../cart";
import User from "../user";
import { AuthContext } from "../../../core/contexts/Authentication";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  const { logout } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const token = localStorage.getItem("authToken");

  useEffect(() => {
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [token]);

  const handleLogout = () => {
    logout();
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
            <button
              style={{ cursor: "pointer" }}
              onClick={handleLogout}
              className="flex items-center gap-2"
            >
              <FontAwesomeIcon icon={faRightFromBracket} />
            </button>
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
            <button
              style={{ cursor: "pointer" }}
              onClick={handleLogout}
              className="flex items-center gap-2"
            >
              <FontAwesomeIcon icon={faRightFromBracket} />
            </button>
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
