import React from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/notfound.css";

const NotFound = () => {
    const navigate = useNavigate();
  
    const handleGoHome = () => {
      navigate("/");
    };
  
    return (
        <div className="container">
            <h1 className="header">404</h1>
            <p className="message">Oops! Pareces perdido en el espacio!!!</p>
            <p className="emoji">🚀🪐👽</p>
            <button onClick={handleGoHome} className="button">
                Vamos a Casa
            </button>
        </div>
    );
};

export default NotFound;