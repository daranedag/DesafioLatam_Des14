import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import "../assets/css/profile.css";

const Profile = ({ user }) => {
    const { token, logout } = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogout = () =>{
        logout();
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