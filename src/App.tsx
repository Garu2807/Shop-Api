import { Route, Routes } from 'react-router';
import ProductList from './features/products/ProductList';
import CartList from './features/cart/CartList';

function App(): JSX.Element {
  return (
    <div className="App">
      <Routes>
        <Route path="/cart" element={<CartList/>} />
        <Route path="/" element={<ProductList />} />
      </Routes>
    </div>
  );
}

export default App;
