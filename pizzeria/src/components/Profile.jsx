import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import "../assets/css/profile.css";

const Profile = ({ user }) => {
    const { getProfile, logout} = useContext(UserContext);
    const [profile, setProfile] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchProfile = async () => {
            const userProfile = await getProfile();
            setProfile(userProfile);
        };
        fetchProfile();
    }, [getProfile]);
    
    const handleLogout = () =>{
        logout();
        navigate("/");
    }

    return (
        <div className="container" id="container">
            <h1> Perfil </h1>
            {profile ? (
                <div>
                    <img id="avatar" src="https://www.w3schools.com/howto/img_avatar.png" alt="Anonymous avatar"/>
                    <p>Email: {profile.email}</p>
                    <button className="btn btn-danger" id="logoutButton" onClick={handleLogout}>
                        Cerrar Sesión
                    </button>
                </div>
            ) : (
                <p>Cargando perfil ...</p>
            )}            
        </div>
    );
};

export default Profile;