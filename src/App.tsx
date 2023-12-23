import { Route, Routes } from 'react-router-dom';

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
import CustomMade from './pages/CustomMade';

function App() {
  return (
    <ProductContextConstructor>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/product-page" element={<ProductPage />} />
        <Route path="/product-detail-page/:id" element={<ProductDetailPage />} />
        <Route path="/product-page-home-decor" element={<ProductPageOne />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/custom-orders" element={<CustomMade />} />
      </Routes>
      <Footer />
    </ProductContextConstructor>
  );
}

export default App;
