import React from "react";
import Buttons from "./buttons";
import sofaImage from "../../assets/heroSectionImages/sofa.png";

const HeroSection = ({ title }) => {
  return (
    <section className="bg-[#3e5f52] h-[90vh] flex items-center justify-between px-20 py-12">
      <div className="text-white max-w-xl">
        <h1 className="text-5xl font-bold leading-tight mb-6">{title}</h1>
        <p className="text-gray-300 mb-8 text-lg">
          Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
          Aliquam vulputate velit imperdiet dolor tempor tristique.
        </p>
        <Buttons />
      </div>
      <div className="w-[65%] relative">
        <img
          src={sofaImage}
          alt="Sofa"
          className="transform scale-120 w-full h-auto object-contain"
        />
      </div>
    </section>
  );
};

export default HeroSection;
