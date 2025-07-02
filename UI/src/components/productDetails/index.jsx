import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useCart } from "../../core/contexts/CartContext";

const sizes = ["XS", "S", "M", "L", "XL"];

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState("S");
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await axios.get(
        `https://api.escuelajs.co/api/v1/products/${id}`
      );
      setProduct(res.data);
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto py-20 text-center">
        <p className="text-xl font-semibold text-gray-700">Loading...</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10">
      <div>
        <img
          src={product.images?.[0]}
          alt={product.title}
          className="rounded-lg object-cover w-full h-full max-h-[600px]"
        />
      </div>
      <div className="space-y-6">
        <div className="flex justify-between items-start">
          <h2 className="text-3xl font-bold text-gray-900">{product.title}</h2>
          <span className="text-2xl font-semibold text-gray-800">
            ${product.price}
          </span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <span className="text-yellow-500">★ ★ ★ ★ ☆</span>
          <span className="ml-2">3.9 (512 reviews)</span>
        </div>
        <div>
          <div className="flex flex-wrap gap-2">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-4 py-2 border rounded-md text-sm font-medium ${
                  selectedSize === size
                    ? "bg-green-600 text-white"
                    : "bg-white text-gray-700 border-gray-300"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
        <button
          onClick={() => addToCart(product)}
          className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition"
        >
          Add to cart
        </button>
        <div>
          <h3 className="text-md font-semibold text-gray-800 mb-1">
            Description
          </h3>
          <p className="text-gray-600 leading-relaxed">{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
