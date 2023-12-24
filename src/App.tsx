import { Route, Routes } from "react-router-dom";

import ProductContextConstructor from "./contexts/useProductDataContext";
import "./styles/main.scss";
import Homepage from "./pages/Homepage";
import Cart from "./components/cart-page/Cart";

import "./styles/main.scss";
import ProductPage from "./components/product-page/ProductPage";
import ProductPageOne from "./components/product-page/ProductPageOne";
import ProductDetailPage from "./components/product-page/ProductDetailPage";
import Layout from "./components/Layout";

function App() {
  return (
    <ProductContextConstructor>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Homepage />
            </Layout>
          }
        />
        <Route
          path="/product-page"
          element={
            <Layout>
              <ProductPage />
            </Layout>
          }
        />
        <Route
          path="/product-detail-page/:id"
          element={
            <Layout>
              <ProductDetailPage />
            </Layout>
          }
        />
        <Route
          path="/product-page-home-decor"
          element={
            <Layout>
              <ProductPageOne />
            </Layout>
          }
        />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </ProductContextConstructor>
  );
}

export default App;
