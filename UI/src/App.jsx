import "./App.css";
import { CartProvider } from "./core/contexts/CartContext";
import Routes from "./core/routes";

function App() {
  return (
    <div>
      <CartProvider>
        <Routes />
      </CartProvider>
    </div>
  );
}

export default App;
