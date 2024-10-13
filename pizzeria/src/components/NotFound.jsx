import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();
  
    const handleGoHome = () => {
      navigate("/");
    };
  
    return (
        <div style={styles.container}>
            <h1 style={styles.header}>404</h1>
            <p style={styles.message}>Oops! Pareces perdido en el espacio!!!</p>
            <p style={styles.emoji}>🚀🪐👽</p>
            <button onClick={handleGoHome} style={styles.button}>
                Vamos a Casa
            </button>
        </div>
    );
};

const styles = {
    container: {
        textAlign: "center",
        padding: "2rem",
        color: "#333",
        fontFamily: "'Comic Sans MS', sans-serif",
    },
    header: {
        fontSize: "8rem",
        margin: 0,
    },
    message: {
        fontSize: "1.5rem",
        margin: "1rem 0",
    },
    emoji: {
        fontSize: "3rem",
        margin: "1rem 0",
    },
    button: {
        padding: "0.75rem 1.5rem",
        fontSize: "1rem",
        backgroundColor: "#ff4081",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        transition: "background-color 0.3s ease",
    },
};

export default NotFound;