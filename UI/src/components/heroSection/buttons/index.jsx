const Buttons = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0 items-center justify-center md:justify-start">
      <button className="bg-yellow-400 text-black font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-yellow-300 transition w-full sm:w-auto">
        Shop Now
      </button>
      <button className="border border-gray-400 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-gray-700 transition w-full sm:w-auto">
        Explore
      </button>
    </div>
  );
};

export default Buttons;
