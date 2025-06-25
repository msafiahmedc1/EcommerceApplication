import React from "react";

const Buttons = () => {
  return (
    <div className="flex space-x-6">
      <button className="bg-yellow-400 text-black font-semibold px-8 py-4 rounded-full hover:bg-yellow-300 transition">
        Shop Now
      </button>
      <button className="border border-gray-400 text-white font-semibold px-8 py-4 rounded-full hover:bg-gray-700 transition">
        Explore
      </button>
    </div>
  );
};

export default Buttons;
