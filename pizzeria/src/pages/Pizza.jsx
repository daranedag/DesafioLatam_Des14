import axios from "axios";
import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import '../assets/css/cardpizza.css';

const Pizza = () => {
    const [datos, setDatos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const { id } = useParams();

    const fetchUnaPizza = async () =>{
        try{
            const response = await axios.get(`http://localhost:5000/api/pizzas/${id}`);
            setDatos(response.data);
            setLoading(false);
        }
        catch(err){
            setError(err.message);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchUnaPizza();
    }, []);

    if(loading){
        return <div>Cargando pizzas...</div>
    }

    if(error){
        return <div>Error: {error}</div>
    }

    return(
        <div className="container text-center mt-2">
            <div className="card mb-3 w-100">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={datos.img} className="img-fluid rounded-start" alt={`Imagen de ${datos.name}`} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title text-capitalize">Pizza {datos.name}</h5>
                            <p className="card-text">${datos.price.toLocaleString()}</p>
                            <p className="card-text">Ingredientes:
                                {datos.ingredients.map((ingredient, index) => (
                                    <span key={index} className="badge bg-light me-1 text-dark text-capitalize">
                                        {ingredient}
                                    </span>
                                ))}
                            </p>
                            <p className="card-text">{datos.desc}</p>
                            <button className="btn btn-dark ms-auto my-2">Añadir&nbsp;<i className="bi bi-cart4"></i></button>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
    );
}

export default Pizza;