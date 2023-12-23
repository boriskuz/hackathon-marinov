import { Routes, Route } from "react-router-dom";
import ExampleAnimation from "./components/ExampleAnimation";
import ProductContextConstructor from "./contexts/useProductDataContext";
import "./styles/main.scss";
import Footer from "./components/Footer";
import ProductPage from "./components/product-page/ProductPage";
import ProductPageOne from "./components/product-page/ProductPageOne";
import ProductDetailPage from "./components/product-page/ProductDetailPage";


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
        <Route path="/product-page" element={<ProductPage />} />
        <Route path="/product-detail-page/:id" element={<ProductDetailPage/>} />
        <Route path="/product-page-home-decor" element={<ProductPageOne />} />
      </Routes>
      <Footer />
    </ProductContextConstructor>
  );
}

export default App;
