import React from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/profile.css";

const Profile = ({ user }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        alert("Cerrando sesión");
        navigate("/");
    }

    return (
        <div id="container">
            <img id="avatar" src="https://www.w3schools.com/howto/img_avatar.png" alt="Anonymous avatar"/>
            <h2 id="name">{`${user.nombre} ${user.apellido}`}</h2>
            <p id="email">{user.email}</p>
            <button id="logoutButton" onClick={handleLogout}>
                Cerrar Sesión
            </button>
        </div>
    );
};

export default Profile;