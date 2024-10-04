import React from "react";
import Header from "./Header";
import CardPizza from "./CardPizza";
import { pizzas } from "../assets/js/pizzas";
import '../assets/css/main.css'

const Home = () =>{
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
                                price={pizza.price.toLocaleString()}
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