import React from "react";
import Header from "./Header";
import CardPizza from "./CardPizza";
import '../assets/css/main.css'

const Home = () =>{
    const pizzasMostrar = [
        {
            name: "Napolitana",
            price: 5950,
            ingredients: ["mozzarella", "tomates", "jamón", "orégano"],
            img: "https://mandolina.co/wp-content/uploads/2023/08/pizza-napolitana-1080x550-1.png"
        },
        {
            name: "Pepperoni",
            price: 6950,
            ingredients: ["mozzarella", "pepperoni", "orégano"],
            img: "https://www.hola.com/horizon/landscape/e9e1e82cb873-pepperoni-pizza-abob-t.jpg"
        },
        {
            name: "Napolitana",
            price: 5950,
            ingredients: ["mozzarella", "tomates", "jamón", "orégano"],
            img: "https://mandolina.co/wp-content/uploads/2023/08/pizza-napolitana-1080x550-1.png"
        },
    ]
    return(
        <main>
            <Header />
            
            <div className="container">
                <div className="row">
                    {pizzasMostrar.map((pizza, index) => (
                        <div className="col-12 col-md-4 mb-2" key={index}>
                            <CardPizza
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