import axios from "axios";
import React, {useState, useEffect} from "react";
import Header from "../components/Header";
import CardPizza from "../components/CardPizza";
import '../assets/css/main.css'

const Home = () =>{
    const [pizzas, setPizzas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchPizzas = async () =>{
        try{
            const response = await axios.get('http://localhost:5000/api/pizzas');
            setPizzas(response.data);
            setLoading(false);
        }
        catch(err){
            setError(err.message);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchPizzas();
    }, []);

    if(loading){
        return <div>Cargando pizzas...</div>
    }

    if(error){
        return <div>Error: {error}</div>
    }

    return(
        <main>
            <Header />
            <div className="container">
                <div className="row">
                    {pizzas.map((pizza, index) => (
                        <div className="col-12 col-md-4 mb-2" key={index}>
                            <CardPizza
                                id={pizza.id}
                                desc={pizza.desc}
                                name={pizza.name}
                                price={pizza.price}
                                ingredients={pizza.ingredients}
                                img={pizza.img}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}

export default Home;