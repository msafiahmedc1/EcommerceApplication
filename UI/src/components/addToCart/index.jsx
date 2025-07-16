import { Link } from "react-router-dom";
import { useCart } from "../../core/contexts/CartContext";
import DefaultLayout from "../../layout/defaultLayout";

const AddToCart = () => {
  const { cartItems } = useCart();

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + Number(item.price),
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
                {cartItems.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-4 border-b pb-4"
                  >
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
