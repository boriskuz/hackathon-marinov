import { Route, Routes } from 'react-router-dom';

import ProductContextConstructor from './contexts/useProductDataContext';
import './styles/main.scss';
import Homepage from './pages/Homepage';

import './styles/main.scss';
import Footer from './components/Footer';
import ProductPage from './components/product-page/ProductPage';
import ProductPageOne from './components/product-page/ProductPageOne';
import ProductDetailPage from './components/product-page/ProductDetailPage';
import Header from './components/Header';
import OurStoryPage from './pages/our-story';

function App() {
  return (
    <ProductContextConstructor>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/our-story" element={<OurStoryPage />} />
        <Route path="/product-page" element={<ProductPage />} />
        <Route path="/product-detail-page/:id" element={<ProductDetailPage />} />
        <Route path="/product-page-home-decor" element={<ProductPageOne />} />
      </Routes>
      <Footer />
    </ProductContextConstructor>
  );
}

export default App;
