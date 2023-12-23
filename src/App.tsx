import { Route, Routes } from 'react-router-dom';

import ProductContextConstructor from './contexts/useProductDataContext';
import './styles/main.scss';
import Homepage from './pages/Homepage';

function App() {
  return (
    <ProductContextConstructor>
      <div style={{ maxWidth: 375, margin: 'auto' }}>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </div>
    </ProductContextConstructor>
  );
}

export default App;
