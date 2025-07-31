import { Link } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";

const User = () => {
  return (
    <div className="relative">
      <Link to="/login">
        <FaSignInAlt className="text-2xl cursor-pointer hover:text-gray-300" />
      </Link>
    </div>
  );
};

export default User;
