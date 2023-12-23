import { Routes, Route } from "react-router-dom";
import ExampleAnimation from "./components/ExampleAnimation";
import ProductContextConstructor from "./contexts/useProductDataContext";
import "./styles/main.scss";
import Cart from "./components/cart-page/Cart";

function App() {
  return (
    <ProductContextConstructor>
      <Routes>
        <Route
          path="/"
          element={
            <ExampleAnimation path="../public/animations/bracelet_animation.json" />
          }
        />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </ProductContextConstructor>
  );
}

export default App;
