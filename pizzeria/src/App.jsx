import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
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
    <Router>
      <NavBar total={total}/>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart setTotal={setTotal}/>} />
        <Route path="/pizza/:id" Component={Pizza} />
        <Route path="/profile" element={<Profile user={user} />} />
        
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App
