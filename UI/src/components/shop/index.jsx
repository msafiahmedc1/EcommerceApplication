import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeroSection from "../heroSection";
import CurrencyConverter from "../currencyConverter";
import { useCart } from "../../core/contexts/CartContext";
import DefaultLayout from "../../layout/defaultLayout";
import API from "../../apis";
import fallbackImage from "../../assets/fallbackImages/download.png";

const Shop = () => {
  const [product, setProduct] = useState([]);
  const { addToCart } = useCart();

  const [currency, setCurrency] = useState("USD");
  const [convertPrice, setConvertPrice] = useState(() => (p) => p);

  const handleCurrencyChange = (currency, convertFn) => {
    setCurrency(currency);
    setConvertPrice(() => convertFn);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await API.GetProductData();
      console.log("Fetched products:", data);
      setProduct(data);
    };

    fetchProducts();
  }, []);
  return (
    <div>
      <HeroSection title="Shop" />
      <DefaultLayout>
        <div className="py-12 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {product &&
              product?.slice(0, 10).map((item, index) => (
                <div
                  key={index}
                  className="group rounded-xl overflow-hidden shadow-md bg-white hover:shadow-lg transition-shadow duration-300"
                >
                  <Link to={`/product/${item.id}`}>
                    <img
                      className="w-full aspect-[3/4] object-cover"
                      src={item.images?.[0] || fallbackImage}
                      alt={item.title || "No Image"}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = fallbackImage;
                      }}
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
    </div>
  );
};

export default Shop;
