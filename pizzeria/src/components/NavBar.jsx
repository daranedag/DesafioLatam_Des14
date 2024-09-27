import React from "react";
import { Link } from "react-router-dom";

const NavBar = () =>{
    const getRandomNumber= (min, max) => Math.round((Math.floor(Math.random()*(max-min+1))+min)/100)*100;
    const total = getRandomNumber(9000, 120000);
    const token = Math.random() >= 1;

    return(
    <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
            <Link className="navbar-brand text-light" to="/">
                Pizzería Mamma Mia
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse d-flex" id="navbarNav">
                <ul className="navbar-nav w-100">
                    <li className="nav-item">
                        <Link className="nav-link text-light" to="/">
                            <button className="btn btn-outline-light">
                                <i className="bi bi-house"></i>
                                &nbsp;Home
                            </button>
                        </Link>                        
                    </li>
                    {token ? (
                        <>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="#">
                                <button className="btn btn-outline-light">
                                    <i className="bi bi-unlock"></i>
                                    &nbsp;Profile
                                </button>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="#">
                                <button className="btn btn-outline-light">
                                    <i className="bi bi-lock"></i>
                                    &nbsp;Logout
                                </button>
                            </Link>
                        </li>
                        </>
                    ) : (
                        <>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/login">
                                <button className="btn btn-outline-light">
                                    <i className="bi bi-key"></i>
                                    &nbsp;Login
                                </button>
                            </Link>                            
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/register">
                                <button className="btn btn-outline-light">
                                    <i className="bi bi-key"></i>
                                    &nbsp;Register
                                </button>
                            </Link>
                        </li>
                        </>
                    )}
                    <li className="nav-item ms-auto">
                        <a className="nav-link" href="#">
                            <button className="btn btn-outline-info">
                                <i className="bi bi-cart3"></i>
                                &nbsp;Total: ${total.toLocaleString()}
                            </button>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    );
}

export default NavBar;