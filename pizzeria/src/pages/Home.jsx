import React, { useContext } from "react";
import Header from "../components/Header";
import CardPizza from "../components/CardPizza";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";
import { PizzaContext } from "../context/PizzaContext";
import '../assets/css/main.css';

const Home = () => {
    const { pizzas, loading, error } = useContext(PizzaContext);

    if(loading){
        return <LoadingSpinner />;
    }

    if(error){
        return <ErrorMessage error={error} onRetry={fetchPizzas} />;
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