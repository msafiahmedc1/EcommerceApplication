import React from "react";
import { PRODUCTS } from "./constants";
import HeroSection from "../heroSection";

const Shop = () => {
  return (
    <div>
      <HeroSection title="Shop" />
      <div className="bg-gray-50 py-16 px-8 min-h-screen">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {PRODUCTS.map((product, index) => (
            <div key={index} className="text-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto mx-auto mb-4"
              />
              <h3 className="text-sm text-gray-800">{product.name}</h3>
              <p className="font-bold text-black">${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
