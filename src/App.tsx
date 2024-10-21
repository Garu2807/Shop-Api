import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';
import ProductList from './features/products/ProductList';
import Navbar from './features/navbar/Navbar';
import CartModal from './features/modal/CartModal'; // Импортируем CartModal
import { useAppDispatch } from './redux/store'; // Импортируем хук для диспетчера
import { getCart } from './features/cart/CartSlice'; // Импортируем действие для загрузки корзины

function App(): JSX.Element {
  const [openCart, setOpenCart] = useState(false);
  const dispatch = useAppDispatch(); 

  const handleOpenCart = () => setOpenCart(true);
  const handleCloseCart = () => setOpenCart(false);


  useEffect(() => {
    dispatch(getCart()); 
  }, [dispatch]);

  return (
    <div className="App">
      <Navbar handleOpenCart={handleOpenCart} />
      <Routes>
        <Route path="/" element={<ProductList />} />
      </Routes>

      <CartModal open={openCart} handleClose={handleCloseCart} />
    </div>
  );
}

export default App;
