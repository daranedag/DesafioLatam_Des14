import React from "react";

const NavBar = () =>(
    <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand text-light" href="#">Pizzería Mamma Mía</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse d-flex" id="navbarNav">
                <ul className="navbar-nav w-100">
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#">
                            <button className="btn btn-outline-light">
                                Home
                            </button>
                        </a>                        
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <button className="btn btn-outline-light">
                                Profile
                            </button>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <button className="btn btn-outline-light">
                                Logout
                            </button>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <button className="btn btn-outline-light">
                                Login
                            </button>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <button className="btn btn-outline-light">
                                Register
                            </button>
                        </a>
                    </li>
                    <li className="nav-item ms-auto">
                        <a className="nav-link" href="#">
                            <button className="btn btn-outline-info">
                                Total: $
                            </button>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

export default NavBar;