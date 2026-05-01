import { useState } from 'react'
import { Navigate } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Login from './components/pages/login/Login'
import Protected from './components/routing/protected/Protected';
import NotFound from './components/ui/notFound/NotFound'
import Dashboard from './components/dashboard/Dashboard';
import Catalog from './components/pages/catalog/Catalog';
import Carrito from './components/pages/carrito/Carrito';

function App() {
  const [count, setCount] = useState(0);
  const [loggedIn, setLoggedIn] = useState(false);
  const [cart, setCart] = useState([]);

  const handleLogIn = () => {
    setLoggedIn(true);
  };

  const handleLogOut = () => {
    setLoggedIn(false);
  };

  const addToCart = (game) => {
    setCart([...cart, game]);
  };


  return (
    <div>
      <BrowserRouter>
        <Routes>

          <Route path="/home/*" element={<Dashboard onLogOut={handleLogOut} />} />
          <Route path="/" element={<Navigate to="home" />} />
          <Route path="/login" element={<Login onLogin={handleLogIn} />} />
          <Route path="/catalog/*" element={<Catalog addToCart={addToCart} />} />
          <Route path="/cart/*" element={<Carrito cart={cart} />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

