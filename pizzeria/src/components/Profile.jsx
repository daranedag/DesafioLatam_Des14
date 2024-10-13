import React from "react";
import { useNavigate } from "react-router-dom";

const Profile = ({ user, onLogout }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        alert("Cerrando sesión");
        navigate("/");
    }

    return (
        <div style={styles.container}>
            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Anonymous avatar" style={styles.avatar}/>
            <h2 style={styles.name}>{`${user.nombre} ${user.apellido}`}</h2>
            <p style={styles.email}>{user.email}</p>
            <button onClick={handleLogout} style={styles.logoutButton}>
                Cerrar Sesión
            </button>
        </div>
    );
};

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        backgroundColor: "#f9f9f9",
        borderRadius: "10px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        width: "300px",
        margin: "2rem auto",
        fontFamily: "Arial, sans-serif",
    },
    avatar: {
        width: "150px",
        height: "150px",
        borderRadius: "50%",
        marginBottom: "1rem",
    },
    name: {
        fontSize: "1.5rem",
        margin: "0.5rem 0",
    },
    email: {
        fontSize: "1rem",
        color: "#777",
        marginBottom: "1rem",
    },
    logoutButton: {
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

export default Profile;