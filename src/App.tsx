import { Routes, Route } from "react-router-dom";
import ExampleAnimation from "./components/ExampleAnimation";
import ProductContextConstructor from "./contexts/useProductDataContext";
import "./styles/main.scss";

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
      </Routes>
    </ProductContextConstructor>
  );
}

export default App;
