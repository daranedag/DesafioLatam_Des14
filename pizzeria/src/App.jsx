import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Pizza from "./components/Pizza";

function App() {
  const [total, setTotal] = useState(0);

  return (
    <Router>
      <NavBar total={total}/>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart setTotal={setTotal}/>} />
        <Route path="/pizza/:id" Component={Pizza} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App
