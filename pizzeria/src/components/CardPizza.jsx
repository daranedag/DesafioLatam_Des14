import React from "react";
import iconoPizza from '../assets/img/pizzaIcon.png';
import '../assets/css/cardpizza.css';

const CardPizza = ({ id, name, price, ingredients, img, desc }) => {
    return(
        <div className="card flex-fill my-2" id={id} style={{ width: 22+'rem' }}>
            <img src={img} className="card-img-top fotoPizza" alt={`Imagen de ${name}`} />
            <div className="card-body">
                <h5 className="card-title text-center text-capitalize">Pizza {name}</h5>
                <p className="text-center descripcionPizza">{desc}</p>
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
                <p className="card-text text-center mb-3 precioPizza">Precio: ${price}</p>
                <div className="d-flex w-100">
                    <button className="btn btn-outline-dark">Ver mas&nbsp;<i className="bi bi-info-circle"></i></button>
                    <button className="btn btn-dark ms-auto">Añadir&nbsp;<i className="bi bi-cart4"></i></button>
                </div>
            </div>
        </div>
    );
}
export default CardPizza;