import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';
import { calculateTotal } from './features/cart/cartSlice';
import Modal from './components/Modal';

function App() {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems]);
  return (
    <div className="App">
      <Navbar />
      <Modal />
      <CartContainer />
    </div>
  );
}

export default App;
