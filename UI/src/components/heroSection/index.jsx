import React from "react";
import Buttons from "./buttons";
import sofaImage from "../../assets/heroSectionImages/sofa.png";

const HeroSection = ({ title }) => {
  return (
    <section className="bg-[#3e5f52] min-h-[90vh] flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12">
      <div className="text-white max-w-xl text-center md:text-left mb-10 md:mb-0">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
          {title}
        </h1>
        <p className="text-gray-300 mb-8 text-base sm:text-lg">
          Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
          Aliquam vulputate velit imperdiet dolor tempor tristique.
        </p>
        <Buttons />
      </div>
      <div className="w-full md:w-[65%] relative">
        <img
          src={sofaImage}
          alt="Sofa"
          className="w-full h-auto object-contain max-h-[400px] md:max-h-[500px] mx-auto"
        />
      </div>
    </section>
  );
};

export default HeroSection;
