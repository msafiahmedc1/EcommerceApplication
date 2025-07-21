import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative flex items-center mr-2">
      <button
        onClick={() => setOpen(!open)}
        className="text-white text-xl focus:outline-none"
      >
        <FaSearch />
      </button>
      {open && (
        <div className="absolute right-65 top-10 z-10">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            onBlur={() => setOpen(false)}
            placeholder="Search..."
            autoFocus
            className="w-135 pl-10 pr-4 py-2 rounded-lg bg-white text-black shadow-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
      )}
    </div>
  );
};

export default Search;
