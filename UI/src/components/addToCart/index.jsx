import { Link } from "react-router-dom";
import { useCart } from "../../core/contexts/CartContext";

const AddToCart = () => {
  const { cartItems } = useCart();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cartItems.map((item, index) => (
              <li key={index} className="flex items-center gap-4 border-b pb-4">
                <img
                  src={item.images}
                  alt={item.title}
                  className="w-16 h-16 object-cover rounded"
                />
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-gray-600 text-sm">$ {item.price}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex justify-end">
            <Link
              to="/checkout"
              className="px-6 py-3 bg-green-600 text-white font-medium text-lg rounded-lg shadow-md hover:bg-green-800 transition duration-300"
            >
              Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default AddToCart;
