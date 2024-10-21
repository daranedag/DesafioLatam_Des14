import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { PizzaProvider } from "./context/PizzaContext";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";

import Register from "./pages/Register";
import Login from "./pages/Login";
import Pizza from "./pages/Pizza";
import NotFound from "./components/NotFound";
import Profile from "./components/Profile";

function App() {
  const [total, setTotal] = useState(0);
  const user = {
    nombre: "Juan",
    apellido: "Perez",
    email: "juan.perez@mail.com"
  };

  return (
    <PizzaProvider>
      <CartProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/pizza/:id" Component={Pizza} />
          <Route path="/profile" element={<Profile user={user} />} />          
          <Route path="*" element={<NotFound/>} />
        </Routes>
        <Footer />
      </Router>
      </CartProvider>
    </PizzaProvider>    
  );
}

export default App
