import { Route, Routes, useLocation } from 'react-router-dom';

import ProductContextConstructor from './contexts/useProductDataContext';
import './styles/main.scss';
import Homepage from './pages/Homepage';
import Cart from './components/cart-page/Cart';

import './styles/main.scss';
import Footer from './components/Footer';
import ProductPage from './components/product-page/ProductPage';
import ProductPageOne from './components/product-page/ProductPageOne';
import ProductDetailPage from './components/product-page/ProductDetailPage';
import Header from './components/Header';
import Faq from './pages/Faq';
import CartFavoritesProvider from './contexts/useCartFavoriteContext';
import { useEffect } from 'react';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);
  return (
    <ProductContextConstructor>
      <CartFavoritesProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/product-page" element={<ProductPage />} />
        <Route path="/product-detail-page/:id" element={<ProductDetailPage />} />
        <Route path="/product-page-home-decor" element={<ProductPageOne />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
      <Footer />
      </CartFavoritesProvider>
    </ProductContextConstructor>
  );
}

export default App;
