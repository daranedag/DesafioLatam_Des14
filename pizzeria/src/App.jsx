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
import { UserProvider } from "./context/UserContext";
import { ProtectedRoute, PublicRoute } from "./routes/ProtectedRoute";

function App() {
  const [total, setTotal] = useState(0);
  const user = {
    nombre: "Juan",
    apellido: "Perez",
    email: "juan.perez@mail.com"
  };

  return (
    <UserProvider>
      <PizzaProvider>
        <CartProvider>
          <Router>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              
              <Route element={<PublicRoute />}>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
              </Route>
              
              <Route path="/cart" element={<Cart />} />
              <Route path="/pizza/:id" Component={Pizza} />

              <Route element={<ProtectedRoute />}>
                <Route path="/profile" element={<Profile user={user} />} />
              </Route>            
              <Route path="*" element={<NotFound/>} />
            </Routes>
            <Footer />
          </Router>
        </CartProvider>
      </PizzaProvider>
    </UserProvider>
  );
}

export default App
