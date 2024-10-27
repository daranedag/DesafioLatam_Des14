import React, { useContext, useState } from "react";
import { useCart } from "../context/CartContext";
import { UserContext } from "../context/UserContext";
import axios from "axios";

const Cart = () => {
    const { cartItems, aumentarCantidad, disminuirCantidad, getTotal, clearCart } = useCart();
    const { token } = useContext(UserContext);
    const [message, setMessage] = useState("");

    const totalLocal = getTotal();

    const handlePagar = async () => {
        try{
            await axios.post('http://localhost:5000/api/checkouts', { cartItems }, { headers: {Authorization: `Bearer ${token}`}});
            setMessage("Compra realizda con exito!!");
            clearCart();
        }
        catch (error){
            setMessage("Error al realizar la compra!");
            alert(message);
        }
    };

    return(
        <div className="container my-2">
            <h2 className="text-center">Carro de Compras</h2>
            <div className="d-flex flex-column align-items-center">
                {cartItems.length > 0 ? (
                    cartItems.map((pizza, index) => (
                        <div className="card mb-3" style={{ width: 540+'px' }} id={pizza.id} key={index}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={pizza.img} className="img-fluid rounded-start" alt={`${pizza.name}`} />
                                </div>
                                <div className="col-md-5">
                                    <div className="card-body">
                                        <h5 className="card-title">Pizza {pizza.name}</h5>
                                        <p className="card-text">Precio unitario: ${pizza.price.toLocaleString()}</p>
                                        <p className="card-text">Cantidad: {pizza.quantity}</p>
                                    </div>                                    
                                </div>
                                <div className="col-md-3">
                                    <div className="d-flex align-items-center justify-content-center mt-5">
                                        <button className="btn btn-outline-dark me-2" onClick={() => disminuirCantidad(pizza.id)}><i className="bi bi-dash-circle-fill"></i></button>
                                        <button className="btn btn-outline-dark me-2" onClick={() => aumentarCantidad(pizza.id)}><i className="bi bi-plus-circle-fill"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))) : (
                        <p>No hay pizzas en el carro</p>
                    )
                }
            </div>
            <h2 className="text-center">Total: ${totalLocal.toLocaleString()}</h2>

            <div className="text-center my-3">
                <button className="btn btn-success" onClick={handlePagar} disabled={!token || cartItems.length === 0}>
                    <i className="bi bi-credit-card-fill"></i>&nbsp;Pagar
                </button>
                {!token && <p className="text-danger mt-2">Debes iniciar sesión para hacer el pago!!</p>}
                {cartItems.length === 0 && <p className="text-danger mt-2">Carrito vacío, agrega tu pizza favorita ;)</p>}
                {message && <p>{message}</p>}
            </div>
        </div>        
    );
}
export default Cart;