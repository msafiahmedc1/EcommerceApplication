import { FaUserCircle } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-64 right-0 h-16 bg-white shadow-md flex items-center justify-end px-6 z-10 space-x-6">
      <IoMdNotificationsOutline className="text-gray-600 w-6 h-6 cursor-pointer hover:text-black transition-colors" />
      <FaUserCircle className="text-gray-600 w-6 h-6 cursor-pointer hover:text-black transition-colors" />
    </nav>
  );
};

export default Navbar;
