import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ShoppingCart from './Components/ShoppingCart';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" Component={ Home } />
      <Route path="/cart" Component={ ShoppingCart } />
    </Routes>
  );
}

export default App;
