import React from "react";
import '../assets/css/header.css'

const Header = () =>(
    <header className="d-flex flex-column justify-content-center aligh-items-center" id="cabeceraFondo">
        <h1 className="text-light text-center">¡Pizzería Mamma Mia!</h1>
        <p className="text-light text-center">
            Tenemos las mejores pizzas que podrás encontrar
        </p>
        <hr />
    </header>
);

export default Header;