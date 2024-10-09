import React from "react";
import { useNavigate } from "react-router-dom";
import iconoPizza from '../assets/img/pizzaIcon.png';
import '../assets/css/cardpizza.css';

const CardPizza = ({ id, name, price, ingredients, img, desc }) => {
    const navigate = useNavigate();

    const handleVerMas = () =>{
        navigate(`/pizza/${id}`);
    }
    return(
        <div className="card flex-fill my-2" id={id} style={{ width: 22+'rem' }}>
            <img src={img} className="card-img-top fotoPizza" alt={`Imagen de ${name}`} />
            <div className="card-body">
                <h5 className="card-title text-center text-capitalize">Pizza {name}</h5>
                <hr />
                <p className="text-center ingredientesPizza">Ingredientes</p>                
                <div className="d-flex flex-wrap justify-content-center">
                    <img src={iconoPizza} alt="IconoPizza" className="iconoPizza" />
                    {ingredients.map((ingredient, index) => (
                        <span key={index} className="badge bg-light me-1 text-dark">
                            {ingredient}
                        </span>
                    ))}
                </div>
                <p className="card-text text-center mb-3 precioPizza">Precio: ${price.toLocaleString()}</p>
                <div className="d-flex w-100">
                    <button className="btn btn-outline-dark" onClick={handleVerMas}>Ver mas&nbsp;<i className="bi bi-info-circle"></i></button>
                    <button className="btn btn-dark ms-auto">Añadir&nbsp;<i className="bi bi-cart4"></i></button>
                </div>
            </div>
        </div>
    );
}
export default CardPizza;