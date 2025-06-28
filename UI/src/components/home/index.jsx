import React from "react";
import HeroSection from "../heroSection";
import ApiCall from "../apiData";

const Home = () => {
  return (
    <div>
      <HeroSection title="Home" />
      <ApiCall />
    </div>
  );
};

export default Home;
