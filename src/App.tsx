import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import cartItem from './Components/CartItem';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" Component={ Home } />
      <Route path="/cart" Component={ cartItem } />
    </Routes>
  );
}

export default App;
