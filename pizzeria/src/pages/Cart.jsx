import React, { useState, useEffect } from "react";
import { pizzaCart as carroBase } from "../assets/js/pizzas";

const Cart = ({ setTotal }) => {
    const [pizzaCart, setPizzaCart] = useState(carroBase);
    const [totalLocal, setTotalLocal] = useState(0);

    useEffect(() => {
        const nuevoTotal = pizzaCart.reduce((acc, pizza) => acc + pizza.price*pizza.count,0);
        setTotal(nuevoTotal);
        setTotalLocal(nuevoTotal);
    }, [pizzaCart, setTotal]);

    const aumentarCant = (index) => {
        const nuevoCarro = [...pizzaCart];
        nuevoCarro[index].count += 1;
        setPizzaCart(nuevoCarro)
    };

    const disminuirCant = (index) => {
        const nuevoCarro = [...pizzaCart];
        if(nuevoCarro[index].count > 1){
            nuevoCarro[index].count -=1;
        }
        else{
            nuevoCarro.splice(index, 1)
        }
        setPizzaCart(nuevoCarro);
    };

    return(
        <div className="container my-2">
            <h2 className="text-center">Carro de Compras</h2>
            <div className="d-flex flex-column align-items-center">
                {pizzaCart.length > 0 ? (
                    pizzaCart.map((pizza, index) => (
                        <div className="card mb-3" style={{ width: 540+'px' }} id={pizza.id} key={index}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={pizza.img} className="img-fluid rounded-start" alt={`${pizza.name}`} />
                                </div>
                                <div className="col-md-5">
                                    <div className="card-body">
                                        <h5 className="card-title">Pizza {pizza.name}</h5>
                                        <p className="card-text">Precio unitario: ${pizza.price.toLocaleString()}</p>
                                        <p className="card-text">Cantidad: {pizza.count}</p>
                                    </div>                                    
                                </div>
                                <div className="col-md-3">
                                    <div className="d-flex align-items-center justify-content-center mt-5">
                                        <button className="btn btn-outline-dark me-2" onClick={() => disminuirCant(index)}><i className="bi bi-dash-circle-fill"></i></button>
                                        <button className="btn btn-outline-dark me-2" onClick={() => aumentarCant(index)}><i className="bi bi-plus-circle-fill"></i></button>
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
        </div>        
    );
}
export default Cart;