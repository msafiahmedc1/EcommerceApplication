import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { useCart } from "../../core/contexts/CartContext";
import DefaultLayout from "../../layout/defaultLayout";

const AddToCart = () => {
  const { cartItems, incrementQty, decrementQty, removeItem } = useCart();

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.quantity * Number(item.price),
    0
  );

  return (
    <DefaultLayout>
      <div className="p-6">
        <h2 className="text-center text-2xl font-bold mb-4">Your Cart</h2>
        <div className="mt-6">
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              <ul className="space-y-4 mt-6">
                {cartItems.map((item) => (
                  <li
                    key={item.id}
                    className="flex items-center gap-4 border-b pb-4"
                  >
                    <img
                      src={item.images}
                      alt={item.title}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-gray-600 text-sm">
                        Price: ${item.price} × {item.quantity} = $
                        {(item.price * item.quantity).toFixed(2)}
                      </p>
                      <div className="flex items-center mt-2 gap-2">
                        <button
                          onClick={() => decrementQty(item.id)}
                          className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400"
                        >
                          −
                        </button>
                        <span className="px-2">{item.quantity}</span>
                        <button
                          onClick={() => incrementQty(item.id)}
                          className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-600 hover:text-red-800 text-xl"
                      title="Remove"
                    >
                      <FaTrash />
                    </button>
                  </li>
                ))}
              </ul>
              <div className="m-6 flex justify-end">
                <h1 className="text-xl font-semibold">
                  Total: ${totalPrice.toFixed(2)}
                </h1>
              </div>
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
      </div>
    </DefaultLayout>
  );
};

export default AddToCart;
