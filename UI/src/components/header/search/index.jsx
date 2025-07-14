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
        <input
          type="text"
          onBlur={() => setOpen(false)}
          placeholder="Search..."
          autoFocus
          className="absolute right-0 top-10 w-64 px-4 py-2 rounded-lg bg-white text-black shadow-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 z-10"
        />
      )}
    </div>
  );
};

export default Search;
