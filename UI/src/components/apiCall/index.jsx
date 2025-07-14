import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import CurrencyConverter from "../currencyConverter";
import { useCart } from "../../core/contexts/CartContext";
import DefaultLayout from "../../layout/defaultLayout";

const ApiCall = () => {
  const [product, setProduct] = useState([]);
  const { addToCart } = useCart();

  const [currency, setCurrency] = useState("PKR");
  const [convertPrice, setConvertPrice] = useState(() => (p) => p);

  const handleCurrencyChange = (currency, convertFn) => {
    setCurrency(currency);
    setConvertPrice(() => convertFn);
  };

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("https://api.escuelajs.co/api/v1/products");
      setProduct(res.data);
    };
    getData();
  }, []);

  return (
    <DefaultLayout>
      <div className="py-12 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {product?.slice(0, 10).map((item, index) => (
            <div
              key={index}
              className="group rounded-xl overflow-hidden shadow-md bg-white hover:shadow-lg transition-shadow duration-300"
            >
              <Link to={`/product/${item.id}`}>
                <img
                  className="w-full aspect-[3/4] object-cover"
                  src={item.images?.[0]}
                  alt={item.title}
                />
              </Link>
              <div className="p-4 space-y-2">
                <h3 className="text-lg font-semibold text-gray-800 truncate">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 line-clamp-2">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-green-600 font-bold text-md">
                    {convertPrice(item.price)}
                  </span>
                  <CurrencyConverter onChange={handleCurrencyChange} />
                </div>
                <button
                  onClick={() => addToCart(item)}
                  className="w-full mt-2 bg-green-600 text-white text-sm px-4 py-2 rounded-lg shadow-md hover:bg-green-700"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DefaultLayout>
  );
};

export default ApiCall;
