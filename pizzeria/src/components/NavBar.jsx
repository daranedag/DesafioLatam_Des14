import React from "react";

const NavBar = () =>{
    const total = 25000;
    const token = Math.random() >= 0.5;

    return(
    <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand text-light" href="#">Pizzería Mamma Mia</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse d-flex" id="navbarNav">
                <ul className="navbar-nav w-100">
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#">
                            <button className="btn btn-outline-light">
                                <i className="bi bi-house"></i>
                                &nbsp;Home
                            </button>
                        </a>                        
                    </li>
                    {token ? (
                        <>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <button className="btn btn-outline-light">
                                    <i className="bi bi-unlock"></i>
                                    &nbsp;Profile
                                </button>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <button className="btn btn-outline-light">
                                    <i className="bi bi-lock"></i>
                                    &nbsp;Logout
                                </button>
                            </a>
                        </li>
                        </>
                    ) : (
                        <>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <button className="btn btn-outline-light">
                                    <i className="bi bi-key"></i>
                                    &nbsp;Login
                                </button>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <button className="btn btn-outline-light">
                                    <i className="bi bi-key"></i>
                                    &nbsp;Register
                                </button>
                            </a>
                        </li>
                        </>
                    )}
                    <li className="nav-item ms-auto">
                        <a className="nav-link" href="#">
                            <button className="btn btn-outline-info">
                                <i className="bi bi-cart3"></i>
                                &nbsp;Total: ${total}
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