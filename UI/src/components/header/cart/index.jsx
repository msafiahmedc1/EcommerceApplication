import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../../../core/contexts/CartContext";

const Cart = () => {
  const { cartItems } = useCart();
  return (
    <div className="relative">
      <Link to="/addtocart">
        <FaShoppingCart className="text-2xl cursor-pointer hover:text-gray-300" />
        {cartItems.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-green-800 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
            {cartItems.length}
          </span>
        )}
      </Link>
    </div>
  );
};

export default Cart;
