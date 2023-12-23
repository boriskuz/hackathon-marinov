import { Routes, Route } from "react-router-dom";
import ExampleAnimation from "./components/ExampleAnimation";
import ProductContextConstructor from "./contexts/useProductDataContext";
import "./styles/main.scss";
import Footer from "./components/Footer";

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
      <Footer />
    </ProductContextConstructor>
  );
}

export default App;
