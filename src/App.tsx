import { Route, Routes } from 'react-router';
import ProductList from './features/products/ProductList';
import CartList from './features/cart/CartList';
import Navbar from './features/navbar/Navbar';

function App(): JSX.Element {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/cart" element={<CartList />} />
        <Route path="/" element={<ProductList />} />
      </Routes>
    </div>
  );
}

export default App;
