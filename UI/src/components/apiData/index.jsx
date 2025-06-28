import axios from "axios";
import React, { useEffect, useState } from "react";

const ApiCall = () => {
  const [productImages, setProductImages] = useState();

  const getProducts = "https://api.escuelajs.co/api/v1/products";

  const getData = async () => {
    const res = await axios.get(getProducts);
    console.log("A1", { a: res.data });
    const result = res.data;
    setProductImages(result);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="rounded-2xl overflow-hidden shadow-xl bg-white hover:shadow-2xl transition-shadow duration-300 p-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {productImages?.slice(0, 10).map((item, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden shadow-md bg-white hover:shadow-lg transition-shadow duration-300 h-100"
          >
            <img
              className="w-full aspect-[3/4] object-cover h-60"
              src={item.images}
              alt={`Product ${index}`}
            />
            <div>{item.price}</div>
            <div>{item.title}</div>
            <div>{item.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApiCall;
